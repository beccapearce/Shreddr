urlChange();

function showNote(id) {
var displaynote = new NoteSingleView(displayall.notes.list[id]);
     var element = document.getElementById("listofnotes");
     element.innerHTML = displaynote.render();
     }

     function urlChange() {
       window.addEventListener("hashchange", showCurrentPageId);
     }

     function showCurrentPageId() {
       showNote(getIdfromUrl(window.location));
     }

     function getIdfromUrl(location) {
       return location.hash.split('#')[1];
     }
