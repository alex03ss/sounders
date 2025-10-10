// notes.js
const form = document.getElementById('note-form');
const notesList = document.getElementById('notes-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const match = document.getElementById('match-title').value;
  const content = document.getElementById('note-content').value;

  const note = { match, content };
  const notes = JSON.parse(localStorage.getItem('matchNotes')) || [];
  notes.push(note);
  localStorage.setItem('matchNotes', JSON.stringify(notes));

  displayNotes();
  form.reset();
});

function displayNotes() {
  const notes = JSON.parse(localStorage.getItem('matchNotes')) || [];
  notesList.innerHTML = '';
  notes.forEach((note, index) => {
    const li = document.createElement('li');
    li.textContent = `${note.match}: ${note.content}`;
    notesList.appendChild(li);
  });
}

window.onload = displayNotes;
