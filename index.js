const signinBtn = document.getElementById('signinbtn');
const signupBtn = document.getElementById('signupbtn');
const nameField = document.getElementById('namefield');
const title = document.getElementById('title');

function updateActiveButton(activeButton) {
  const buttons = [signinBtn, signupBtn];
  buttons.forEach(button => {
    if (button === activeButton) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

signinBtn?.addEventListener('click', () => {
  if (nameField && title) {
    nameField.style.display = "none";
    title.textContent = 'Sign IN';
    updateActiveButton(signinBtn);
  }
});

signupBtn?.addEventListener('click', () => {
  if (nameField && title) {
    nameField.style.display = "block";
    title.textContent = 'Sign UP';
    updateActiveButton(signupBtn);
  }
});


