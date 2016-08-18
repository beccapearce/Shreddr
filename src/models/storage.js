Storage.prototype.save = function(key, value){
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.retrieve = function(key){
  var value = localStorage.getItem(key);

  return JSON.parse(value);
};

var storedNote = 'random string';

// localStorage.save(0, storedNote);
// localStorage.retrieve(0);
// localStorage.removeItem("random string");
localStorage.clear();
console.log(localStorage);
