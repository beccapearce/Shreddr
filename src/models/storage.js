// Storage.prototype.save = function(key, value){
//   this.setItem(key, JSON.stringify(value));
// };
//
// Storage.prototype.retrieve = function(key){
//   var value = localStorage.getItem(key);
//   return JSON.parse(value);
// };

var note = "dummy text";

function saveNote(note) {
  var httprequest = new XMLHttpRequest();
  httprequest.open("POST", "http://localhost:4567/notes");
  httprequest.send(note);
}
