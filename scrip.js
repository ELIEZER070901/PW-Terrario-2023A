//Tomando control del objeto

let plant1 = document.getElementById("plant1")

//
plant1.addEventListener("click", function(){
    
    let name = prompt("Hola, ¿Cual es tu nombre?");
    if(name !== ""){
    console.log(`${name} please, save the planet`);
    }
});