window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

calcularImc = () => {

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const resultado = (peso/ (altura * altura));
   

     if (resultado <= 18.5){
        document.getElementById('resultado').innerHTML = "Seu IMC é:" + resultado + ", seu peso está abaixo da média.";
     }else if (resultado <= 24.9){
        document.getElementById('resultado').innerHTML = "Seu IMC é:" + resultado + ", seu peso está normal.";
     }else if (resultado <= 29.9){
        document.getElementById('resultado').innerHTML = "Seu IMC é:" + resultado + ", seu peso está acima da média.";
     }else if (resultado <= 34.9){
        document.getElementById('resultado').innerHTML = "Seu IMC é:" + resultado + ", você está com obesidade classe I.";
     }else if ( resultado <= 39.9){
        document.getElementById('resultado').innerHTML = "Seu IMC é:" + resultado + ", você está com obesidade classe II.";
     }else if(resultado => 40){
        document.getElementById('resultado').innerHTML = "Seu IMC é:" + resultado + ", você está com obesidade classe III.";
     }
}

limparCampos = () => {
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const resultado = document.getElementById('resultado');
    peso.value = "";
    altura.value = "";
    resultado.value = "";
}