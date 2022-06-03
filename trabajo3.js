
let ofijo=0.20;
let oclaro=0.40;
let omovistar=0.60;
let oentel=1.00;

let operador=prompt("¿A que operador te comunicaste? \n1.Fijo \n2.Claro \n3.Movistar\n4.Entel");
let minhablado=parseInt(prompt(`¿Cuantos minutos tardò la llamada?`));


let cfijo=parseFloat(minhablado*ofijo);
let cclaro=parseFloat(minhablado*oclaro);
let cmovistar=parseFloat(minhablado*omovistar);
let centel=parseFloat(minhablado*oentel);
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