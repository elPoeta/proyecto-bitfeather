// Get modal element
const modal = document.querySelector('#simpleModal');
// Get open modal button
const modalBtnLogin = document.querySelector('#login-header');
// Get close button
const closeBtn = document.querySelector('#closeBtn');

// Listen for open click
modalBtnLogin.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
//window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
}

// Function to close modal
function closeModal(){
  modal.style.display = 'none';

}
