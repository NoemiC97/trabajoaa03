let fijo=0.20;
let claro=0.40;
let movistar=0.60;
let entel=1.00;

let operador=prompt("¿A que operador te comunicaste? \n1.Fijo \n2.Claro \n3.Movistar\n4.Entel");
let minhablado=parseInt(prompt(`¿Cuantos minutos tardò la llamada?`));


let cfijo=parseFloat(minhablado*fijo);
let cclaro=parseFloat(minhablado*claro);
let cmovistar=parseFloat(minhablado*movistar);
let centel=parseFloat(minhablado*entel);
if(operador==1){
    document.write(`El costo de la llamada es: S/ ${cfijo}`);
}else if(operador==2){
    document.write(`El costo de la llamada es: S/ ${cclaro}`);
}else if(operador==3){
   document.write(`El costo de la llamada es: S/ ${cmovistar}`);
}else if(operador==4){
    document.write(`El costo de la llamada es: S/ ${centel}`);
}else {
    alert("No se verifica el operador");
}