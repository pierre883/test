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
 * Reads all data from a specific sheet
 * @param {string} sheetName - The name of the sheet to read from
 * @return {Array} 2D array of all values in the sheet
 */
function readFromSheet(sheetName) {
    try {
        var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
        var sheet = spreadsheet.getSheetByName(sheetName);
        
        if (!sheet) {
            Logger.log('Sheet "' + sheetName + '" not found.');
            return [];
        }
        
        var data = sheet.getDataRange().getValues();
        Logger.log('Read ' + data.length + ' rows from sheet: ' + sheetName);
        return data;
    } catch (error) {
        Logger.log('Error reading from sheet: ' + error.message);
        return [];
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
        Logger.log('Email sent2 to: ' + recipient);
        return true;
    } catch (error) {
        Logger.log('Error sending email: ' + error.message);
        return false;
    }
}