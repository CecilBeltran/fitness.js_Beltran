let option;
let resultado;
let mensaje="";
let pesoEnStorage= localStorage.getItem("pesoEnStorage");
let alturaEnStorage =localStorage.getItem("alturaEnStorage");
let sexoEnStorage = localStorage.getItem("sexoEnStorage");




function CalculoIndice (sexo,peso,altura){
    let indice = (peso / (altura* altura));
    resultado= "";
      switch (sexo){
        case "mujer" :
          if (indice < 20 ){
          resultado ="Bajo peso.";
          }
          else if (indice >=20 && indice <24){
            resultado = "Peso Normal.";
          }
          else if ( indice >= 24 &&indice < 29){
             resultado ="Obesidad leve.";
          }
         else if (indice >=30 && indice <40) {
              resultado = "Obesidad severa.";
          }
         else {
              resultado = "Obesidad muy severa.";
          }
          break;
                  
        case "hombre" :
          if(indice < 21 ){
            resultado="Bajo Peso.";
          }
          else if (indice >=21 && indice <25){
            resultado= "Normal.";
          }
          else if ( indice >= 25 &&indice < 30){
            resultado="Obesidad leve.";
          }
          else if (indice >=30 && indice <40) {
            resultado = "Obesidad severa.";
          }
          else {
            resultado="Obesidad muy severa.";
          }
          break;
          default:
            resultado= "No se ha podido calcular.No ha indicado si es hombre o mujer";       
          }
       return ResultadoIMC( peso, altura, indice);
}
              
//console.log (resultado)
ResultadoIMC();

function ResultadoIMC (peso, altura, indice){ 
  mensaje= "Usted mide  " + altura + " metros y pesa  " + peso + "Kg , su indice es de " + Math.trunc(indice) + " su clasificación es:  "+ resultado;
  return mensaje;
};      

let cartelSexo= document.getElementById("sexo");
cartelSexo.addEventListener( "focus", () => {
  Toastify({
    text: "Ingrese si es hombre o mujer",
    className: "info",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", 
    position: "left",
    stopOnFocus: true, 
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();
})


const result = document.querySelector ("#result");
const mostrarResult =document.createElement ("p");
               
const boton= document.getElementById("boton");
  boton.addEventListener ("click", (e) => { 
  e.preventDefault()
  console.log(e);
  let sexo = e.target.form[0].value; 
  localStorage.setItem ("sexoEnStorage", sexo);
  let altura = e.target.form[2].value;
  localStorage.setItem("alturaEnStorage", altura);
  let peso = e.target.form[1].value;
  localStorage.setItem("pesoEnStorage", peso);
  let res= CalculoIndice(sexo,peso,altura);
  result.innerHTML= res;
  console.log(res); 
  console.log();
  }
); 


