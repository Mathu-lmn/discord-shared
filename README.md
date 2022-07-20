# discord-shared

__discord-shared__ is a NodeJS script to get the list of mutual members
in a list of servers.

#### Thanks to @majorgamerjay for the original script.


## Features

Features in this program include:

- Can return member information verbosely.
- Configuration and server list files in JSON.
- Pretty print (Indented+Non-JSON) or print out as JSON.

## Installation

1. Clone this repository:

```
git clone https://github.com/Mathu-lmn/discord-shared.git discord-shared
```

2. Install NPM Packages

```
cd discord-shared
npm install
```

3. Setup configuration:

Edit `config/config.json` and fill the empty values

To find you discord token, read this [guide](https://github.com/Mathu-lmn/get-discord-token).

4. Add server list:

Edit `config/server_list.json` and add servers ID to the array

5. Edit the npm package to track using your own client

- Open `node_modules/discord.js/src/client/Client.js` with your
favorite text editor.

- Replace `'BOT'` with `''`

- Make sure it looks like this:

![Screenshot](https://i.imgur.com/bes90St.png)

## Usage

- Open CMD
- `cd discord-shared`
- `node src/index.js`

## Contributing

Pull requests are welcome and if you want to make a major contribution,
better to open an issue and discuss about it first.

## Screenshots from the original script as it's the same

### Pretty printed verbosely
![Pretty printed verbosely](https://i.imgur.com/1D1WihW.png)

### Pretty printed non-verbose
![Pretty printed non-verbose](https://i.imgur.com/ECqn9Ek.png)

### Not pretty printed verbosely
![Not pretty printed verbosely](https://i.imgur.com/SdDHBef.png)

### Not pretty printed non-verbose
![Not pretty printed non-verbosely](https://i.imgur.com/L8K9AYh.png)
