function logToConsole(message) {
    console.log(message);
}

/**
 * Writes data to a Google Sheet
 * @param {string} sheetName - The name of the sheet to write to
 * @param {Array} data - Array of values to append as a new row
 */
function writeToSheet(sheetName, data) {
    try {
        var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
        var sheet = spreadsheet.getSheetByName(sheetName);
        
        if (!sheet) {
            Logger.log('Sheet "' + sheetName + '" not found. Creating new sheet.');
            sheet = spreadsheet.insertSheet(sheetName);
        }
        
        sheet.appendRow(data);
        Logger.log('Data written to sheet: ' + sheetName);
        return true;
    } catch (error) {
        Logger.log('Error writing to sheet: ' + error.message);
        return false;
    }
}

/**
 * Sends an email notification
 * @param {string} recipient - Email address to send to
 * @param {string} subject - Email subject
 * @param {string} body - Email body content
 */
function sendNotification(recipient, subject, body) {
    try {
        GmailApp.sendEmail(recipient, subject, body);
        Logger.log('Email sent to: ' + recipient);
        return true;
    } catch (error) {
        Logger.log('Error sending email: ' + error.message);
        return false;
    }
}