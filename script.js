//your JS code here. If required.
// Get the modal, button, and close element
const modal = document.getElementById('modal');
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.querySelector('.close-modal');

// Function to open the modal
openModalButton.onclick = function() {
  modal.style.display = 'flex';
}

// Function to close the modal when clicked on close button
closeModalButton.onclick = function() {
  modal.style.display = 'none';
}

// Function to close the modal when clicked outside the modal content
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}
