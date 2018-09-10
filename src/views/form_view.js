const PubSub = require('../helpers/pub_sub')


const FormView = function(){

}

FormView.prototype.bindEvents= function(){
  const form = document.querySelector('#prime-checker-form');
  form.addEventListener('submit', (event) => {
  event.preventDefault();
  const typedNumber = event.target.number.value;
  PubSub.publish('NumberInputView:number-submitted', typedNumber);
  console.log(typedNumber);
  });

}

module.exports = FormView;
