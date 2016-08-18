(function(exports) {

  function NoteList() {
    this.list = [];
  }

  NoteList.prototype.retrieveNoteList = function(){
    this.list = [];
    for(var i = 0; i < localStorage.length; i++){
      this.list.push(localStorage.retrieve(i));
    }
  };

  exports.NoteList = NoteList;
})(this);
