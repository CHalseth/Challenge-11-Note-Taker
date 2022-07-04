const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
let { notesArray } = require('../../db/notes');

router.get('/notes', (req, res) => {
    let results = notesArray;
    res.json(results);
});

router.post('/notes' , (req, res) => {
    if(noteArray){
        req.body.id = notesarray.length.toString();
    } else{req.body.id = 0}
    res.json(createNewNote(req.body, notesarray));
});

router.delete('/notes/:id', async (req, res) => {
    const { id } = req.params
    notesArray = await deleteNote(id, notesArray);
    res.json(notesArray);
});

module.exports = router;