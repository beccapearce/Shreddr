(function(exports) {

  function NoteList() {
    this.list = [];
  }

  NoteList.prototype.retrieveNoteList = function(){
  for(var i = 0; i < localStorage.length; i++){
  this.list.push(localStorage.retrieve(i));
  }
};


    // NoteList.prototype.print = function() {
    //   return this.list;
    // };
    //
    // NoteList.prototype.createNote = function(text) {
    //   var note = new Note(text, this.generateId());
    //   this.list.push(note);
    // };
    //
    // NoteList.prototype.generateId = function() {
    //   return this.list.length;
    // };

  exports.NoteList = NoteList;
})(this);
