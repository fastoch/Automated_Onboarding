# How it works

- make a Google form
- link the form to a Google workbook
- from the workbook, open Apps Script (Extensions > Apps Script)
- create 5 files: code.gs, getSheetById.gs, email1.html, email2.html, email3.html
- Run the .gs files manually once so you can allow these scripts on your Google account
- Create a trigger to automate the script execution on form submit
- the purpose is to automatically generate 3 emails to 3 different recipients on form submit
- these emails will contain .html formatted data that will be parsed by a ServiceNow API to convert them into tickets
