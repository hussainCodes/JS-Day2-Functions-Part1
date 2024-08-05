function printName(){
 console.log("Hussain M. AlHaddad");
}

function printAge(birthYear){
   console.log(`Age = ${2024 - birthYear}`)
}

function printAgeAndName(name, birthYear){
    console.log(`Hello ${name} You are ${2024 - birthYear} years old`)
}


function printHello(name, lang){
    if(lang == "en"){
        console.log(`Hello ${name}`)
    }else if(lang == "es"){
        console.log(`Hola ${name}`)
    }else if(lang == "fr"){
        console.log(`Bonjour ${name}`)
    }else{
        console.log(`Marhaba ${name}`)
    }
}

function printMax(num1, num2){
    if(num1 > num2){
        console.log(`${num1} is bigger`)
    }else if(num2 > num1){
        console.log(`${num2} is bigger`)
    }else{
        console.log("The numbers are equal")
    }
}

function printMax2(num1, num2){
    
    switch(true){
        case (num1 > num2):  console.log(`${num1} is bigger`)
        break;
        case (num1 < num2): console.log(`${num2} is bigger`)
        break;
        default: console.log("The numbers are equal")
    }
}

