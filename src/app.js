const FormView = require('./views/form_view.js')
const PrimeChecker = require('./models/primeChecker.js')
const ResultView = require('./views/result_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const formView = new FormView();
  formView.bindEvents();

  const primeChecker = new PrimeChecker();
  primeChecker.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
  
});
