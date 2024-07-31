//variables
let numeroSecreto = Math.floor(Math.random()*10)+1;;
let numeroUsuario = 0;
let intentos = 1
//let palabraVeces = "vez";
let maximoDeIntentos = 3;

while (numeroUsuario != numeroSecreto){
    numeroUsuario = prompt('Indícame un número, por favor:');

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto){
          //Acertamos el número.
        alert(`¡Acertaste!, el número secreto es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`)
    }else {
        if (numeroSecreto < numeroUsuario){
            alert("El número secreto es MENOR");
        }else{
            //Incrementamos el numero de intentos cuando no acierta.
            alert("El número secreto es MAYOR");
        } 
        //intentos = intentos + 1
        //intentos += 1;
        intentos++;
        
        //palabraVeces = "veces";
        if (intentos > maximoDeIntentos){
            alert(`Llegaste al número máximo de ${maximoDeIntentos} intentos`);
            break;
        }
    }
}