---
layout: post
title:  "[PROJECT] Local HEIC-JPEG Converter"
author: jens
categories: [ Project, Python ]
image: assets/images/PRJ-heic-converter/cover_heic_converter.png
pin: false
---

> Windows users often face compatibility issues, as many applications do not support HEIC files natively. To address this, I developed a simple local HEIC to JPEG converter using Python.

---
## The Problem i aiming to solve
---

HEIC (High Efficiency Image Coding) is a modern image format iPhones use to save photos. While it offers better compression and quality compared to JPEG, many applications and platforms still do not support HEIC files. Since me and my friends often save vacations photos as a collection, I needed a quick way to convert HEIC files to the more widely supported JPEG format.

<div class="warning">
    ⚠️Online converters may pose privacy risks, especially for sensitive images. This local solution ensures your photos remain private.
</div>

---
## Solution: Local Python Script for HEIC to JPEG Conversion
---

Python suits this task perfectly due to its simplicity and the availability of libraries for image processing. I used the **Pillow** library for image handling and **pillow_heif** for reading HEIC files.

```python
  import os                                     # for file system operations
  import logging                                # for logging conversion status
  from PIL import Image                         # for image processing
  from pillow_heif import register_heif_opener  # to handle HEIC files
  import tkinter                                # for GUI file dialogs
  from tkinter import filedialog                # for file dialog
```

I wanted to cover two main use cases: converting individual files and converting all HEIC files in a selected folder.

###### Convert Individual Files

```python
  # Set up logging
  logging.basicConfig(level=logging.INFO, format="%(message)s")

  # Prevent an empty tkinter window from appearing
  tkinter.Tk().withdraw()

  def convert_files(files: list) -> None:
      """Iterates through a list of files and converts them to JPG format and saves them in the same directory."""

      for file in files:
          img = Image.open(file)
          destFilePath = os.path.splitext(file)[0] + ".jpg"
          img.save(destFilePath, "JPEG")
          logging.info(f"{file} converted to {destFilePath}")

```

###### Convert Folder

```python

  def convert_folder(inputFolder) -> None:
      """Converts all HEIC files in a folder to JPG format."""

      for file in os.listdir(inputFolder):
          # Skip if not a HEIC file
          if not file.lower().endswith(".heic"):
              logging.info(f"{file} is not a HEIC file. Skipping...")
              continue

          filePath = os.path.join(inputFolder, file)
          destFilePath = os.path.join(inputFolder, "converted_jpgs")

          if not os.path.exists(destFilePath):
              os.makedirs(destFilePath)

          output_file = os.path.join(destFilePath, os.path.splitext(file)[0] + ".jpg")
          img = Image.open(filePath.replace("\\", "/"))
          img.save(output_file, "JPEG")
          logging.info(f"{file} converted to {output_file}")

      logging.info("Conversion complete.")
      
```

Since HEIC files can be in uppercase or lowercase extensions, I used **file.lower().endswith(".heic")** to ensure all HEIC files are detected. The script creates a subfolder named **converted_jpgs** within the selected folder to store the converted JPEG files.

```python

  def main():
      """Main function that asks user for input and handles files and folders."""
      register_heif_opener()  # Register the HEIF file format with PIL

      print(
            """
            =====================================
              HEIC to JPG Converter
            =====================================
            """
      )

      while True:
          input_type = input(
              """
              Enter the action you would like to perform:
              
                [1] Convert all HEIC files in a folder
                [2] Convert individual HEIC files

              Type 'exit' or 'quit' to close the program.
              
              """
          )

          match input_type.lower():
              case "1":
                  try:
                      folder = filedialog.askdirectory(
                          title="Select folder containing HEIC files to convert."
                      )
                      convert_folder(folder)
                  except FileNotFoundError:
                      logging.info("Folder not found. Please try again.")
                      continue
                  break
              case "2":
                  files = filedialog.askopenfilenames(
                      title="Select HEIC files to convert."
                  )
                  convert_files(files)
                  break
              case "exit", "quit":
                  break
              case _:
                  logging.info("Invalid input. Please enter 'folder' or 'files'.")
                  continue

      input("\nPress enter to exit.")
      exit()


  if __name__ == "__main__":
      main()

```

This script provides a simple command-line interface for users to select either a folder or individual HEIC files for conversion. It uses **tkinter** to open file dialogs, making it user-friendly. 

To run this script, ensure you have the required libraries installed. You can install them using pip:

```bash
  pip install Pillow pillow-heif
```

---
## Conclusion
---

This HEIC to JPEG converter script is a practical solution for Windows users facing compatibility issues with HEIC files.

I learned how Python can be used to fix everyday problems efficiently and safely on your local machine.

---
## Improvements
---

- This repo should be upgraded by using **uv**, a more efficient library manager than pip.
- Adding a GUI using **tkinter** or **PyQt** for a more user-friendly experience.
- Implementing batch processing with progress bars for better user feedback.
- Support for additional image formats like PNG or BMP.
- Use this base to create a whole n:m format conversion tool.

