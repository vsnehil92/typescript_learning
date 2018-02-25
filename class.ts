enum card {diamond}//seves mapping asboth ways
let a = []; 
a.push(5);
console.log(a);
console.log(card);
let nums: number[]= [1,2,3]//it's a good practice always initialize the array with the type
console.log(nums);
//Tuples-Array of fixed length
let test:[string,any];
test = ['abc',12];
console.log(test);
let arrayOfTuples: [string, number][] = [];
arrayOfTuples.push(test);
arrayOfTuples.push(['snehil',21]);
console.log(arrayOfTuples);
type ourNewType =  [any, any, any];
let rose: ourNewType = ['red', 'yellow', 'white'];
console.log(rose);

class car{
    model: string;
    year: number;
    constructor(model: string, year: number){
        this.model=model;
        this.year=year;
    }
    engine() {
        return('vroom');
    }
}
let myCar = new car('hundai', 2012);
console.log(myCar);
console.log(myCar.engine());
//species in classes Rishabh bhai 