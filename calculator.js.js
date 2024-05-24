exp="-1*((2*2)+4/8*6+(-2*12)*3+8)";


//Always use inbuilt eval function

try{
    eval(exp);
    console.log(`The result of ${exp} is: ${eval(exp)}`);
}catch(err){
    console.log("Invalid expression");
}