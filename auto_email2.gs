
function onEdit(evt){
Logger.log('Content Edited') 

var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var data = ss.getDataRange().getValues();
  
  var column =8; //column Index   
  var columnValues = sheet.getRange(2, column, sheet.getLastRow()).getValues();
   Logger.log(columnValues)

   for(var i=0; i < columnValues.length; i++){
        var row = i+2;
       var emailStatus = sheet.getRange(row,10).getValues();
     if(columnValues[i][0] === 3.0 && emailStatus[0] !="SENT"){
      Logger.log("returns the row")
      Logger.log(i+2)
   
       //Gets Name
      var name = sheet.getRange(row,2).getValues();
      var email = sheet.getRange(row,3).getValues();
      var instructor = sheet.getRange(row,4).getValues();
     
      writeEmail(name,email,instructor);
     }
   }
 
}

function calculateAbsences(input){
  Logger.log(input)
}

function calculateLate(input){
  //calculate to 3 
  //use clarecontent once there
  

}

function complianceEmailSent(){
}

function writeEmail(studentName, studentEmail, instructor){
 Logger.log("studentName")
      Logger.log(studentName)
      Logger.log("studentEmail")
      Logger.log(studentEmail)
      Logger.log("instructor")
      Logger.log(instructor)
       Logger.log("0")
  var ss = SpreadsheetApp.getActiveSpreadsheet();
   Logger.log("done")
  var sheet = ss.getActiveSheet();
  Logger.log("done0")
 var doc = DocumentApp.openById('put doc id here')
    Logger.log("done1")
 var body = doc.getBody();


    Logger.log("done2")
 body.insertParagraph(0, ss.getName())
 .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  Logger.log("done3")
  

}