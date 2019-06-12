/**
 * Sends non-duplicate emails once student has hit 2 absenses  from the current spreadsheet.
 Note: Google Apps Script is based on JavaScript 1.6 with some portions of 1.7 and 1.8 and provides subset of ECMAScript 5 API
 */
/**
 * Sends non-duplicate emails once student has hit 2 absenses  from the current spreadsheet.
 */

function sendEmail() {
  var sheet = SpreadsheetApp.getActiveSheet();
//******** ENTER ROW NUMBER OF FIRST STUDENT HERE *************//////////////////////////////////////////
  var startRow = 10; 
//******** ENTER NUMBER OF STUDENTS HERE *************//////////////////////////////////////////////////
  var numRows = 16; 
  // Fetch the range of cells A-E
  var dataRange = sheet.getRange(startRow, 1, numRows, 5);
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (var i = 0; i < data.length; ++i) {
    var row = data[i];
    //fetches students email
    var student_emailAddress = row[1]; // First column
    //fetches absence value
    var absence = row[4]; // Third column
    var student_subject = "Attendance policy";
    var student_message = "It appears you have reached your second absence. Flatiron school compliance dictates that a student can miss at most 3 days outside of extenuating circumstances. Please contact your SEC for further information."
//*********** ENTER SEC EMAIL HERE *************////////////////////////////////////////////////////////
    var SEC_email = "youemailhere@youremailhere.com";
    
    var SEC_subject = "Attendance policy";
    var SEC_message = "A student has reached their second absence, please check the attendance sheet and arrange a 1:1 with the student."+absence + student_emailAddress;

    // on 2nd absence SEC and Student will be sent an email
    if (absence == 2) { 
      MailApp.sendEmail(student_emailAddress, student_subject, student_message );
      MailApp.sendEmail(SEC_email,SEC_subject,SEC_message);
      //updates absence row to prevents sending duplicates
      sheet.getRange(startRow + i, 5).setValue("EMAIL_SENT");
      
      // Make sure the cell is updated right away in case the script is interrupted
      SpreadsheetApp.flush();
    }
  }
}

//sendEmail();
//When a students edit the sheet, this function will call sendEmail
function onEdit(e){
sendEmail(); 
}

              
