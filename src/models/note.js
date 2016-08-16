(function(exports) {

  function Note(message, id) {
    this.message = message;
    this.id = id;
  }

  Note.prototype.readMessage = function() {
    return this.message;
  };

  exports.Note = Note;
})(this);
