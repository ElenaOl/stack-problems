// 7. Find missing parenthesis in a given expression – 2 * ( 3 + 5(sasdfasdfasd)

// O(n)

function missing(exp){
    exp = exp.split("");
    stack = [];
    // console.log(exp);
    // console.log(exp[0]);
    for(var i=0; i<exp.length; i++){
      if(exp[i] === '('){
        stack.push(exp[i])
      }
      if(exp[i] === ')'){
        if(stack.length > 0){
          stack.pop();
        }else{
          return "the parenthesis unmatched";
        }
      }
    }
    if(stack.length > 0){
      return "the parenthesis unmatched"
    }else{
      return "matched"
    }
    
  }
  
  missing("2 * ( 3 + (5((sasdfasdfasd))))");
  