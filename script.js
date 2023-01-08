const images = [...]; // array of image URLs
let selectedImageClasses = []; // array to store the class names of the selected images

function renderImages() {
  const imageContainer = document.getElementById('image-container');
  // shuffle the images array
  shuffle(images);

  // render the images and give them the appropriate class names
  for (let i = 0; i < images.length; i++) {
    const img = document.createElement('img');
    img.src = images[i];
    img.className = `img${i + 1}`;
    img.addEventListener('click', handleImageClick);
    imageContainer.appendChild(img);
  }
}

function handleImageClick(event) {
  const clickedImageClass = event.target.className;
  selectedImageClasses.push(clickedImageClass);

  // if two images have been selected, show the verify button
  if (selectedImageClasses.length === 2) {
    const verifyButton = document.createElement('button');
    verifyButton.innerHTML = 'Verify';
    verifyButton.id = 'verify';
    verifyButton.addEventListener('click', handleVerifyClick);
    document.body.appendChild(verifyButton);
  }

  // show the reset button
  const resetButton = document.createElement('button');
  resetButton.innerHTML = 'Reset';
  resetButton.id = 'reset';
  resetButton.addEventListener('click', handleResetClick);
  document.body.appendChild(resetButton);
}

function handleVerifyClick() {
  const para = document.createElement('p');
  para.id = 'para';
  if (selectedImageClasses[0] === selectedImageClasses[1]) {
    para.innerHTML = 'You are a human. Congratulations!';
  } else {
    para.innerHTML = "We can't verify you as a human. You selected the non-identical tiles.";
  }
  document.body.appendChild(para);

  // hide the verify button
  document.getElementById('verify').style.display = 'none';
}

function handleResetClick() {
  // remove the images and the reset button
  const imageContainer = document.getElementById('image-container');
  while (imageContainer.firstChild) {
    imageContainer.removeChild(imageContainer.firstChild);
  }
  document.getElementById('reset').style.display = 'none';

  // reset the selectedImageClasses array
  selectedImageClasses = [];

  // render the images again
  renderImages();
}

function shuffle(array) {
  // shuffle the array using the Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

renderImages();
