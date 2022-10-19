const fs = require('fs')

const add = function(note,oldNote) {
//parse oldNote from string to object of arrays
const newNote = JSON.parse(oldNote)

newNote.push(note)

//Save new note to note.txt again
  fs.writeFileSync ('note.txt', JSON.stringify(newNote))


}


  module.exports = add