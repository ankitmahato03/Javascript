let arr = [1, 2, 3, 4, 5, 6, 5, 7, 8, 7];

// let userInput = prompt("Please enter your name:");
// let n = Number(userInput);
// function multi(i) {
//   return i * n;
// }

//let newarr=[];
/* for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] % 2 ==0 ) {
        newarr.push(arr[i])
        
    }
    
  
    
} 

*/

const  finde= (n) =>{
if(n % 2  === 0){
return true;
}
else{
return false;
}

};


let ans = arr.filter(finde);


//const ans = arr.map(multi);
console.log(ans);
