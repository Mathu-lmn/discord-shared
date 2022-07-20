const Colors  = require('./Colors');
const Logging = require('./Logging');
const logger  = new Logging.Logger();

class PrettyUser {
    constructor (user, userCache, verbose=1) {
        this.overall_user = userCache.get(user);

        if (verbose == 1) {
            console.log(`Username: ${Colors.coloredOutput("YELLOW", `${this.overall_user.tag}`)}`);
        }

        else {
            console.log(`Information about ${Colors.coloredOutput("YELLOW", `${this.overall_user.tag}`)}:`);
            console.log(`${Colors.coloredOutput("CYAN", "ID: ")} ${this.overall_user.id}`);
            console.log(`${Colors.coloredOutput("CYAN", "Avatar: ")} ${this.overall_user.displayAvatarURL()}`);
            console.log(`${Colors.coloredOutput("CYAN", "Presence: ")} ${this.overall_user.presence.status}`);
        }
    }
}

module.exports = {
    PrettyUser: PrettyUser
}
