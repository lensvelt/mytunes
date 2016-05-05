// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,
  queue: [],
  length: 0,

  initialize: function() {
    this.on('ended', function() {
      this.queue.shift();
      this.length = this.queue.length;
    });
  },

  add: function(song) {
    this.queue.push(song);
    console.log("queue: ", this.queue);
    if (this.queue.length === 1) {
      this.playFirst(song);
    }
    this.length = this.queue.length;
  },

  playFirst: function(song) {
    this.queue[0].play;
  },

});