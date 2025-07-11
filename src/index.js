"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
function createSystemCommands() {
    process.argv.forEach(function (value, index) {
        var jsonArs = "{\n            \"[\\n\\t{\\n\\n\\t}\\n]\n            \\n\n         }";
        getCommand(jsonArs);
    });
}
createSystemCommands();
function getCommand(cmd) {
    if (cmd != "") {
        console.log("Created JSON FILE");
        fs_1.default.writeFile("main.json", cmd.trim(), function (err) {
            if (err instanceof Error) {
                throw new Error("Error");
            }
        });
    }
}
