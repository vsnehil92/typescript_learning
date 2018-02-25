interface IStack<T> {
    push(item: T): IStack<T>;
    push(items: T[]): IStack<T>;
    pop(): T|undefined;
    length(): number;
    print(): void;
}

interface IStackNode<T> {
    data:T;
    next: IStackNode<T>;
}

export class Stack<T> implements IStack<T>{
    private head : IStackNode<T>;

    push(items: T | T[]): Stack<T>{
        if(items instanceof Array){
            items.forEach(items => this.push(items));
        }
        else{
            let n  = {
                data: items as T,
                next: this.head
            };
            this.head=n;
        }
        return this;
    }
    pop(): T|undefined{
        let n = this.head;
        if(!n) return undefined;
        this.head = this.head.next;
        return n.data;

    }
    length(): number{
        let n = this.head;
        let len=0;
        while(n){
            len++;
            n=n.next;
        }
        return len;
    }
    print(): void{
        let n = this.head;
        while(n){
            console.log(n.data);
            n=n.next;
        }
    }
}

let l = new Stack<number>();
let x: number = l.push([3,2,3]);
l.print();
let pop = l.pop();
// console.log(pop);
l.print();