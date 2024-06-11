function main() {

  // access the sheet with the form responses
  var formResponses = getSheetById(701351386);

  /* 
  in this URL: 
    https://docs.google.com/spreadsheets/d/1dil25Kbj27X7fjO3JHZLGkIrAHmRP9GC0cAWq1H5UvI/edit#gid=2037980070
  the sheet ID is 2037980070
  */

  // collect all the data from the responses sheet (first row, first column, number of rows, number of columns)
  var formData = formResponses.getRange(1, 1, formResponses.getLastRow(), formResponses.getLastColumn()).getDisplayValues();

  Logger.log(formData); // so you can check collected data at runtime

  // collect the questions 
  var formQuestions = formResponses.getRange(1, 2, 1, formResponses.getLastColumn()-1).getDisplayValues(); 

  /*
  we only collect the first row, hence the first and third arguments
  column 1 is for timestamp, so we begin collecting from col 2
  and we dynamically calculate the number of columns we need to collect
  if we wanted to exclude the last column, we would have written "formResponses.getLastColumn()-2"
  https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getLastColumn()
  */

  Logger.log(formQuestions); // so you can check collected questions at runtime

  // collect the most recent entry in the sheet that contains the form responses
  var lastEntry = formResponses.getRange(formResponses.getLastRow(), 2, 1, formResponses.getLastColumn()-1).getDisplayValues();

  Logger.log(lastEntry);

  // email sender (who's going to submit this form?)
  var emailRecipients1 = 'fabrice.pustoch@givaudan.com'; // replace with the addresses of the recipients, separated by commas
  var emailRecipients2 = 'ian.wyatt@givaudan.com';
  var emailRecipients3 = 'fastoch@ik.me';

  // create template objects for constructing our 3 emails
  var htmlTemplate1 = HtmlService.createTemplateFromFile('email1'); // accessing the email1.html file
  var htmlTemplate2 = HtmlService.createTemplateFromFile('email2'); // accessing the email2.html file
  var htmlTemplate3 = HtmlService.createTemplateFromFile('email3'); // accessing the email3.html file

  // define html variables for the questions (email1)
  htmlTemplate1.question1 = formQuestions[0][0];
  htmlTemplate1.question2 = formQuestions[0][1];
  htmlTemplate1.question3 = formQuestions[0][2];
  htmlTemplate1.question4 = formQuestions[0][3];
  htmlTemplate1.question5 = formQuestions[0][4];
  htmlTemplate1.question6 = formQuestions[0][5];
  htmlTemplate1.question7 = formQuestions[0][6];
  htmlTemplate1.question8 = formQuestions[0][7];
  htmlTemplate1.question9 = formQuestions[0][8];
  htmlTemplate1.question10 = formQuestions[0][9];
  htmlTemplate1.question11 = formQuestions[0][10];
  htmlTemplate1.question12 = formQuestions[0][11];
  htmlTemplate1.question13 = formQuestions[0][12];
  htmlTemplate1.question14 = formQuestions[0][13];
  htmlTemplate1.question15 = formQuestions[0][14];
  htmlTemplate1.question16 = formQuestions[0][15];
  htmlTemplate1.question17 = formQuestions[0][16];
  htmlTemplate1.question18 = formQuestions[0][17];
  htmlTemplate1.question19 = formQuestions[0][18];
  htmlTemplate1.question20 = formQuestions[0][19];

  // define html variables for the questions (email2)
  htmlTemplate2.question1 = formQuestions[0][0];
  htmlTemplate2.question2 = formQuestions[0][1];
  htmlTemplate2.question3 = formQuestions[0][2];
  htmlTemplate2.question4 = formQuestions[0][3];
  htmlTemplate2.question5 = formQuestions[0][4];
  htmlTemplate2.question6 = formQuestions[0][5];
  htmlTemplate2.question7 = formQuestions[0][6];
  htmlTemplate2.question8 = formQuestions[0][7];
  htmlTemplate2.question9 = formQuestions[0][8];
  htmlTemplate2.question10 = formQuestions[0][9];
  htmlTemplate2.question11 = formQuestions[0][10];
  htmlTemplate2.question12 = formQuestions[0][11];
  htmlTemplate2.question13 = formQuestions[0][12];
  htmlTemplate2.question14 = formQuestions[0][13];
  htmlTemplate2.question15 = formQuestions[0][14];
  htmlTemplate2.question16 = formQuestions[0][15];
  htmlTemplate2.question17 = formQuestions[0][16];
  htmlTemplate2.question18 = formQuestions[0][17];
  htmlTemplate2.question19 = formQuestions[0][18];
  htmlTemplate2.question20 = formQuestions[0][19];

  // define html variables for the questions (email3)
  htmlTemplate3.question1 = formQuestions[0][0];
  htmlTemplate3.question2 = formQuestions[0][1];
  htmlTemplate3.question3 = formQuestions[0][2];
  htmlTemplate3.question4 = formQuestions[0][3];
  htmlTemplate3.question5 = formQuestions[0][4];
  htmlTemplate3.question6 = formQuestions[0][5];
  htmlTemplate3.question7 = formQuestions[0][6];
  htmlTemplate3.question8 = formQuestions[0][7];
  htmlTemplate3.question9 = formQuestions[0][8];
  htmlTemplate3.question10 = formQuestions[0][9];
  htmlTemplate3.question11 = formQuestions[0][10];
  htmlTemplate3.question12 = formQuestions[0][11];
  htmlTemplate3.question13 = formQuestions[0][12];
  htmlTemplate3.question14 = formQuestions[0][13];
  htmlTemplate3.question15 = formQuestions[0][14];
  htmlTemplate3.question16 = formQuestions[0][15];
  htmlTemplate3.question17 = formQuestions[0][16];
  htmlTemplate3.question18 = formQuestions[0][17];
  htmlTemplate3.question19 = formQuestions[0][18];
  htmlTemplate3.question20 = formQuestions[0][19];

  // define html variables for the responses of the last entry (email1)
  htmlTemplate1.answer1 = lastEntry[0][0];
  htmlTemplate1.answer2 = lastEntry[0][1];
  htmlTemplate1.answer3 = lastEntry[0][2];
  htmlTemplate1.answer4 = lastEntry[0][3];
  htmlTemplate1.answer5 = lastEntry[0][4];
  htmlTemplate1.answer6 = lastEntry[0][5];
  htmlTemplate1.answer7 = lastEntry[0][6];
  htmlTemplate1.answer8 = lastEntry[0][7];
  htmlTemplate1.answer9 = lastEntry[0][8];
  htmlTemplate1.answer10 = lastEntry[0][9];
  htmlTemplate1.answer11 = lastEntry[0][10];
  htmlTemplate1.answer12 = lastEntry[0][11];
  htmlTemplate1.answer13 = lastEntry[0][12];
  htmlTemplate1.answer14 = lastEntry[0][13];
  htmlTemplate1.answer15 = lastEntry[0][14];
  htmlTemplate1.answer16 = lastEntry[0][15];
  htmlTemplate1.answer17 = lastEntry[0][16];
  htmlTemplate1.answer18 = lastEntry[0][17];
  htmlTemplate1.answer19 = lastEntry[0][18];
  htmlTemplate1.answer20 = lastEntry[0][19];

  // define html variables for the responses of the last entry (email2)
  htmlTemplate2.answer1 = lastEntry[0][0];
  htmlTemplate2.answer2 = lastEntry[0][1];
  htmlTemplate2.answer3 = lastEntry[0][2];
  htmlTemplate2.answer4 = lastEntry[0][3];
  htmlTemplate2.answer5 = lastEntry[0][4];
  htmlTemplate2.answer6 = lastEntry[0][5];
  htmlTemplate2.answer7 = lastEntry[0][6];
  htmlTemplate2.answer8 = lastEntry[0][7];
  htmlTemplate2.answer9 = lastEntry[0][8];
  htmlTemplate2.answer10 = lastEntry[0][9];
  htmlTemplate2.answer11 = lastEntry[0][10];
  htmlTemplate2.answer12 = lastEntry[0][11];
  htmlTemplate2.answer13 = lastEntry[0][12];
  htmlTemplate2.answer14 = lastEntry[0][13];
  htmlTemplate2.answer15 = lastEntry[0][14];
  htmlTemplate2.answer16 = lastEntry[0][15];
  htmlTemplate2.answer17 = lastEntry[0][16];
  htmlTemplate2.answer18 = lastEntry[0][17];
  htmlTemplate2.answer19 = lastEntry[0][18];
  htmlTemplate2.answer20 = lastEntry[0][19];

  // define html variables for the responses of the last entry (email3)
  htmlTemplate3.answer1 = lastEntry[0][0];
  htmlTemplate3.answer2 = lastEntry[0][1];
  htmlTemplate3.answer3 = lastEntry[0][2];
  htmlTemplate3.answer4 = lastEntry[0][3];
  htmlTemplate3.answer5 = lastEntry[0][4];
  htmlTemplate3.answer6 = lastEntry[0][5];
  htmlTemplate3.answer7 = lastEntry[0][6];
  htmlTemplate3.answer8 = lastEntry[0][7];
  htmlTemplate3.answer9 = lastEntry[0][8];
  htmlTemplate3.answer10 = lastEntry[0][9];
  htmlTemplate3.answer11 = lastEntry[0][10];
  htmlTemplate3.answer12 = lastEntry[0][11];
  htmlTemplate3.answer13 = lastEntry[0][12];
  htmlTemplate3.answer14 = lastEntry[0][13];
  htmlTemplate3.answer15 = lastEntry[0][14];
  htmlTemplate3.answer16 = lastEntry[0][15];
  htmlTemplate3.answer17 = lastEntry[0][16];
  htmlTemplate3.answer18 = lastEntry[0][17];
  htmlTemplate3.answer19 = lastEntry[0][18];
  htmlTemplate3.answer20 = lastEntry[0][19];

  // Evaluate our template objects and return 3 HtmlOutput objects.
  var htmlForEmail1 = htmlTemplate1.evaluate().getContent();
  var htmlForEmail2 = htmlTemplate2.evaluate().getContent();
  var htmlForEmail3 = htmlTemplate3.evaluate().getContent();

  // send the first email (recipient, subject, body)
  GmailApp.sendEmail(
    emailRecipients1,
    'New User Request - Ticket 1/3',
    'This email is part of an automated onboarding process',
    {htmlBody: htmlForEmail1}
  );

  // send the second email (recipient, subject, body)
  GmailApp.sendEmail(
    emailRecipients2,
    'New User Request - Ticket 2/3',
    'This email is part of an automated onboarding process',
    {htmlBody: htmlForEmail2}
  );

  // send the third email (recipient, subject, body)
  GmailApp.sendEmail(
    emailRecipients3,
    'New User Request - Ticket 3/3',
    'This email is part of an automated onboarding process',
    {htmlBody: htmlForEmail3}
  );

}
