const PubSub = require('../helpers/pub_sub')
const PrimeChecker = require('../models/primeChecker')

const ResultView = function(){

}

ResultView.prototype.displayResult = function(result){
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `You entered ${result}`;
}

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const result = event.detail;
    this.displayResult(result);
  })
}

module.exports = ResultView;
