(function(exports) {

  function Note(message) {
    this.message = message;
  }

  Note.prototype.readMessage = function() {
    return this.message;
  };

  exports.Note = Note;
})(this);
