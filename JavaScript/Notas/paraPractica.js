
/* let dineroCofla = 3.5;
let dineroPablo = 1;
let dineroFrancisco = 1.8;



if (dineroCofla >= 0.5 && dineroCofla < 0.8){
    console.log("Cofla podes comprarte el helado de agua");
    console.log("Y tu vuelto es de " + dineroCofla - 0.5)
}
else if (dineroCofla >= 0.8 && dineroCofla < 1.5){
    console.log("Cofla podes comprarte el helado palito bombon");
    console.log("Y tu vuelto es de " + dineroCofla - 0.8)
}
else if (dineroCofla >= 1.5 && dineroCofla < 4){
    console.log("Cofla podes comprarte 1/4 de helado");
    console.log("Y tu vuelto es de " + (dineroCofla - 1.5)) // cuando queremos hacer una ecuacion matematica hay que enserrarla entre parentesis cuando estamos concatenando con un string, si no primero vuelve a la variable un string y luego cuando quieres restarlo (o cualquier otra cosa) no nos deja
}
else {
    console.log("Cofla no te alcanza para nada, perdon :(");
}



if (dineroPablo >= 0.5 && dineroPablo < 0.8){
    console.log("Pablo podes comprarte el helado de agua");
}
else if (dineroPablo >= 0.8 && dineroPablo < 1.5){
    console.log("Pablo podes comprarte el helado palito bombon");
}
else if (dineroPablo >= 1.5 && dineroPablo < 4){
    console.log("Pablo podes comprarte 1/4 de helado");
}
else {
    console.log("Pablo no te alcanza para nada, perdon :(");
}



if (dineroFrancisco >= 0.5 && dineroFrancisco < 0.8){
    console.log("Francisco podes comprarte el helado de agua");
}
else if (dineroFrancisco >= 0.8 && dineroFrancisco < 1.5){
    console.log("Francisco podes comprarte el helado palito bombon");
}
else if (dineroFrancisco >= 1.5 && dineroFrancisco < 4){
    console.log("Francisco podes comprarte 1/4 de helado");
}
else {
    console.log("Francisco no te alcanza para nada, perdon :(");
}


    let dineroTotal = dineroCofla + dineroPablo + dineroFrancisco;
    
    if (dineroTotal >= 5 && dineroTotal < 8){
        console.log ("Chicos, pueden comprarse 1kg de helado");
    }
    else {
        console.log("Chicos, no les alcanza para comprar 1kg de helado");
    }


 */

  let pc = {
    procesador : "Ryzen 5",
    ram : "8gb",
    monitor : "ViewSonic 240hz",
    teclado : "Redragon",
    CantMonitores : 2
  }

  console.log(`Mi procesador es un ${pc.procesador}, mi monitor es un ${pc.monitor}`); // Esta es otra forma de concatenar recordar usar los backticks