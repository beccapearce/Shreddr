function Note(message) {
  this.message = message;
}

Note.prototype.readMessage = function() {
  return this.message;
};

module.exports = Note;
