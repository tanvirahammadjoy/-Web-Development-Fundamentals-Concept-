let buttonToAddNote = document.querySelector(".add");
let mainContainerWhereAddNote = document.querySelector(".maincontainer");

function saveNoteToLocalStorage() {
  let allNote = document.querySelectorAll(".content textarea");
  let noteArray = [];

  allNote.forEach((note) => {
    noteArray.push({
      text: note.value,
      readOnly: note.readOnly,
    });
  });

  localStorage.setItem("notes", JSON.stringify(noteArray));
}

function addNote(noteContent = "", readOnly = false) {
  let content = document.createElement("div");
  content.classList = "content";
  content.innerHTML = `
  <div class="btn">
          <svg
          class="delete"
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
              fill-rule="nonzero"
            />
          </svg>
          <svg
          class="edit"
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.25 6c.398 0 .75.352.75.75 0 .414-.336.75-.75.75-1.505 0-7.75 0-7.75 0v12h17v-8.75c0-.414.336-.75.75-.75s.75.336.75.75v9.25c0 .621-.522 1-1 1h-18c-.48 0-1-.379-1-1v-13c0-.481.38-1 1-1zm-2.011 6.526c-1.045 3.003-1.238 3.45-1.238 3.84 0 .441.385.626.627.626.272 0 1.108-.301 3.829-1.249zm.888-.889 3.22 3.22 8.408-8.4c.163-.163.245-.377.245-.592 0-.213-.082-.427-.245-.591-.58-.578-1.458-1.457-2.039-2.036-.163-.163-.377-.245-.591-.245-.213 0-.428.082-.592.245z"
              fill-rule="nonzero"
            />
          </svg>
        </div>
        <div class="textarea">
            <textarea name="Note" id="note" ${
              readOnly ? "readonly" : ""
            }>${noteContent}</textarea>
        </div>
  `;

  // Add the new note to the main container
  mainContainerWhereAddNote.appendChild(content);

  // Select the delete button within the newly added note
  let deleteBtn = content.querySelector(".delete");

  // Attach delete functionality to this specific note
  deleteBtn.addEventListener("click", () => {
    content.remove(); // Removes the current note
    saveNoteToLocalStorage(); // save when we delete a note
  });

  // save the note when the save button is clicked
  document.querySelector(".save").addEventListener("click", () => {
    saveNoteToLocalStorage();

    const allNotes = document.querySelectorAll(".content textarea");
    allNotes.forEach((note) => {
      note.readOnly = true;
      saveNoteToLocalStorage();
    });
  });

//   content
//     .querySelector("textarea")
//     .addEventListener("input", saveNoteToLocalStorage);

  content
    .querySelector("textarea")
    .addEventListener("change", saveNoteToLocalStorage);

  // Edit button functionality
  const editBtn = content.querySelector(".edit");
  editBtn.addEventListener("click", () => {
    const textarea = content.querySelector("textarea");
    textarea.readOnly = false;
    saveNoteToLocalStorage();
  });
}

// Adding functionality to the "Add" button
buttonToAddNote.addEventListener("click", () => addNote());

// Function to load notes from localStorage
function loadNoteFromLocalStorage() {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

  // Loop through saved notes and add them to the DOM
  savedNotes.forEach((noteData) => {
    addNote(noteData.text, noteData.readOnly);
  });
}

// Load the notes when the page is reloaded
window.addEventListener("DOMContentLoaded", loadNoteFromLocalStorage);
