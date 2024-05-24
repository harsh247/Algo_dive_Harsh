let exp = '3*4+12-5*3+2-21/3+(7-3)';
let exp1 = '57-((34)+29)-5*(6)';
let exp3 = `3/37-(5*5+5)-14`;
let exp4 = `6-4-(-2)`;
let exp5 = `32+22-(2*8+4/3-12)*16+(3-10)`;
let exp6 = `12-23+(3*2*1*2)`;
let exp7 = `32%11*12+9-2+(12*21+22-(6*4))`;
let exp8 = `12+21*(6-22)-18+(5+3*2)%21`;
let exp9 = `22-12*(2+6-19)*11%3+12`;
let exp10 = `1+11+111/11-11*1%(1+11+11)`;
let exp11 = `11-22-33-44+55+66+77+(8*11)+(100-1)`;
let exp12 = `11-22+(4*2+12)-16/6%4`;
let exp13 = `22/10*4+3-20/5+4`;
let exp14 = `21%4+3*2*8-6+12`;


//Validate expression

function validateExpression(exp){
    if(exp.length==0){
        return false;
    }
    let braces=[];
    valid_braces=false;
    let brace_indices=[];
    let curr_ind=[];
    for(let i=0;i<exp.length;i++){
        if(exp.charAt(i)=='('){
            braces.push('(');
            if(i>0 && !isNaN(exp.charAt(i-1))){
                return false;
            }
            brace_indices.push([]);
            brace_indices[braces.length==1?brace_indices.length-1:braces.length-1].push(i);
            curr_ind.push(braces.length==1?brace_indices.length-1:braces.length-1);
        }else if(exp.charAt(i)==')'){
            brace_indices[curr_ind.pop()].push(i);    
            braces.pop();
        }else{
            continue;
        }
    }
    if(braces.length==0){
        valid_braces=true;
    }else{
        valid_braces=false;
        return false;
    }


    if(valid_braces){
        let trimmed=0;
        for(let k=0;k<brace_indices.length;k++){
        let arr = exp.split('');
        if(k==0 || brace_indices[k][0]>brace_indices[k-1][1]){
        arr.splice(brace_indices[k][0]-trimmed,(brace_indices[k][1]-trimmed)-(brace_indices[k][0]-trimmed)+1,'0');
        trimmed+=brace_indices[k][1]-brace_indices[k][0];
        }
        exp=arr.join('');
        }
    }

    let valid_operators=true;
    let ops=['/','*','%','+','-'];
    if(ops.indexOf(exp.charAt(exp.length-1))!=-1){
        valid_operators=false;
    }

    let consecutive_operators = ['*-','/-','%-'];

    let has_consecutive = false;
    
    for(let i=0;i<exp.length-1;i++){
        if(consecutive_operators.indexOf(exp.charAt(i)+exp.charAt(i+1))!=-1){
            has_consecutive=true;
        }
    }

    exp=exp.replaceAll("/",'&');
    exp=exp.replaceAll('*','&');
    exp=exp.replaceAll('%','&');
    exp=exp.replaceAll('+','&');
    exp=exp.replaceAll('-','&');

    let exp_parts = exp.split('&');

    for(let j=0;j<exp_parts.length;j++){
    if(isNaN(exp_parts[j])){
        valid_operators=false;
        break;
        }
    }
    
    for(let j=0;j<exp_parts.length;j++){
        if(exp_parts[j]=='' && j>0 && !has_consecutive){
            valid_operators=false;
        }
    }

    if(valid_braces && valid_operators){
        return true;
    }else{
        return false;
    }
}


//Solve Expression

function solve(exp){
    if(!validateExpression(exp)){
        return "Invalid Expression";
    }
let preced = [
    {char:'(',prec:1},
    {char:'/',prec:2},
    {char:'*',prec:2},
    {char:'+',prec:5},
    {char:'-',prec:5},
    {char:'%',prec:2}
];

let ops=[];
let op_indices=[];
preced.forEach((el)=>{
    ops.push(el.char);
})
let flag=false;
for(let i=0;i<exp.length;i++){
    if(ops.indexOf(exp.charAt(i))!=-1){
        op_indices.push({char:exp.charAt(i),ind:i});
    }
}
for(let i=0;i<preced.length;i++){
    for(let j=0;j<op_indices.length;j++){
        if(preced[i].char==op_indices[j].char){
            op_indices[j]['prec']=preced[i].prec;
        }
    }
}
op_indices=op_indices.sort((a,b)=>{
    return a.prec-b.prec;
});
    let braces=[];
    let strt=0;
    let bal=[];
    let f=0;
    for(let m=0;m<exp.length;m++){
    let flag=false;
    if(exp.charAt(m)=='('){
        f++;
        flag=true;
        bal.push('(');
        braces.push([m]);
    }

    if(exp.charAt(m)==')'){
        f--;
        braces[f].push(m);
        bal.pop();
        flag=false;
    }
    }
    for(let i=0;i<op_indices.length;i++){
        let flag=false;
        for(let a=0;a<braces.length;a++){
        if(op_indices[i].ind>braces[a][0] && op_indices[i].ind<braces[a][1]){
            flag=true;
        }
        }
        if(!flag){
        if(op_indices[i].char=='('){
            let off_ind=0;
            let j=op_indices[i].ind+1;
            let exp1='';
            let s1=0;
            let brs=['('];
            let s=j;
            while(brs.length!=0){
                if(exp.charAt(s)=='('){
                    brs.push('(');
                }

                if(exp.charAt(s)==')'){
                    brs.pop();
                }
                s++;
            }
            exp1=exp.slice(j,s-1);
            if(!validateExpression(exp1)){
                return "Invalid Expression";
            }
            let sol=solve(exp1);
            let rep=exp.split('');
            rep.splice(op_indices[i].ind,s-op_indices[i].ind,sol);
            exp=rep.join('');
            if(exp.indexOf("--")!=-1){
                exp=exp.replaceAll("--","+");
                if(!validateExpression(exp)){
                    return "Invalid Expression";
                }
                exp=solve(exp);
                break;
            }
            else if(exp.indexOf("-+")!=-1 || exp.indexOf("+-")){
                exp=exp.replaceAll("-+","-");
                exp=exp.replaceAll("+-","-");
                if(!validateExpression(exp)){
                    return "Invalid Expression";
                }
                exp=solve(exp);
                break;
            }
        }
        else{
            let a = op_indices[i].ind-1;
            let b = op_indices[i].ind+1;
            let op = op_indices[i].char;
            let op_ind=[];
            if(a<0){
                if(op_indices.length==1){
                break;
                return;
                }
            }
            let expr=exp;
            let fl=false;
            for(let k=0;k<expr.length;k++){
            if(expr.charAt(k)=='/' || expr.charAt(k)=='*' || expr.charAt(k)=='+' || expr.charAt(k)=='-' || exp.charAt(k)=='%'){
                if(expr.charAt(k)=='-' && k==0){
                    fl=true;
                    if(op=='-'){
                    op=op_indices[i+1].char;
                    }
                    continue;
                }

                if(expr.charAt(k)=='-' && (expr.charAt(k-1)=='/' || expr.charAt(k-1)=='*' || exp.charAt(k-1)=='%' || expr.charAt(k-1)=='&')){
                    continue;
                }
                op_ind.push(expr.charAt(k)); 
                let expr1=expr.split('');
                expr1.splice(k,1,'&');
                expr=expr1.join('');

            }        
        }
            let nums = expr.split("&");
            
            nums=nums.map((num)=>{
                if(!isNaN(parseFloat(num))){
                    if(!validateExpression(num)){
                    return "Invalid Expression";
                }
                    return parseFloat(solve(num));
                }else{
                return parseFloat(num);
                }
            })
            let result='';
            switch(op){
                case '/':
                    result=(nums[op_ind.indexOf(op)]/nums[op_ind.indexOf(op)+1]).toString();
                    break;
                case '*':
                    result=(nums[op_ind.indexOf(op)]*nums[op_ind.indexOf(op)+1]).toString();
                    break;
                 case '%':
                    result=(nums[op_ind.indexOf(op)]%nums[op_ind.indexOf(op)+1]).toString();
                    break;
                case '+':
                    result=(nums[op_ind.indexOf(op)]+nums[op_ind.indexOf(op)+1]).toString(); 
                    break;
                case '-':
                    result=(nums[op_ind.indexOf(op)]-nums[op_ind.indexOf(op)+1]).toString();
                    break;
                default:
                    result='';
                    break;
            }
            
            let start=0;
            let end=0;
            let inds=[];
            for(let w=0;w<exp.length;w++){
                if(exp.charAt(w)==op){
                    inds.push(w);
                }
            }
            for(let q=0;q<inds.length;q++){
                if(inds[q]>0){
                    l=inds[q]+1;
                    break;
                }
            }
            
            while(op_ind.indexOf(exp.charAt(l))==-1){
                if(l>=exp.length-1){
                    break;
                }
                l++;
            }
             if(exp.charAt(l)=='-' && (exp.charAt(l-1)=='*' || exp.charAt(l-1)=='/' || exp.charAt(l-1)=='%')){
                l++;
                while(op_ind.indexOf(exp.charAt(l))==-1){
                if(l>=exp.length-1){
                    break;
                }
                l++;
            }             
            }
            if(l==exp.length-1){
            end=l;
            }else{
             end=l-1;   
            }
            for(let w=0;w<exp.length;w++){
                if(exp.charAt(w)==op){
                    inds.push(w);
                }
            }
            for(let q=0;q<inds.length;q++){
                if(inds[q]>0){
                    l=inds[q]-1;
                    break;
                }
            }
            
            while(op_ind.indexOf(exp.charAt(l))==-1){
                if(l<=0){
                break;
                }
                l--;
            }
             if(exp.charAt(l)=='-' && (exp.charAt(l-1)=='*' || exp.charAt(l-1)=='/' || exp.charAt(l-1)=='%')){
                l++;
                while(op_ind.indexOf(exp.charAt(l))==-1){
                if(l>=exp.length-1){
                    break;
                }
                l++;
            }             
            }
            if(l==0){
                start=l;
            }else{
            start=l+1;
            }
            let rep=exp.split('');
            rep.splice(start,end-start+1,result);
            exp=rep.join('');
            if(exp.indexOf("--")!=-1){
                exp=exp.replaceAll("--","+");
                if(!validateExpression(exp)){
                    return "Invalid Expression";
                }
                exp=solve(exp);
                break;
            }else if(exp.indexOf("-+")!=-1 || exp.indexOf("+-")){
                exp=exp.replaceAll("-+","-");
                exp=exp.replaceAll("+-","-");
                if(!validateExpression(exp)){
                    return "Invalid Expression";
                }
                exp=solve(exp);
                break;
            }

        }
    }
}
    return exp;
}

console.log("The answer is:"+solve(exp));
console.log(`The answer of ${exp1} is:`+solve(exp1));
console.log(`The answer of ${exp3} is:`+solve(exp3));
console.log(`The answer of ${exp4} is:`+solve(exp4));
console.log(`The answer of ${exp5} is:`+solve(exp5));
console.log(`The answer of ${exp6} is:`+solve(exp6));
console.log(`The answer of ${exp7} is:`+solve(exp7));
console.log(`The answer of ${exp8} is:`+solve(exp8));
console.log(`The answer of ${exp9} is:`+solve(exp9));
console.log(`The answer of ${exp10} is:`+solve(exp10));
console.log(`The answer of ${exp11} is:`+solve(exp11));
console.log(`The answer of ${exp12} is:`+solve(exp12));
console.log(`The answer of ${exp13} is ${solve(exp13)}`);
console.log(`The answer of ${exp14} is ${solve(exp14)}`);




// console.log(`The expression is valid? ${exp1}:`+validateExpression(exp1));
