let a= "hello";
console.log(a);
console.log(a);
function hexToRgb(hex: string): {r: number, g: number, b: number} {
    if(hex.length === 3){
        let hr = hex[0];
        let hg = hex[1];
        let hb = hex[2];
        return hexToRgb('${hr}${hr}${hg}${hg}${hb}${hb}');
    }
    let [r, g, b] = [0, 2 , 4]
    .map(offset => hex.substring(offset, offset+2))
    .map(hexCh => parseInt(hexCh,16));
    return{ r, g, b};
}

let test=hexToRgb('aaee33');
console.log(test);

interface Car{ model: string;
               year: number;
};//interfaces just have structure and we can make any change. It can be exported like another funtions and consumed in another functions

let myCar: Car = { model: "hundai",
                   year: 20012};

// Any type can be used change the reasign to any type to string or number
var myage = 25;
var age: any =myage;
console.log(age);
age = "any";
console.log(age);

function add (a: any, b: any) : any{
    let c = a+b;
    console.log(c);
    return c;
};

add(5,5);
add('a','b');//opposite of any is never