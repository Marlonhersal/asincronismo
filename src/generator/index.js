function* gen(){
    yield 1;
    yield 2;
    yield 3;
} 
const g = gen();
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())


function* iterable(array){
    for(let value of array){
        yield value
    }
}

const array = [10,20,30,40,50,60]

const it = iterable(array);

    console.log(it.next())
    console.log(it.next())
    console.log(it.next())
    console.log(it.next())
    console.log(it.next())
    console.log(it.next())
    console.log(it.next())
