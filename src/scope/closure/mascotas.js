'use strict'

export function createPetList(){
    let petList = [];
    return function addPet(pet){
        petList.push(pet);
        console.log(`Mis mascotas son: ${petList}`);
    }
    return addPet;
}

const myPets = createPetList();

myPets('dog');
myPets('cat');
myPets('animal:horse, color:brown, size:meidum')