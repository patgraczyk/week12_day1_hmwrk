const PubSub = require('../helpers/pub_sub')
const PrimeChecker = require('../models/primeChecker')

const ResultView = function(){

}

ResultView.prototype.displayResult = function(result){
  const resultElement = document.querySelector('#result');
  if(result){
    resultElement.textContent = "You've entered a prime number.";
} else{
    resultElement.textContent = "This is not a prime number."
}};


ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const result = event.detail;
    this.displayResult(result);
  })
}

module.exports = ResultView;
