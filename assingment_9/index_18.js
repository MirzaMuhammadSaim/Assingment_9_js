// 6. Write a js program to count total number of even and odd elements in
// an array.
function countEvenOdd(arr) {
    let even = 0;
    let odd = 0;
    
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    }
    
    console.log(`Total even elements: ${even}`);
    console.log(`Total odd elements: ${odd}`);
  }
  
  const arr = [5, 7, 1, 8, 4, 7, 5];
  countEvenOdd(arr); 
  