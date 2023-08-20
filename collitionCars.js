
var countCollisions = function (directions) {
    let start, end, counter = 0, n = directions.length;
//ignore all the left at the start
    for (let i = 0; i < n; i++) {
      if (directions[i] !== 'L') {
        start = i;
        break;
      }
    }
      
  //ignore all the rignt at the end
    for (let i = n - 1; i >= 0; i--) {
      if (directions[i] !== 'R') {
        end = i;
        break;
      }
    }
      
  // count the number of left and right's
    for (let i = start; i <= end; i++) {
      if (directions[i] !== 'S') {
        counter++;
      }
    }
      
  
    return counter;
};


var countCollisions2 = function (directions) {
    if (directions.length == 0 || directions.length == 1) return 0;
    //add the first elememt in stack
    const stack = [directions[0]];
    let collisions = 0;
    for (let i = 1; i < directions.length; i++) {
        // stack[len - 1] is right and current car direction is left then +2 and remove from stack
        if (stack.length && stack[stack.length - 1] == 'R' && directions[i] == 'L') {
            stack.pop();
            collisions += 2;
            // check all the remaing right in stack , for evey right it collides with a static car so +1 and remove from stack
            while (stack.length && stack[stack.length - 1] == 'R') {
                stack.pop();
                collisions += 1;
            }
            stack.push('S');
            continue
            // stack[len - 1] is static and current car direction is left  then  +1 and remove from stack
        } else if (stack.length && stack[stack.length - 1] == 'S' && directions[i] == 'L') {
            collisions += 1;
            if (stack[stack.length - 1] == 'L') {
                stack.pop();
                stack.push('S');
            }
            continue
              // stack[len - 1] is right and current car direction is static then  +1 and remove from stack
        } else if (stack.length && stack[stack.length - 1] == 'R' && directions[i] == 'S') {
            collisions += 1;
            stack.pop();
 // check all the remaing right in stack , for evey right it collides with a static car so +1 and remove from stack
            while (stack.length && stack[stack.length - 1] == 'R') {
                stack.pop();
                collisions += 1;
            }
            stack.push('S');
            continue
        }
        stack.push(directions[i]);
    }
    return collisions;
};


console.log(countCollisions("RSLLRSSL"));
console.log(countCollisions2("RSLLRSSL"))
