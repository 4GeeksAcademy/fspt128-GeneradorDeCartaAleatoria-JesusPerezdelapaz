const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K']
const iconos = ['♠', '♣', '♦', '♥']
//------------------------------------- ACÁ DECLARO LA FUNCION QUE GENERA UNA CARTA -----------------------------------
const generador = () => {

  const elementoRandom = (arr) => {
    let random = Math.floor(Math.random() * arr.length)
    return arr[random];
  };

  const valorRandom = elementoRandom(valores);
  const iconoRandom = elementoRandom(iconos);

//----------------------------ACÁ OBTENGO LOS ELEMENTOS DEL HTML-----------------------------

  let valor = document.getElementById('valor');
  let topIcon = document.getElementById('topIcon');
  let botIcon = document.getElementById('botIcon');
  let carta = document.getElementById('carta');

//---------------------------------IF PARA EL COLOR DE LA CARTA--------------------------

  if (iconoRandom === '♥' || iconoRandom === '♦') {
    carta.classList.remove('black')
    carta.classList.add('rojo')

  } else {
    carta.classList.remove('rojo')
    carta.classList.add('black')
  };

//----------------------------------LA MODIFICACIÓN DEL HTML -----------------------------------
  valor.textContent = valorRandom;
  topIcon.textContent = iconoRandom;
  botIcon.textContent = iconoRandom;
};
//----------------------------------------- ACÁ TERMINA LA FUNCIÓN GENERADORA---------------------------------------

//---------------------------------------- ACÁ SE EJECUTA LA FUNCIÓN CUANDO SE CARGA LA PÁGINA----------------------
window.onload = function () {
  generador()

};

//-------------------------------------ACÁ LLAMO A LA FUNCIÓN GENERADORA CON UN EVENTLISTENER PARA EL BOTÓN------------------
const boton = document.getElementById('NewCard');
boton.addEventListener('click', generador)

//---------------------------------------ACÁ LLAMO A LA FUNCIÓN CON UN TIMEOUT PARA QUE LA CARTA CAMBIE CADA 10 SEGUNDOS------
window.setTimeout(generador, 10000)

