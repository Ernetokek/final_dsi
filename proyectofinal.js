//contiene la operación o resultado parcial
let resultado = "";
//Contiene el tipo de operación a realizar
let opern = "";

//elementos donde se colcan las operacion que se esta realizando
let operealizada = document.getElementById("proceso");
//elemento donde se colocará el resultado
let mensajeresul = document.getElementById("txtresultado");

//ultimo operador seleccionado
let seleccion = "";

//numero ingresado
let numero = "";

//para determinar si lo ultimo ingresado fue un número o un operador
let ultimodigito = "";


//Presionar una tecla de operación
function operacion(oper){
    //guardo la operación que eligió
    seleccion = oper;
    ultimodigito = "operacion";
    resultado = resultado + oper;
    numero = "";
    operealizada.innerHTML = resultado;
}

//Presiono un número
function operador(num){
    //contateno el numero
    numero = numero + num;  
    //concatenar la operacion hasta el momento
    resultado = resultado + num;
    //Mostrar elementos a operar
    operealizada.innerHTML = resultado;

    //Controlamos la división por 0
    if(numero=='0' && seleccion=='/'){
        limpiar();
        mensajeresul.innerHTML = "Indenfido!";
        return;
    }

    if(ultimodigito == "operacion"){
        ultimodigito = "numero";
    }

}

//función para limpiar variables  y campos
function limpiar(){
    window.location.reload()
}

//Función que realiza los cálculos
function calculo(){
    //con eval evaluo la operacion que esta en string.
    //asi obtengo un resultado numerico
    resultado = eval(resultado);
    //muestro el resultado
    mensajeresul.innerHTML = resultado;
    //vuelvo a convetir parcial en string
    resultado = resultado.toString();
    

}


//Mostrar objetos dependiendo del resultado
var generador = document.getElementById('objetos');

generador.addEventListener('click', function () {
    if (seleccion == "+"){
        opern = "suma"
        //Genero un mensaje que muestre el tipo de operación seleccionado y el resultado
        document.getElementById('mensajr').innerText= 'El resultado de  tu ' + opern + ' es ' + resultado
        //Función for para generar los  divs necesarios según el resultado
        for (var i = 0; i < resultado; i++) {
          var circulos = document.createElement('div');
          circulos.classList.add('circulo');
      
          circulos.innerText = i + 1;
      
          document.body.appendChild(circulos);
        }
        
    }
    else if (seleccion == "-"){
        opern = "resta"
        document.getElementById('mensajr').innerText= 'El resultado de  tu ' + opern + ' es ' + resultado
        if (resultado > 0){
            for (var i = 0; i < resultado; i++) {
                var circulos = document.createElement('div');
                circulos.classList.add('circulo');
            
                circulos.innerText = i + 1 ;
            
                document.body.appendChild(circulos);
            }
        }
        else if (resultado < 0){
            for (var i = resultado; i < 0; i++) {
                var circulos = document.createElement('div');
                circulos.classList.add('circulo');
            
                circulos.innerText = i ;
            
                document.body.appendChild(circulos);
            }


        }
        // Muestra un mensaje de cancelación en caso de que la resta sea  0
        else{
            document.getElementById('mensajr').innerText = 'Perdón pero su resultado es 0'
        }
        
        
    }

    else if (seleccion == "/") {
        opern = "división"
        document.getElementById('mensajr').innerText= 'El resultado de  tu ' + opern + ' es ' + resultado
        //Crea de manera dinámica el elemento a mostrar en forma de un elemento tipo p
        var resuforma = document.createElement('p');
        resuforma.classList.add('resultadoscomplejos');
        resuforma.innerText = resultado;

        document.body.appendChild(resuforma);


    }

    else if (seleccion == "*"){
        opern = "multiplicación"
        document.getElementById('mensajr').innerText= 'El resultado de  tu ' + opern + ' es ' + resultado
        var resuforma = document.createElement('p');
        resuforma.classList.add('resultadoscomplejos');
        resuforma.innerText = resultado;

        document.body.appendChild(resuforma);

    }
  
});