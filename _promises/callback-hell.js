var fs = require('fs');
var fileContent = "Data to be written to file";
fs.writeFile("kofi.txt", fileContent, function(err) {
    if (err) { 
        throw err; 
    }
    //nested callback
    fs.readFile("kofi.txt", function(err, fileContent) {
        if (err) {
            throw err;
        }
        console.log("About to Data Contents:")
        console.log(fileContent);
        fs.writeFile("kofi-two.txt", fileContent, function(err) {
            if (err) { 
                throw err; 
            }
            console.log('kofi-two successfully written to disk');
        });
    });
});
console.log("Done Executing");