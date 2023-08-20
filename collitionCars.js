
var countCollisions = function (directions) {
    let start, end, counter = 0, n = directions.length;

    for (let i = 0; i < n; i++) {
      if (directions[i] !== 'L') {
        start = i;
        break;
      }
    }
      
  
    for (let i = n - 1; i >= 0; i--) {
      if (directions[i] !== 'R') {
        end = i;
        break;
      }
    }
      
  
    for (let i = start; i <= end; i++) {
      if (directions[i] !== 'S') {
        counter++;
      }
    }
      
  
    return counter;
};
