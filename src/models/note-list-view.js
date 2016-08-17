(function(exports) {

  function NoteListView(notelist) {
    this.notes = notelist;
  }

  NoteListView.prototype.render = function(){
      var returnString = "<ul>";
      for(var i=0; i<this.notes.list.length; i++){
      returnString += "<li><div><a id="+[i]+" href='#" + [i] + " '>" + this.notes.list[i].readMessage().substring(0,20) + "</a></div></li>";
    }
    return returnString + "</ul>";
  };

  exports.NoteListView = NoteListView;
})(this);
