const alphabet = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  alphabet.addEventListener('keydown', () =>{
    function onKeyDownHandler(e) {
   const key = parseInt(e.detail || e.which);

   if (key === alphabet[index]) {
     index++;

     if (index === alphabet.length) {
       alert("Hurray!");

       index = 0;
     }
   } else {
     index = 0;
   }
  }
  })
}
