(function(exports) {

  function NoteSingleView(note) {
    this.note = note;
  }

  NoteSingleView.prototype.render = function(){
      return "<div>" + this.note.message + "</div>";
    };

  exports.NoteSingleView = NoteSingleView;
})(this);
