let mat = [[1,2,3,4],[3,1,2,6],[5,2,1,2],[1,2,3,4]];
let matrix1 = [[1,2,3],[0,1,2],[3,2,2]];
let matrix3 =[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];
let matrix4 = [[1,2],[2,5]];
let matrix5 =[[5]];
let matrix6 = [[1,2,3,4],[2,5,7,3],[4,10,14,6],[3,4,2,7]];
let matrix7 = [[3,2,1,3],[5,0,1,3],[1,5,-1,2],[4,4,2,1]];
let dummy_mat = [[1,2,4,3,2],[3,8,6,1,4],[2,0,1,5,3],[1,1,3,2,2],[4,2,0,1,5]];
let test_mat = [[2,3,4,1],[2,2,2,2],[1,2,6,8],[1,1,7,2]];
function determinant(matrix){
    let act=0;
    let sum=0;
    let is_two=false;
    if(matrix.length==1){
                let d = matrix[0][0];
                act=d;
                is_two=true;
                // break;
        }else if(matrix.length==0){
                 let d = 0;
                act=d;
                is_two=true;
                // break;
        }else{
        for(let j=0;j<matrix[0].length;j++){
            if(matrix.length==2){
                let d = deter2(matrix);
                act=d;
                is_two=true;
                break;
            }else{
                let mat1=[];
                for(let k=0;k<matrix.length;k++){
                let m1=[];      
                    for(let l=0;l<matrix[k].length;l++){
                    if(l!=j){
                       m1.push(matrix[k][l]);   
                     }
                    }
                    if(k!=0){
                      mat1.push(m1);
                    }
            }
            sum+=Math.pow(-1,j)*matrix[0][j]*(determinant(mat1));
        }
    }
}
if(is_two){
return act;
}
return sum;
};

function deter2(matrix){
    if(matrix.length==2){
     let det=0;
     det=(matrix[0][0]*matrix[1][1] - matrix[0][1]*matrix[1][0]);
     return det;
    }
    return 0;
}


// Function to determine the inverse of a given matrix

function inverse(mat){
    let det = determinant(mat);
    if(mat.length==1 && mat[0].length==1){
        let inv_mat = [[1/mat[0][0]]];
        return inv_mat;
    }

    if(det==0){
        return "Invert does not exist";
    }
    let adjoint_matrix = [];
    for(let i=0;i<mat.length;i++){
        let temp_elem=[];
        for(let j=0;j<mat[i].length;j++){
            let adj=[];
            // let n=0;
            for(let l=0;l<mat.length;l++){
                // let incr_n=false;
                let temp=[];
                for(let m=0;m<mat[l].length;m++){
                    if(!(i==l || m==j)){
                       temp.push(mat[l][m]);
                    }                   
                }
                if(temp.length>0){
                    adj.push(temp);
                }
            }
            let adj_det = determinant(adj);            
            temp_elem.push(Math.pow(-1,i+j)*adj_det);
        }
        adjoint_matrix.push(temp_elem);
    }


    // Transposing
    
    let adjoint_transpose=JSON.parse(JSON.stringify(adjoint_matrix));

    for(let i=0;i<adjoint_transpose.length;i++){
        for(let j=0;j<adjoint_transpose[i].length;j++){
           adjoint_transpose[i][j]=adjoint_matrix[j][i];
        }
    }


    //Dividing by determinant

    for(let i=0;i<adjoint_transpose.length;i++){
        for(let j=0;j<adjoint_transpose[i].length;j++){
            adjoint_transpose[i][j]/=det;
        }
    }
return adjoint_transpose;
    
}


// Function to calculate the product of 2 matrices

function product(mat1,mat2){
    let prod_mat=[];
    if(mat1[0].length != mat2.length){
        return "Product is not possible";
    }else{
        for(let i=0;i<mat1.length;i++){
            let temp=[];
            for(let j=0;j<mat1[i].length;j++){
            let prodt=0;
                for(let k=0;k<mat1[i].length;k++){
                    prodt=prodt+(mat1[i][k]*mat2[k][j]);
                }
                prodt=prodt.toFixed(4);
                temp.push(prodt);
            }
            prod_mat.push(temp);
        }
    }
    return prod_mat;
}

console.log("The determinant is:"+determinant(mat));
console.log("The determinant is:"+determinant(matrix1));
console.log("The determinant is:"+determinant(matrix3));
console.log("The determinant of "+`${matrix6} is:`+determinant(matrix6));
console.log("The determinant of "+`${matrix7} is:`+determinant(matrix7));
//Inverse of matrix

console.log("The inverse of the matrix "+JSON.stringify(matrix1)+ "is:"+JSON.stringify(inverse(matrix1)));
console.log(`The inverse of the matrix ${JSON.stringify(inverse(matrix1))} is:${JSON.stringify(inverse(inverse(matrix1)))}`);

console.log("The inverse of the matrix "+JSON.stringify(matrix3)+ "is:"+JSON.stringify(inverse(matrix3)));

console.log(`The inverse of matrix ${matrix4} is: ${JSON.stringify(inverse(matrix4))}`);

console.log(`The inverse of matrix ${matrix7} is: ${JSON.stringify(inverse(matrix7))}`);


console.log("The inverse of the matrix "+JSON.stringify(test_mat)+ "is:"+JSON.stringify(inverse(test_mat)));

console.log(`The product of ${JSON.stringify(matrix4)} & ${JSON.stringify(inverse(matrix4))} is: ${JSON.stringify(product(matrix4,inverse(matrix4)))}`);

console.log(`The product of ${JSON.stringify(matrix1)} & ${JSON.stringify(inverse(matrix1))} is: ${JSON.stringify(product(matrix1,inverse(matrix1)))}`);

console.log(`The product of ${JSON.stringify(matrix5)} & ${JSON.stringify(inverse(matrix5))} is: ${JSON.stringify(product(matrix5,inverse(matrix5)))}`);

console.log(`The product of ${JSON.stringify(dummy_mat)} & ${JSON.stringify(inverse(dummy_mat))} is: ${JSON.stringify(product(dummy_mat,inverse(dummy_mat)))}`);

console.log(`The product of ${JSON.stringify(test_mat)} & ${JSON.stringify(inverse(test_mat))} is: ${JSON.stringify(product(test_mat,inverse(test_mat)))}`);


// console.log(determinant([[3,1],[5,2]],0));
// console.log(2+5);