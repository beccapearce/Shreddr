Storage.prototype.save = function(key, value){
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.retrieve = function(key){
  var value = localStorage.getItem(key);
  return JSON.parse(value);
};

console.log(localStorage);
