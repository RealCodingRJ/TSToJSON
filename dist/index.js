"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function createSystemCommands() {
    process.argv.forEach((value) => {
        if (value.startsWith("--JSON")) {
            const jsonArs = "[\n\t{\n\n\t}\n]\n";
            getCommand(jsonArs);
        }
    });
}
createSystemCommands();
function getCommand(cmd) {
    if (cmd != "") {
        console.log("Created JSON FILE");
        fs_1.default.writeFile("main.json", cmd.trim(), (err) => {
            if (err instanceof Error) {
                throw new Error("Error");
            }
        });
    }
}
