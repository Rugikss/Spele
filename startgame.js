document.addEventListener('DOMContentLoaded', () => {
  const resetButton = document.getElementById('reset-button');
  const buttonsContainer = document.getElementById('buttons-container');

  // Add event listeners to each button to make them disappear on click
  const buttons = buttonsContainer.getElementsByClassName('disappearable-button');
  for (let button of buttons) {
      button.addEventListener('click', () => {
          button.style.display = 'none';
      });
  }

  resetButton.addEventListener('click', () => {
      reorganizeButtons(buttonsContainer);
      changedButton.innerHTML = '<i class="fa-solid fa-wine-bottle"></i>';
  });
});

function reorganizeButtons(container) {
  const buttons = Array.from(container.children);
  shuffleArray(buttons);
  container.innerHTML = '';
  buttons.forEach(button => {
      button.style.display = '';  // Ensure buttons are visible again
      container.appendChild(button);
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const changedButton = document.getElementById('myButton');
changedButton.addEventListener('click', () => {
  changedButton.textContent = 'Drink!';
  
}) 

 