const PubSub = {
  publish: function(channel, payload){
    console.log(`published on ${channel} payload ${payload}`)
    // tell it what is the name of the event
    const event = new CustomEvent(channel, { detail: payload});
    document.dispatchEvent(event);
  },
  subscribe: function(channel, callback){
    console.log(`subscribe to ${channel}`)
    document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;
