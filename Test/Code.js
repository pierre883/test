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

/**
 * Generates a random number
 * @returns {number} A random number between 0 and 1
 */
function getRandomNumber() {
    return Math.random();
}

/**
 * Generates a random integer between a given range (inclusive)
 * @param {number} min - The minimum value
 * @param {number} max - The maximum value
 * @returns {number} A random integer
 */
function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a random string of a given length
 * @param {number} length - The length of the random string
 * @returns {string} A random string
 */
function getRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
