const promesa = new Promise((resolve,reject)=>{
    resolve('Heeey')
});

const cows = 15;
const countCows = new Promise((resolve, reject)=>{
    if(cows > 10){
        resolve(`We have ${cows} cows on the farm`)
    }
    else{
        reject('There is no cows on the farm');
    }
});

countCows
    .then(res => console.log(res))
    .catch(err => console.log(res))
    .finally(()=> console.log('Terminó'))