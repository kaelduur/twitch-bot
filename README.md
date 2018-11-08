# Twitch Bot
Simple chat bot for [Twitch.tv](https://twitch.tv/) written in JavaScript.
## Install
1. Clone repository
2. Install modules ```npm i```
3. Rename ```options.example.js``` to ```options.js```
4. Create a new Twitch account for the bot
```
identity: {
        username: 'bots-username',
        password: 'oauth-token'
    },
channels: ['channel-name, use commas to seperate channels']
```
You can create ```oauth-token``` [here](https://twitchapps.com/tmi/)

5. Run bot ```node bot.js```
## Commands
### For users
```
!steam
!twitter
```
### For mods
```
!followers
!followersoff
!clear
```
## Links
[tmi.js](https://docs.tmijs.org/)
