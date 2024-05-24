var romanToInt = function(s) {
    let nums = [{char:'I',prec:1,value:1},
                {char:'V',prec:2,value:5},
                {char:'X',prec:3,value:10},
                {char:'L',prec:4,value:50},
               {char:'C',prec:5,value:100},
                {char:'D',prec:6,value:500},
                {char:'M',prec:7,value:1000}];
let sum=0;
let s_arr=[];
// let curr=s.charAt(0);
// let num = nums.filter((e)=>{return e.char==curr});
for(let i=0;i<s.length;i++){
    s_arr.push(nums.filter((e)=>{return e.char==s.charAt(i)})[0]);
    
}
    let s1=JSON.parse(JSON.stringify(s_arr));
    let precd = s_arr.sort((a,b)=>{return b.prec-a.prec});
    let start=0;
    let end = s_arr.indexOf(precd[0]);
    for(let i=0;i<precd.length;i++){
        end=-1;
        for(let k=0;k<s1.length;k++){
            if(s1[k].char == precd[i].char){
                end=k;
                break;
            }
        }
        // if(end==-1){
        //     break;
        // }
        
        let n = end>=0?precd[i].value:0;
        for(let j=start;j<end;j++){
            n = n - s1[j].value;
            s1[j]={};
        }
        sum+=n;
        start=end>=0?end+1:start;
        s1[end]={};
    
        
    }
    
   return sum; 
};

console.log(`The integer representation of MCDXIV is ${romanToInt("MCDXIV")}`);
console.log(`The integer representation of MMCDXLIX is ${romanToInt("MMCDXLIX")}`);
console.log(`The integer representation of MI ${romanToInt("MI")}`);
console.log(`The integer representation of IIM is ${romanToInt("IIM")}`);
console.log(`The integer representation of CM is ${romanToInt("CM")}`);
console.log(`The integer representation of IILM is ${romanToInt("IILM")}`);
console.log(`The integer representation of LIV is ${romanToInt("LIV")}`);
console.log(`The integer representation of MILL is ${romanToInt("MILL")}`);
console.log(`The integer representation of MIM is ${romanToInt("MIM")}`);
console.log(`The integer representation of CIM is ${romanToInt("CIM")}`);
console.log(`The integer representation of MIC is ${romanToInt("MIC")}`);
console.log(`The integer representation of DCCCLXLIX is ${romanToInt("DCCCLXLIX")}`);
console.log(`The integer representation of DCCCXCIX is ${romanToInt("DCCCXCIX")}`);














