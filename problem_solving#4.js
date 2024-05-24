// #11 Fill up array and print sum
// #12 Print pyramid pattern
// #13 Print prime numbers
// #14 Convert a string's characters to its respective ascii values
// #15 Find mean, median and mode of a given array of numbers
// #16 Find distance between 2 points
// #17 Find the pair with maximum sum in an array
// #18 SetTimeout functionality
// #19 String manipulation


// #11 Fill up array and print sum

let arr = new Array(10).fill(0);

arr = arr.map((el,i)=>{
return el+i;
});

let sum = arr.reduce((s,el)=>{
    return s+el;
});

console.log(`The sum of the first 10 natural numbers is: ${sum}`);

// #12 Print pyramid pattern

let n=16;
for(let i=1;i<n;i++){
    let str='';
    for(let j=1;j<n;j++){
        if(j>(n/2)-i && j<(n/2)+i){
            str+='*';
        }else{
            str+=' ';
        }
    }
}


// #13 Print prime numbers

function primeNumbers(n)
{
    let primes = new Array(n).fill(0);
    
    primes = primes.map((el,i)=>{
        return el+i+1;
    })

    primes = primes.filter((el)=>{
        let isPrime = true;
        for(let i=2;i<=el/2;i++){
            if(el%i==0){
                isPrime=false;
            }
        }
        if(isPrime){
            return true;
        }else{
            return false;
        }
    });
 return primes;
}

console.log(`The primary numbers less than ${80} are: ${primeNumbers(80)}`);

// #14 Convert a string's characters to its respective ascii values

function convertToAscii(str)
{
    let arr = str.split("");
    let codes = [];
    for(let i=0;i<arr.length;i++){
        codes.push(arr[i].charCodeAt(0));
    }
    return codes;
}

let str = "Harsh Chandrakar";
console.log(`The character array and respective character codes of ${str} are : String array : ${str.split("")} with charCodes ${convertToAscii(str)}`);

// #15 Find mean, median and mode of a given array of numbers

let num_array = new Array(20).fill(0);

num_array = num_array.map((el)=>{
    return Math.ceil(Math.random()*20+el);
})

//Mean
function findMean(nums){
    let sum = nums.reduce((s,el)=>{
        return s+el;
    });
    return sum/nums.length;
}

// Meadian 
function findMedian(nums){
    nums = nums.sort((a,b)=>{
        return a-b;
    });

    let n = nums.length;
    let med = 0;
    if(n%2==0){
        med = (nums[nums.length/2]+nums[nums.length/2-1])/2;
    }else{
        med = nums[Math.floor(nums.length/2)];
    }
    return med;
}


// Mode
function findMode(nums){
    let num_counts = {};
    nums.forEach((num)=>{
        if(!num_counts[num]){
            num_counts[num] = 1;
        }else{
            num_counts[num]++;
        }
    });

    let keys = Object.keys(num_counts);
    let max = num_counts[keys[0]];
    let mode = [];
    for(let i=0;i<keys.length;i++){
        if(num_counts[keys[i]]>max){
            max = num_counts[keys[i]];
        }
    }
    
    mode = keys.filter((el)=>{
        return num_counts[el] == max;
    });
    return mode;
}


console.log(`The mean of the given nums array ${num_array} is : ${findMean(num_array)}`);
console.log(`The median of the given nums array ${num_array} is : ${findMedian(num_array)}`);
console.log(`The mode of the given nums array ${num_array} is : ${findMode(num_array)}`);

// #16 Find distance between 2 points

let points = [[1,2],[6,8]];

function distance(points){
    let p1 = points[0];
    let p2 = points[1];

    let distance = Math.pow((Math.pow((p1[0]-p2[0]),2)+Math.pow((p2[1]-p1[1]),2)),0.5);

    return distance;

}

console.log(`The distance between the 2 points ${JSON.stringify(points)} is : ${distance(points)}`);

// #17 Find the pair with maximum sum in an array

let test_arr = new Array(20).fill(0);

test_arr = test_arr.map((n)=>{
    return Math.floor(Math.random()*20+n+1);
});

test_arr = Array.from(new Set(test_arr));

function maxSumPair(test_arr){
    
    test_arr = test_arr.sort((a,b)=>{
        return a-b;
    });

    let result = [];
    
    result.push(test_arr[test_arr.length-1],test_arr[test_arr.length-2]);

    return result;
}

console.log(`The pair with maximum sum is : ${maxSumPair(test_arr)} and the sum is : ${maxSumPair(test_arr)[0]+maxSumPair(test_arr)[1]}`);


// #18 SetTimeout demo

function print_timer(){
    let a = 2;
    for(var i=0;i<10;i++){
        setTimeout((i)=>{
            console.log(`Value of i after the timer runs is : ${i}`);
        },2000,i);
    }
}



// #19 String manipulation

function alternateCaps(str){
    str_arr = str.split("");
    str_arr = str_arr.map((s,i)=>{
        if(i%2!=0){
            return s.toUpperCase();
        }else{
            return s;
        }
    });
    return str_arr.join("");
}

print_timer();

console.log(`The string 'driving on my lane' after the string operation is: ${alternateCaps('driving on my lane')}`);


// #20 STring Manipulation #2

str = "Welcome to Cognizant!";
let a = str.split(" ");
a = a.map(el=>{
 let el_arr = el.split("");
    return el_arr.reverse().join("");
});

console.log(a.join(" "));

str = "Hello world";
arr = str.split("").map((el,i)=>{
 if(el==' '){
  return '';
 }else if(i==str.split("").length-1){
  return el;
 }else{
  return el+'-';
 }
});
console.log(arr.join(""));


// Largest sum sub-array without any consecutive numbers in the subarray

function findArray(arr){
    let subs = [];
    for(let i=2;i<arr.length;i++){
        for(let j=0;j<=arr.length-i;j++){
            subs.push(arr.slice(j,j+i));        
        }
    }
    subs = subs.filter((el)=>{
        for(let i=0;i<el.length;i++){
            if(el.indexOf(el[i]+1)!=-1 || el.indexOf(el[i]-1)!=-1){
                return false;
            }
        }
        return true;
    });

    let sums = [];
    let indices = [];
    subs.forEach((el,ind)=>{   
        let sum = el.reduce((s,e)=>{
            return s+e;
        });
        sums.push(sum);
        indices.push(ind);
    });
    let max = Math.max(...sums);
    indices = indices.filter((ind,j)=>{
        return sums[j]==max;
    });

    results = [];
    for(let i=0;i<indices.length;i++){
        results.push(subs[indices[i]]);
    }

    return JSON.stringify(results);
}



let ts_arr = new Array(10).fill(0);
ts_arr = ts_arr.map((el)=>{
    return el+Math.ceil(Math.random()*10);
});

console.log(`The largest subarray of maximum sum with non consecutive elements of ${ts_arr} is ${findArray(ts_arr)}`);

// Find the pythagorean triplets that equal a^2+b^2=c^2 less than 100

function findTriplets(arr){
    arr = arr.filter((el)=>{
        if(Math.sqrt(el)%1==0){
            return true;
        }else{
            return false;
        }
    });

    console.log(`All perfect squares are:${arr}`);

    let triplets = [];
    arr.forEach((elem)=>{
        
        let temp = findPair(arr,elem);

        // console.log(temp);

        if(temp.length>0){
            temp = temp.map((el)=>{
            return Math.sqrt(el);
        });
            if(temp.length>3){
                let all_temp = [];
                while(temp.length>0){
                    all_temp = temp.slice(0,3);
                    triplets.push(all_temp);
                    temp = temp.slice(3,temp.length);
                    all_temp=[];
                }
            }else{
            triplets.push(temp);
            }
        }    
    });

    return JSON.stringify(triplets);
    
}

arr = new Array(800).fill(0);
arr = arr.map((num,i)=>{
    return num+i+1;
});


function findPair(arr,sum){
    let indices = [];
    let pairs = [];
    arr.forEach((n,i)=>{
        // pairs=[];
        if(arr.indexOf(sum-n)!=-1 && indices.indexOf(i)==-1 && indices.indexOf(arr.indexOf(sum-n))==-1 && i!=arr.indexOf(sum-n)){
            indices.push(i);
            indices.push(arr.indexOf(sum-n));
            pairs.push(n,arr[arr.indexOf(sum-n)],sum);
        }
    });
    return pairs;
}


console.log(`All the pythagorean triplets less than 100 existing are: ${findTriplets(arr)}`);