var form = document.getElementById('formElement');

form.onsubmit = function(event) {
  event.preventDefault();

  var inputs = document.getElementsByTagName('input');

  for (var i = 0; i < inputs.length; i++) {
    var value = inputs[i].value;

    console.log('Input number ' + (i + 1) + ' : ' + value);
  }
}
