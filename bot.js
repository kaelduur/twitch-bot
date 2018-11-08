// tmi.js initial
const tmi = require('tmi.js');
// settings for the client
const options = require('./options.js');

// creating client with settings
const client = new tmi.client(options);

// connected to server
client.on('connected', function(address, port) {
    console.log('Successfully connected');
});

// disconnected
client.on('disconnected', function(reason) {
    console.log('Disconnected! Reason: ' + reason);
});

// check if user is a moderator or not
// user.mod is not working for the streamer
function modCheck(channel, user) {
    if(user.mod || user.username === channel.replace('#', ''))
        return true;
    else if(!user.mod)
        return false;
}

// write this in every 5 minutes
setInterval(function() {
    client.say('channel-name-here', "Don't forget to follow!");
}, 300000);

let commands = {
    '!steam' : function(channel)
    {
        client.say(channel, 'steam-link-here');
    },
    '!twitter' : function(channel)
    {
        client.say(channel, 'twitter-link-here');
    },
    // mod commands
    '!followers' : function(channel, user)
    {
        if(modCheck(channel, user))
            client.followersonly(channel, 0);
    },
    '!followersoff' : function(channel, user)
    {
        if(modCheck(channel, user))
            client.followersonlyoff(channel);
    },
    '!clear' : function(channel, user)
    {
        if(modCheck(channel, user))
            client.clear(channel);
    }
}

// chat message listener
client.on('chat', function(channel, user, message, self) {
    // ignore bot itself
    if(self) return;

    // check if message starts with prefix '!'
    if(message.indexOf('!') == 0 && message.length > 1) {
        let parsedCommand = message.toLowerCase().split(' ')[0];

        if(commands.hasOwnProperty(parsedCommand)) {
            // execute command
            commands[parsedCommand] (channel, user, message, self);
        }
    }
});

// subscription alert
client.on('subscription', function(channel, username, method, message, userstate) {
    client.say(channel, username + ' just subscribed. Welcome!');
})

// resub alert
client.on('resub', function(channel, username, months, message, userstate, methods) {
    client.say(channel, username + " resubbed for " + months + ". Welcome back!");
})

// ban log
client.on('ban', function(channel, username, reason) {
    console.log(username + ' is banned from ' + channel);
    console.log('reason: ' + reason);
});

// connect the client to the server
client.connect();