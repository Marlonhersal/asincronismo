function suma(num1, num2){
    return num1 + num2
}

function calc(num1, num2, cb){
    return cb(num1,num2)
}

console.log(calc(10,20,suma));

setTimeout(function(){
    console.log('Hola mundo')
}, 2000);

function gretting(name, pais){
    console.log(`Hola ${name} de ${pais}`)
}

setTimeout(gretting, 2000, 'Marlon', 'MX')
