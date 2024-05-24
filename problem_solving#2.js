// #6 Strings: all arrangements (permutations)
// #7 Objects : iteration, add, update, delete
// #8 Array of objects: iteration, add, update, delete, sort

// #6

let test_str="madam";
console.log(`The string is:${test_str}`);

// Approach 1 :


function permutation(str){

let str_arr = str.split("");
let len = str_arr.length;
let perm=[];
let n = Math.pow(len,len)-1;
for(let i=1;i<n;i++){
  let a = i.toString(str.length);
  if(a.length<str.length){
      while(a.length!=str.length){
          a='0'+a;
      }
  }
  let as=a.split("");
  let a_set = Array.from(new Set(as));
  if(a_set.length==str.length){
        let t='';
        for(let j=0;j<a_set.length;j++){
        t+=str.charAt(a_set[j]);
    }
        perm.push(t);
  }
    
}
console.log(perm.length);
perm = Array.from(new Set(perm));
return perm;
}

console.log(`The permutations of string: '${test_str}' is: ${permutation(test_str)},${permutation(test_str).length}`);

// Approach 2:

let dump=[];
let perms=[];
function permute(str,n,dump,perms){
    let new_dump=[];
  if(n==2){
    let a = str.charAt(str.length-1);
    let b = str.charAt(str.length-2);
    dump.push(a+b);
    dump.push(b+a);
    // console.log(dump);
    new_dump=JSON.parse(JSON.stringify(dump));
  }

  let c = str.charAt(str.length-n);
  for(let i=0;i<dump.length;i++){
    if(dump[i].length==n-1){
    for(let j=0;j<=dump[i].length;j++){
      
      let str = dump[i].substr(0,j)+c+dump[i].substr(j,dump[i].length);
      dump.push(str);
      new_dump.push(str);
    }
  }
}
  // console.log(new_dump);
  // let perms=[];
  if(n==str.length){
    // let perms=[];
    perms = dump.filter((el)=>{
      return el.length==n;
    });
    // console.log(perms);
    perms=Array.from(new Set(perms));
    return perms;
  }else{
  n+=1;
  return permute(str,n,new_dump,perms);
  }
}

let all_possibles=permute(test_str,2,dump,perms);
console.log(`The permutations of string: '${test_str}' is: ${all_possibles},${all_possibles.length}`);
dump=[];
perms=[];
let str4 = 'license';
// let all_possibles1=permute(str3,2,dump,perms);
let all_possibles2=permute(str4,2,dump,perms);
// console.log(`The permutations of string: '${str3}' is: ${all_possibles1}, ${all_possibles1.length}`);
console.log(`The permutations of string: '${str4}' is: ${all_possibles2}, ${all_possibles2.length}`);


// #7

let obj = {
  a:1,
  b:2,
  c:3,
  d:4
}

function Objectoperations(obj){
  console.log(`The objects iteration:`);
  for(let key in obj){
    console.log(`${key}:${obj[key]}`);
  }
  console.log(`Add :`);
  obj['e']=5;
  console.log(obj);

  console.log(`Update :`);
  obj['d']=10;
  console.log(obj);

  console.log(`Delete :`);
  delete(obj['e']);
  console.log(obj);

}

Objectoperations(obj);

// #8

let arr_obj=[
  {
    name:'Harsh',
    age:31
  },
  {
    name:'John',
    age:36
  },
  {
    name:'Jesse',
    age:28
  },
  {
    name:'Jasmine',
    age:26
  }
];

function array_operations(arr_obj){
  console.log("Iteration : ");
  arr_obj.forEach((obj)=>{
    console.log(obj);
  });
  console.log("Add:");
  arr_obj=[...arr_obj,
           {
             name:"Eddy",
             age:30
           }
          ];
  console.log(arr_obj);
  console.log("Update:");
  arr_obj.forEach((obj)=>{
    if(obj.name=='Jesse'){
      obj.age=35;
    }
  });
  console.log(arr_obj);
  console.log("Delete:");
  arr_obj=arr_obj.filter((obj)=>{
    return obj.name!='Eddy';
  });
  console.log(arr_obj);
  console.log("Sort:");
  arr_obj = arr_obj.sort((obj1,obj2)=>{
    return obj1.age-obj2.age;
  });
  console.log(arr_obj);
}

array_operations(arr_obj);