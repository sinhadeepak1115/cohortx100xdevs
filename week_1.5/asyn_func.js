const fs = require("fs");

fs.readFile("/Users/deepak/Projects/cohortx100/week_1.5/a.txt", "utf-8", function(err, data) {
    console.log(data);
});