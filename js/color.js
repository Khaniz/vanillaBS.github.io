document.body.style.minHeight = "100%";

document.documentElement.style.height="100%";
document.body.style.height="100%";

var blueprint = [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Indigo',
    'Purple'
  ];

const btnForColor = document.querySelector("#triggerGetColor");

btnForColor.addEventListener("click", makeAtmosphere);

function makeAtmosphere() {
  const pickedStartColorNumber = Math.floor(Math.random() * blueprint.length);
  const pickedEndColorNumber = Math.floor(Math.random() * blueprint.length);

  const pickedStartColor = blueprint[pickedStartColorNumber];
  const pickedEndColor = blueprint[pickedEndColorNumber];
 
  
  document.body.style.background = `linear-gradient(45deg, ${pickedStartColor}, ${pickedEndColor})`;
}

