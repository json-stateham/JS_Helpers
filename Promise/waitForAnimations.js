const waitForAnimations = elem =>
  Promise.allSettled(elem.getAnimations().map(animation => animation.finished));

const toaster = document.querySelector('.toaster');

waitForAnimations(toaster)
  .then(() => console.log('Toaster animation finished'));
