import fs from 'fs';

function createSystemCommands() {
    process.argv.forEach((value ) => {

        if (value.startsWith("--JSON")) {

            const jsonArs =
                "[\n\t{\n\n\t}\n]\n";

            getCommand(jsonArs)

        }

    });
}

createSystemCommands();

function getCommand(cmd: string) {
    if (cmd != "") {

        console.log("Created JSON FILE");
        fs.writeFile("main.json", cmd.trim(), (err) => {

            if (err instanceof  Error) {
              throw new Error("Error");

            }

        })

    }
}
