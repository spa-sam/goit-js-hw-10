import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(event.target.elements.delay.value);
  const state = event.target.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else if (state === 'rejected') {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(value => {
      iziToast.show({
        title: 'Success',
        message: `✅ Fulfilled promise in ${value}ms`,
        color: 'green',
      });
    })
    .catch(value => {
      iziToast.show({
        title: 'Error',
        message: `❌ Rejected promise in ${value}ms`,
        color: 'red',
      });
    });
});
