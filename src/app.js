const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K']
const iconos = ['♠', '♣', '♦', '♥']
//------------------------------------- ACÁ DECLARO LA FUNCION QUE GENERA UNA CARTA -----------------------------------
const generador = () => {
//------------------------------------FUNCIÓN PARA OBTENER ALEATORIAMENTE UN VALOR Y UN ICONO---------------------
  const elementoRandom = (arreglo) => {
    const random = Math.floor(Math.random() * arreglo.length)
    return arreglo[random];
  };

  const valorRandom = elementoRandom(valores);
  const iconoRandom = elementoRandom(iconos);

//----------------------------ACÁ OBTENGO LOS ELEMENTOS DEL HTML-----------------------------

  const valor = document.getElementById('valor');
  const topIcon = document.getElementById('topIcon');
  const botIcon = document.getElementById('botIcon');
  const carta = document.getElementById('carta');

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

