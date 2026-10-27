// Site search (_includes/search-lunr.html): a dialog opened by the Search button in the header,
// "/" or Ctrl+K. Results update while you type. lunr and the index load on first open, so pages
// where nobody searches don't download them.
(function () {
	var dialog = document.getElementById('search');
	if (!dialog || typeof dialog.showModal !== 'function') return;

	var form = dialog.querySelector('form');
	var input = document.getElementById('search-input');
	var list = document.getElementById('search-results');
	var status = document.getElementById('search-status');
	var loading = null;
	var HINT = 'Type a word to search all posts.';
	var MAX_RESULTS = 10;

	function loadScript(src) {
		return new Promise(function (resolve, reject) {
			var s = document.createElement('script');
			s.src = src;
			s.onload = resolve;
			s.onerror = reject;
			document.head.appendChild(s);
		});
	}

	function loadIndex() {
		if (!loading) {
			status.textContent = 'Loading search…';
			loading = loadScript(dialog.dataset.lunr)
				.then(function () { return loadScript(dialog.dataset.index); })
				.then(render)
				.catch(function () {
					loading = null;
					status.textContent = 'Search could not load. Check your connection and open it again.';
				});
		}
		return loading;
	}

	function open() {
		if (dialog.open) return;
		dialog.showModal();
		input.select();
		if (window.idx) render(); else loadIndex();
	}

	function close() {
		dialog.close();
	}

	// Words of at least one letter or digit; lunr's query syntax characters never reach it.
	function wordsOf(term) {
		return term.toLowerCase().match(/[\p{L}\p{N}]+/gu) || [];
	}

	function search(words) {
		// Every word as typed (stemmed by lunr), plus the last one as a prefix while it's being typed.
		var last = words[words.length - 1];
		var query = words.join(' ') + (last.length > 1 ? ' ' + last + '*' : '');
		try {
			return window.idx.search(query).slice(0, MAX_RESULTS);
		} catch (e) {
			return [];
		}
	}

	function escapeRe(s) {
		return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	// Appends text to el, wrapping the searched words in <mark> (the highlighter).
	function appendMarked(el, text, words) {
		var re = new RegExp('(' + words.map(escapeRe).join('|') + ')', 'gi');
		text.split(re).forEach(function (part, i) {
			if (!part) return;
			if (i % 2) {
				var mark = document.createElement('mark');
				mark.textContent = part;
				el.appendChild(mark);
			} else {
				el.appendChild(document.createTextNode(part));
			}
		});
	}

	// About 170 characters of the body, starting shortly before the first searched word.
	function snippetOf(body, words) {
		var lower = body.toLowerCase();
		var hit = -1;
		words.forEach(function (w) {
			var at = lower.indexOf(w);
			if (at !== -1 && (hit === -1 || at < hit)) hit = at;
		});
		var start = hit > 60 ? body.lastIndexOf(' ', hit - 50) + 1 : 0;
		var end = start + 170;
		var text = body.slice(start, end);
		if (end < body.length) text = text.replace(/\s+\S*$/, '') + '…';
		return (start > 0 ? '…' : '') + text;
	}

	function resultItem(doc, words) {
		var li = document.createElement('li');
		var a = document.createElement('a');
		a.className = 'search-result';
		a.href = doc.url;

		if (doc.type || doc.date) {
			var meta = document.createElement('span');
			meta.className = 'search-result-meta';
			if (doc.type) {
				var label = document.createElement('span');
				label.className = 'post-type post-type--' + doc.type;
				label.textContent = doc.type.charAt(0).toUpperCase() + doc.type.slice(1);
				meta.appendChild(label);
			}
			if (doc.date) meta.appendChild(document.createTextNode(doc.date));
			a.appendChild(meta);
		}

		var title = document.createElement('span');
		title.className = 'search-result-title';
		appendMarked(title, doc.title, words);
		a.appendChild(title);

		var snippet = document.createElement('span');
		snippet.className = 'search-result-snippet';
		appendMarked(snippet, snippetOf(doc.body, words), words);
		a.appendChild(snippet);

		li.appendChild(a);
		return li;
	}

	function render() {
		if (!window.idx) return;
		var words = wordsOf(input.value);
		list.textContent = '';
		if (!words.length) {
			status.textContent = HINT;
			return;
		}
		var results = search(words);
		if (!results.length) {
			status.textContent = 'No posts found for “' + input.value.trim() + '”. Try a shorter or different word.';
			return;
		}
		status.textContent = results.length === 1 ? '1 post' : (results.length === MAX_RESULTS ? 'Top ' + MAX_RESULTS + ' posts' : results.length + ' posts');
		results.forEach(function (r) {
			list.appendChild(resultItem(window.documents[r.ref], words));
		});
	}

	function resultLinks() {
		return Array.prototype.slice.call(list.querySelectorAll('.search-result'));
	}

	input.addEventListener('input', render);

	// Enter opens the first result.
	form.addEventListener('submit', function (e) {
		e.preventDefault();
		var first = resultLinks()[0];
		if (first) window.location.href = first.href;
	});

	// Arrow keys move between the field and the results.
	dialog.addEventListener('keydown', function (e) {
		if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
		var links = resultLinks();
		if (!links.length) return;
		var at = links.indexOf(document.activeElement);
		var next = e.key === 'ArrowDown' ? at + 1 : at - 1;
		if (next >= links.length) return;
		e.preventDefault();
		if (next < 0) input.focus(); else links[next].focus();
	});

	// A click on the dimmed backdrop (the dialog element itself, outside the panel) closes it.
	dialog.addEventListener('click', function (e) {
		if (e.target === dialog) close();
	});
	dialog.querySelector('[data-search-close]').addEventListener('click', close);

	document.querySelectorAll('[data-search-open]').forEach(function (btn) {
		btn.addEventListener('click', open);
	});

	document.addEventListener('keydown', function (e) {
		var el = document.activeElement;
		var typing = el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));
		if (e.key === '/' && !typing && !e.ctrlKey && !e.metaKey && !e.altKey) {
			e.preventDefault();
			open();
		} else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
			e.preventDefault();
			open();
		}
	});
})();
