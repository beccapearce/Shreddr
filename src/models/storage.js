// Storage.prototype.save = function(key, value){
//   this.setItem(key, JSON.stringify(value));
// };
//
// Storage.prototype.retrieve = function(key){
//   var value = localStorage.getItem(key);
//   return JSON.parse(value);
// };

(function(exports) {

  function Storage() {
  }

  Storage.prototype.saveNote = function(note, callback){
    var httprequest = new XMLHttpRequest();
    var jsonNote = JSON.stringify(note);
    httprequest.open("POST", "http://localhost:4567/notes?message=" + jsonNote);
    httprequest.send(jsonNote);
    callback();
  };

  Storage.prototype.retrieveAllNotes = function() {
    var httprequest = new XMLHttpRequest();
    var data = [];
    httprequest.onreadystatechange = function() {
      if (httprequest.readyState == 4 && httprequest.status == 200) {
      data.push(JSON.parse(httprequest.responseText));
      }
    };
      httprequest.open("GET", "http://localhost:4567/notes");
      httprequest.send();
      return data;
  };

  exports.Storage = Storage;
})(this);
