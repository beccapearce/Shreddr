console.log("note-single-view-test");

var newNote = new Note("some text");
var newNoteSingleView = new NoteSingleView(newNote);
var yoda = new Yoda();

function testRenderNote() {
  yoda.testAnything(newNoteSingleView.render().equals("<div>some text</div>"), testRenderNote.name);
}

testRenderNote();
