//gerics ask with rishabh bhai
//function overloading 
function add(x: number, y: number): number;
function add(x: string, y: string, radix: number): number|string;

function add (x: number|string, y: number|string, radix: number=10): number| string{
    if(typeof x === 'string' && typeof y === 'string')
    {
        console.log(parseInt(x, radix));
    return (parseInt(x, radix)+ parseInt(y, radix));
    }
    else if(typeof x === 'number' && typeof y === 'number'){
        return(x+y);
    }
    else{
        return 0 as never;
    }
}

console.log(add ('snehil', 'verma', 2));//why is it returning Nan?