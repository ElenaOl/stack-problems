// 8. Evaluate an expression given only single digits and only 2 operators * and +.
// If you are given an expression 2*3 + 4*5
// Then the answer expected is 26

// O(n) solution

function evaluationOfExpression (arr){
    var arrOfMult = [];
    var temp = arr[0];
    for(var i=1; i<arr.length-1; i++){  
     
      if(arr[i] === '*'){
        temp = temp*arr[i+1];
      }
      
      if(arr[i] === '+'){
         arrOfMult.push(temp);
         temp = arr[i+1];
      }
      
    }
    arrOfMult.push(temp);
   
    
    var sum = arrOfMult.reduce( (prev, curr) => prev + curr );
    return sum;
    
  }
  var question = '2*3+4*5*2+4*5';
  var arrQ = question.split('');
  evaluationOfExpression(arrQ);
  