// #1 Find the pair that equals to a given sum.
// #2 Find the 2nd largest number in an array
// #3 Remove duplicates in an array
// #4 Check for a palindrome string
// #5 Strings: character count, anagram
// #6 Strings: all arrangements (permutations)
// #7 Objects : iteration, add, update, delete
// #8 Array of objects: iteration, add, update, delete, sort
// #9 Decimal to binary and vice versa
// #10 Math operations
// #11 Fill up array and print sum
// #12 Print pyramid pattern
// #13 Print prime numbers
// #14 Convert a string's characters to its respective ascii values
// #15 Find mean, median and mode of a given array of numbers
// #16 Find distance between 2 points


//#1

let arr = new Array(10).fill(0);
arr = arr.map((el)=>{
    return el+Math.ceil(Math.random()*10);
})

let sum = 10;

let pairs=[];
let indices=[];

function findPair(arr){
arr.forEach((n,i)=>{
        if(arr.indexOf(sum-n)!=-1 && indices.indexOf(i)==-1 && indices.indexOf(arr.indexOf(sum-n))==-1 && i!=arr.indexOf(sum-n)){
            indices.push(i);
            indices.push(arr.indexOf(sum-n));
            pairs.push([n,arr[arr.indexOf(sum-n)]]);
        }
    });
    console.log(arr,indices,pairs);
    return JSON.stringify(pairs);
}

console.log(`The pair with the provided sum is: ${findPair(arr)}`);


// #2

function secondLargest(arr){
    let max=Math.max(...arr);
    let max_ind = arr.indexOf(max);
    let max2=0;
    arr.forEach((el)=>{
        if(el>max2 && el<max){
            max2=el;
        }
    })
    console.log(arr);
    return max2;
}

console.log(`The second largest number is: ${secondLargest(arr)}`);

// #3
function removeDuplicates(arr){
    arr = Array.from(new Set(arr));
    return JSON.stringify(arr);
}

console.log(`The array : ${JSON.stringify(arr)} after removal of duplicates is: ${removeDuplicates(arr)}`);

// #4
let str='madam';
let str1 = 'racecar';
let str2= 'level';
let str3 = 'nurse';

function checkPalindrome(str){
    let a = str.split("");
    a=a.reverse();
    let new_str=a.join("");
    if(str==new_str){
        return "Yes";
    }else{
        return "No";
    }
    return "No";
}


console.log(`The string ${str} is palindrome?: ${checkPalindrome(str)}`);
console.log(`The string ${str1} is palindrome?: ${checkPalindrome(str1)}`);
console.log(`The string ${str2} is palindrome?: ${checkPalindrome(str2)}`);
console.log(`The string ${str3} is palindrome?: ${checkPalindrome(str3)}`);

// #5

let st = 'ticks';
let st1 = 'stick';

let st3 = 'institution';

function charCount(str){
    let counts={};
    let a = str.split("");
    a.forEach((s)=>{
        if(!counts[s]){
            counts[s]=1;
        }else{
            counts[s]+=1;
        }
    })
    return counts;
}


function anagram(str1,str2){
    let count1 = charCount(str1);
    let count2 = charCount(str2);
    let is_anagram=false;
    for(let key in count1){
        if(count2[key] && count1[key]==count2[key]){
            is_anagram=true;
        }
        else{
            is_anagram=false;
            break;
        }
    }
    return is_anagram;
}

console.log(`The character count of '${st3}' is: ${JSON.stringify(charCount(st3))}`);
console.log(`Is the string '${st}' & '${st1}' are anagrams?: ${anagram(st,st1)}`);
console.log(`Is the string '${st3}' & '${st1}' are anagrams?: ${anagram(st3,st1)}`);


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
let all_possibles1=permute(str3,2,dump,perms);
console.log(`The permutations of string: '${str3}' is: ${all_possibles1}, ${all_possibles1.length}`);

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





