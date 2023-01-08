//your code here
const images = document.querySelectorAll('img');

images.forEach(image => {
  image.addEventListener('click', () => {
    image.classList.toggle('selected');
  });
});
const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', () => {
  images.forEach(image => {
    image.classList.remove('selected');
  });
});
const verifyButton = document.getElementById('verify');
const para = document.getElementById('para');

verifyButton.addEventListener('click', () => {
  const selectedImages = document.querySelectorAll('.selected');
  if (selectedImages[0].class
