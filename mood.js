// Predefined DOM Elements
const moodboard = document.getElementById("moodboard");
const addImageBtn = document.getElementById("addImageBtn");
const addNoteBtn = document.getElementById("addNoteBtn");
const clearBoardBtn = document.getElementById("clearBoardBtn");
const colorOptions = document.querySelectorAll(".color-option");

// Modal Elements for Note Input
const noteModal = document.getElementById("noteModal");
const noteText = document.getElementById("noteText");
const cancelNoteBtn = document.getElementById("cancelNoteBtn");
const saveNoteBtn = document.getElementById("saveNoteBtn");

// Utility function to create a moodboard item
function createMoodboardItem() {
  const item = document.createElement("div");
  item.className = "moodboard-item";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-item";
  deleteBtn.textContent = "×";
  deleteBtn.addEventListener("click", () => item.remove());

  item.appendChild(deleteBtn);
  return item;
}

//  Add Image from Predefined List
addImageBtn.addEventListener("click", () => {
  const imageUrls = [
    "images/living-room.jpg",
    "images/bedroom.jpg",
    "images/decor1.jpg",
    "images/decor2.jpg",
  ];
  
  img.classList.add("swatch-image");

  const item = createMoodboardItem();
  item.appendChild(img);
  moodboard.appendChild(item);
});

// ✅ Add Color Swatch
colorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const color = option.getAttribute("data-color");

    const swatch = document.createElement("div");
    swatch.className = "color-swatch";
    swatch.style.backgroundColor = color;

    const item = createMoodboardItem();
    item.appendChild(swatch);
    moodboard.appendChild(item);
  });
});

// ✅ Add Note (with modal)
addNoteBtn.addEventListener("click", () => {
  noteModal.style.display = "flex";
  noteText.value = "";
});

cancelNoteBtn.addEventListener("click", () => {
  noteModal.style.display = "none";
});

saveNoteBtn.addEventListener("click", () => {
  const text = noteText.value.trim();
  if (text) {
    const note = document.createElement("div");
    note.className = "note";
    note.textContent = text;

    const item = createMoodboardItem();
    item.appendChild(note);
    moodboard.appendChild(item);
  }
  noteModal.style.display = "none";
});
document.getElementById("addImageBtn").addEventListener("click", function () {
  const moodboard = document.getElementById("moodboard");

  // Create a new image element
  const img = document.createElement("img");
  img.src = "images/minihall.jpg";
  img.alt = "Mood image";
  img.className = "mood-image";
  moodboard.appendChild(img);
});

// ✅ Clear Entire Moodboard
clearBoardBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear the mood board?")) {
    moodboard.innerHTML = "";
  }
});
