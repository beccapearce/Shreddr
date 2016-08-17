(function(exports) {

  function NoteList() {
    this.list = [];
  }

    // NoteList.prototype.print = function() {
    //   return this.list;
    // };

    NoteList.prototype.createNote = function(text) {
      var note = new Note(text, this.generateId());
      this.list.push(note);
    };

    NoteList.prototype.generateId = function() {
      return this.list.length;
    };

  exports.NoteList = NoteList;
})(this);
