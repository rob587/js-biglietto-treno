//su 100km sono 21euro - 20% 16.80 per i minorenni//
//su 100km sono 21euro - 40% 12.60 per over 65//

const travelRequest =parseInt(prompt("Quanti km vuoi percorrere?"))
const ageRequest =parseInt(prompt("Quanti anni hai?"))

const yearMinor=18 
const yearOlder=65
const ticket= 0.21



if(ageRequest<yearMinor){
    console.log(16.80)
}

else if(ageRequest>yearOlder){
    console.log(12.60)
}

else{

}


