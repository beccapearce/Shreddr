(function(exports) {

  function NoteSingleView(note) {
    this.note = note;
  }

  NoteSingleView.prototype.render = function(){
      return "<div>" + this.note.readMessage() + "</div>";
    
    };

  exports.NoteSingleView = NoteSingleView;
})(this);
