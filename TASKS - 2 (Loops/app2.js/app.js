let myArray = ["cat", "rabbit", "pigeon", "parrot", "goldfish"];

myArray.forEach(checkAnimalFunc);

function checkAnimalFunc(animalName){

    if (animalName == "rabbit")
    console.log("This is a rabbit");

    else
    console.log("This is NOT a rabbit");


}