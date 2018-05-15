var isValid = function(s) {
  var stack = [];
  if(s.length === 0){
      return true;
  }  
  if(s.length === 1){
     return false;
   }
   if(s.length%2 !== 0){
       return false;
   } 
   for(var i=0; i<s.length; i++){
     if(s[i] === '(' || s[i] === '{' || s[i] === '['){
       stack.push(s[i]);
     }
     if(s[i] === ')' && stack[stack.length-1]==='('){
       stack.pop();
     }
     if(s[i] === '}' && stack[stack.length-1]==='{'){
       stack.pop();
     }
     if(s[i] === ']' && stack[stack.length-1]==='['){
       stack.pop();
     }
   } 
   if(stack.length === 0){
     return true;
   }
   return false;  
};