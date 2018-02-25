let name = {
    first:'snehi',
    last: 'verma',
get full(){
    return '${this.first} ${this.last}';
},
set full(newVal) {
let [a,b] = newVal.split(/\s+/g);
this.first = a;
this.last = b;
}
};
console.log(name.first, name.last);
name.full = 'Mike test';
console.log(name.first, name.last);
//function types by rishabh bhai like mouseEventListner
function allCars(car1: string, car2: string, ...rest: string[]){
    //
}
allCars('honda','hundai');
allCars('honda','hundai','restcarsn');
