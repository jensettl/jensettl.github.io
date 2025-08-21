
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "/about",
    "title": "Memoirs, a free minimalist Jekyll blogging theme with modern design",
    "body": "This website is a demonstration to see Memoirs Jekyll theme in action. The theme is compatible with Github pages, in fact even this demo itself is created with Github Pages and hosted with Github.  Get Memoirs for Jekyll → "
    }, {
    "id": 2,
    "url": "/authors",
    "title": "Authors",
    "body": "                                                                                                                    Sal:         Author of Memoirs, a Bootstrap Medium styled template available for Jekyll. You are currently previewing Jekyll template demo.                                                                                                                                    Jens:         Content creator for this blog and user of this Jekyll template. I love to tackle problems with creative coding solutions and automations.                "
    }, {
    "id": 3,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "/contact",
    "title": "Contact",
    "body": "  Please send your message to Jens' Blog. We will reply as soon as possible!   "
    }, {
    "id": 5,
    "url": "/",
    "title": "Home",
    "body": "                                                                                               Template instructions for creating a blog post              :       Add a specific header to your post:                                                                               Jens                 21 Aug 2025                                                                                                                           Markdown Syntax              :       This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case:                                                                               Jens                 21 Aug 2025                                "
    }, {
    "id": 6,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "/template-for-creating-post/",
    "title": "Template instructions for creating a blog post",
    "body": "2025/08/21 - Add a specific header to your post: After creating the markdown file for your post, add the following header to the top of the file. ---layout: posttitle:  Title of your post author: jenscategories: [ Category 1, Category 2 ]tags: [ Tag 1, Tag 2 ]rating: 4. 5image: path/to/image. jpgbeforetoc:  Short paragraüh to add additional information to your post toc: true # Summary---Content: After the header start writing the content of your post in markdown syntax. "
    }, {
    "id": 8,
    "url": "/markdown-syntax/",
    "title": "Markdown Syntax",
    "body": "2025/08/21 - This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case Basic: These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.       Element   Markdown Syntax         Headinng   # H1 ## H2 ### H3       Bold Text   ** Text **       Italic   * Text *       Blockquote   &gt; Text       Ordered List   1. First 2. Second 3. Third       Unordered List   - First - Second - Third       Code   `Code`       Horizontal Rule   —       Link   [Text] (URL)       Image   ! [Text] (URL)    Extended Syntax: These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.       Element   Markdown Syntax         Table   | Header 1 | Header 2 | | —- | ———– | | Cell 1 | Cell 2 |       Fenced Code Block   ``` { “firstName”: “John”, “lastName”: “Smith”, “age”: 25 } ```       Footnote   Here’s a sentence with a footnote. [^1] [^1]: Another sentence with footnote.        Striketrough   ~~The world is flat. ~~       Escape Symbol   \   "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});