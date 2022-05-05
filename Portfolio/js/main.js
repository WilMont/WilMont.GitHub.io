var nightMode = new Boolean(false);

window.onload = _ => {
  if (localStorage.getItem('darkMode')) {
    toggleDarkMode();
  }
}


// function activateNightMode() {
//   // Inverser la valeur de nightMode lors du clic sur le switch.
//   if (nightMode == true) {
//     nightMode = false;
//     document.body.style = initialBodyStyle;
//     console.log("Jour !");
//   } else if (nightMode == false) {
//     nightMode = true;
//     document.body.style.backgroundColor = "#252525";
//     document.body.style.color = "whitesmoke";
//     console.log("Nuit !");
//   }
// }

checkbox.addEventListener('change', function () {
  localStorage.setItem('darkMode', this.checked);
  if (this.checked) {
    body.classList.add('darkMode')
  } else {
    body.classList.remove('darkMode')
  }
});

function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("darkMode");
}
// Résoudre problème de premier toggle