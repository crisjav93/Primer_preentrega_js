function CalculadoraIMC(){
    let peso, altura, imc;
    altura = parseFloat(document.getElementById('altura').value);
    peso = parseFloat(document.getElementById('peso').value);
    imc = parseFloat(peso / ((altura/100)*(altura/100)));
    let clasificacion;
        if (imc < 18.5){
            clasificacion = 'Estás muy delgado';}
            else if (imc < 25){
                clasificacion = 'Estás en el peso ideal';}
            else {clasificacion = 'Estás con sobrepeso';}
            
    
    let resultado = 'Hola, tu Indice de Masa Muscualr es ' + imc.toFixed(2) + ' y ' +   clasificacion;
    alert(resultado);
}
