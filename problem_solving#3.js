// #9 Decimal to binary and vice versa
// #10 Math operations

// #9

let num=31;
// Approach 1: Old school approach (fundamental)

function convertToBinary(num){
    let mult=1;
    let prev_mult=1;
    while(mult<=num){
        prev_mult=mult;
        mult*=2;    
    }
    mult=prev_mult;
    let str='';
    while(num!=0){
        if(num/mult>=1){
            str+='1';
        }else{
            str+='0';
        }
        num%=mult;
        if(num!=0){
        mult/=2;
        }
    }
    let count=0;
    while(mult!=1){
        str+='0';
        count++;
        mult/=2;
    }
    
    return str;
}

console.log(`The binary representation of number:${num} is: ${convertToBinary(num)}`);

// Approach 2: Using toString() method

console.log(`The binary representation of number:${num} is: ${num.toString(2)}`);


// Binary to Decimal

function binaryToDecimal(str){
    let num = 0;
    let invalid = false;
    for(let i=str.length-1;i>=0;i--){
        if(['0','1'].indexOf(str.charAt(i))==-1){
            console.log(str.charAt(i),typeof(str.charAt(i)));
            invalid=true;
            break;
        }else{
            let t = parseInt(str.charAt(i));
            // console.log(t);
            t=t*Math.pow(2,str.length-1-i);
            num+=t;
            // console.log(num);
        }
    }
    if(invalid){
        return `The binary number is invalid`;
    }else{
        return num;
    }
}

let bin = '101010';
console.log(`The decimal representation of '${bin}' is : ${binaryToDecimal(bin)}`);

// Verify

console.log(`The ${bin} is same as : ${binaryToDecimal(bin).toString(2)}`);


// #10
let num_arr=[2,4,5,6,7,8,12,3];
console.log(`Maximum is : ${Math.max(...num_arr)}`);
console.log(`Minimum is : ${Math.min(...num_arr)}`);
let n1=1.07;
console.log(`Rounding off: Ceil:${Math.ceil(n1)}, Floor:${Math.floor(n1)}, Round off: ${Math.round(n1)}`);
console.log(`Power: ${Math.pow(n1,21)}`);


