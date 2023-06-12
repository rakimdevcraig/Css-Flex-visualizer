let boxes = document.getElementById('boxes')
let b = document.getElementById('flex-direction');
b.addEventListener('change', function(event) {
//   console.log(event.target.value);
  let value = event.target.value 
boxes.style.flexDirection = value
}, false);