function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); //This works fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    (function (j) {
      setTimeout(() => {
        console.log(j);
      }, 0);
    })(i);
  }
}

printNumbers2(5); //This will print 1,2,3,4,5 in order

//Alternative solution using let inside the loop
function printNumbers3(n:number):void{
    for(let i = 1; i <= n; i++){
        setTimeout(()=>{
            console.log(i)
        },0)
    }
}
printNumbers3(5)//This also prints 1,2,3,4,5 in order