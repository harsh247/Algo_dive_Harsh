function sum(...arg){
let sum = arg.reduce((s,el)=>{
return s+el;
});

return sum;
}

function product(...arg){
    let prod = arg.reduce((p,el)=>{
        return p*el;
    });
    return prod;
}

let arr = new Array(5).fill(1);
arr = arr.map((el,i)=>{
return el+(i)*2;
});

let arr1 = new Array(5).fill(1);
arr1 = arr1.map((el,i)=>{
    return Math.pow(2,i);
})

let arr3 = new Array(5).fill(1);
arr3 = arr3.map((el,i)=>{
    return 1/(el+(i)*2);
})

console.log(`The AP series is: ${arr}`);
console.log(`The GP series is: ${arr1}`);
console.log(`The HP series is: ${arr3}`);



console.log(`The sum of AP is: ${sum(...arr)}`);
console.log(`The sum of GP is: ${sum(...arr1)}`);
console.log(`The product of 1st array is: ${product(...arr)}`);
console.log(`The sum of HP is: ${sum(...arr3)}`);

let am = sum(...arr)/arr.length;
let hm = arr3.length/sum(...arr3);
let gm = Math.pow(product(...arr),1/arr.length);

console.log(`The AM of 1st array is: ${am}`);
console.log(`The GM of first array is: ${gm}`);
console.log(`The HM of first array is: ${hm}`);

console.log(`AM*HM=GM^2 proof: ${am*hm}==${Math.pow(gm,2)}? Answer: ${am*hm==Math.pow(gm,2)?true:false}`);

// Self invoked functions

(function findMean(...args){
    let mean = args.reduce((sum,el)=>{
        return sum+el;
    })/args.length;
    return mean;
}(...[1,2,3,4,5,6]));


// Callbacks

function evaluate(a,b,func){
    return func(a,b);
}

function divide(a,b){
    return a/b;
}

function prod(a,b){
    return a*b;
}

function sum(a,b){
    return a+b;
}

function diff(a,b){
    return a-b;
}


console.log(`The result of evaluate(5,4,'/') is : ${evaluate(5,4,divide.bind(this))}`);




