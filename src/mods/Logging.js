const Colors = require('./Colors');

class Logger {
    constructor (
        bool_fs=false,
        path="discord-shared.log") {

        if (bool_fs) {
            this.bool_fs = bool_fs;
            this.fs = require('fs');
            this.path = path;
            this.fs.writeFile(path, '', err => { if (err) console.log(err) });
        }
    }

    logOutput(type, message) {
        switch (type) {
            case "INFO":
                console.log(`${Colors.coloredOutput("CYAN", "INFO >")} ${message}`);
                if (this.bool_fs) this.fs.appendFile(this.path, `[INFO] ${message}\n`, err => { if (err) console.log(err) })
                break;
            case "WARN":
                console.log(`${Colors.coloredOutput("YELLOW", "WARNING >")} ${message}`);
                if (this.bool_fs) this.fs.appendFile(this.path, `[WARNING] ${message}\n`, err => { if (err) console.log(err) })
                break;
            case "ERR":
                console.log(`${Colors.coloredOutput("RED", "ERROR >")} ${message}`);
                if (this.bool_fs) this.fs.appendFile(this.path, `[ERROR] ${message}\n`, err => { if (err) console.log(err) })
                break;
            case "SUCC":
                console.log(`${Colors.coloredOutput("GREEN", "SUCCESS >")} ${message}`);
                if (this.bool_fs) this.fs.appendFile(this.path, `[SUCCESS] ${message}\n`, err => { if (err) console.log(err) })
                break;
        }
    }
}

module.exports = {
    Logger: Logger
};
