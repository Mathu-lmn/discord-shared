class ColorOutput {
    constructor (color, message) {
        switch (color) {
            case "GREEN":

        }
    }
}

function coloredOutput(color="none", message) {
    switch (color) {
        case "GREEN":
            return `\u001b[32m${message}\u001b[0m`;
        case "CYAN":
            return `\u001b[36m${message}\u001b[0m`;
        case "YELLOW":
            return `\u001b[33m${message}\u001b[0m`;
        case "RED":
            return `\u001b[31m${message}\u001b[0m`;
        default:
            return `${message}`;
    }
}

module.exports = {
    coloredOutput: coloredOutput
};
