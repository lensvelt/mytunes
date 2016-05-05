// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({
  
  model: SongModel,

  initialize: function() {
    
    this.on('ended', function() {
      this.shift();
      if (this.length) {
        this.playFirst();
      }
    });

    this.on('add', function() {
      if (this.models.length === 1) {
        this.playFirst();
      } 
    });

    this.on('dequeue', function() {
      this.shift();
      if (this.length) {
        this.playFirst();
      }
    });

    this.on('enqueue', function() {
      this.add();
    });

  },

  playFirst: function() {
    this.models[0].play();
  }



});