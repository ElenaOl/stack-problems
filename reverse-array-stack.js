// 9. Reverse a stack and put the reversed value back in the same stack. You can use only one other stack and a temp variable.
// last number in first arr going to temp,
// all other numbers going to second arr
// temp being pushed back to first arr
// second array being pushed back to first array

//~O(n^2) 
//O((n-1)+(n-2)+(n-3)+(n-4)...+1)*2) === (((n-1)+1)*(n-1))/2.


function reverseStack(arr1){
  var arr2=[];
  for(var k=0; k<arr1.length; k++){
  var temp = arr1.pop();
    
    // all numbers that are not in their place are going to the second array
    while(arr1.length > k){
      arr2.push(arr1.pop())
    }
    
    arr1.push(temp);
    
    // copy back array 2 into array 1
    while(arr2.length > 0){
      arr1.push(arr2.pop())
    }

  }
  
  return arr1;
}

var arr = [1,2,3,4,5];
reverseStack(arr);



