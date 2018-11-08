const options = {
    options: {
        // change to true to see chat logs in console
        debug: false
    },
    connection: {
        secure: true,
        reconnect: true
    },
    identity: {
        username: 'bots-username',
        password: 'oauth-token'
    },
    channels: ['channel-name, use commas to seperate channels']
}

module.exports = options;