const funcionAsincrona = ()=>{
    return new Promise((resolve, reject)=>{
        true? setTimeout(()=> resolve('Asyncrono'), 2000):
         reject(new Error('Esto es un error'))
    });
};

const anotherFunction = async () =>{
    const something = await funcionAsincrona();
    console.log(something);
    console.log('Hello!')
}
console.log('Before');
anotherFunction();
console.log('After');