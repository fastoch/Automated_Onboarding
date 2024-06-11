function getSheetById(sheet_id) {

  // accessing the workbook (wb)
  var wb = SpreadsheetApp.getActiveSpreadsheet();

  // access all the sheets in the workbook
  var sheets = wb.getSheets();

  // loop through the sheets variable
  for(i in sheets) {
    // if the sheet id matches the sheet argument
    if(sheets[i].getSheetId() == sheet_id) {
      // store the sheet name 
      var sheetName = sheets[i].getSheetName();
    }
  }
  
  // return the target sheet
  return wb.getSheetByName(sheetName);

}
