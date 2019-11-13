//onEdit
//This function must be tied to an onEdit trigger 
// Go to Edit > Current projects triggers 
// Select Add Trigger 
// Choose which function to run > onEdit
//Select event type 'On edit'
function onEdit(evt){

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var data = ss.getDataRange().getValues();
  
  var column =98; //absence index   
  var columnValues = sheet.getRange(2, column, sheet.getLastRow()).getValues();
 
   for(var i=0; i < columnValues.length; i++){
       //row is offset by two 
       var row = i+2;
       var emailStatus = sheet.getRange(row,100).getValues();

     if(columnValues[i][0] === 3.0 && emailStatus[0] !="SENT"){
      var name = sheet.getRange(row,2).getValues();
      var email = sheet.getRange(row,101).getValue();
      var instructor = sheet.getRange(row,102).getValue();
      var subject = 'Attendance Policy '+ name
 
      //Templates from google docs 
      var docStudent = DocumentApp.openById('doc id here')
      var docInstructor = DocumentApp.openById('doc id here')


      //Student email logic
      var htmlBody = HtmlService.createHtmlOutputFromFile('mail_template').getContent();
       MailApp.sendEmail({
       to: email,
       subject: subject,
       htmlBody: htmlBody,
       name: 'Automatic Emailer Script',
       attachments: [docStudent]
       });
       
       //Instructor email logic
      var emailArray = instructor.split(", ");
      var htmlBody = HtmlService.createHtmlOutputFromFile('instructor_mail_temp').getContent();
         for(var i = 0; i < emailArray.length; i++){
           MailApp.sendEmail({
             to: emailArray[i],
             subject: subject,
             htmlBody: htmlBody,
             name: 'Automatic Emailer Script',
            attachments: [docInstructor]
           });
         } 

       sheet.getRange(row,100).setValue("SENT");  
     }
   }
}

