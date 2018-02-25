function* fib(){
    let laslast = 1;
    let last = 0;
    while (true){
        let val = last + laslast;
        yield val;
        laslast=last;
        last = val;
    }
}
let it  = fib();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
//generators use itterators inside it to return nextvalue
// for(let x  of fib()){
//     console.log(x);
// }

function* seq (){
    let last = 0;
    while(1){
        last= yield last+5;
    }
}

let t = seq ();
console.log(t.next());
console.log(t.next(20));
console.log(t.next(90));