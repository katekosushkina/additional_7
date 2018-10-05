module.exports = function solveSudoku(matrix) {
  let nums = [1,2,3,4,5,6,7,8,9];
  matrix.forEach(function(el, i) {
      el.forEach(function(el2, i2){
          for (let n=1;n<=9;n++) {
              if (el2==n){
                  nums.splice(nums.indexOf(n), 1);
                  break;
              }
          }
      });
      el.forEach(function(el2, i2){
          if(matrix[i][i2]==0){
              matrix[i][i2] = nums.slice(0);
          }
      });
  nums = [1,2,3,4,5,6,7,8,9];
  });

  matrix.forEach(function(el, i) {
      el.forEach(function(el2, i2){
          if (Array.isArray(el2)){
              el2.forEach(function(n){
                  for (i=0; i<9;i++){
                      if (matrix[i][i2]==n){
                          el2.splice(el2.indexOf(n), 1);
                          break;

                      }
                  }
              });
          }
      });
  });

  matrix.forEach(function(el, i) {
      el.forEach(function(el2, i2){
          if (Array.isArray(el2)){
              if (el2.length==1){
                  matrix[i][i2] = el2[0];
              }
          }
      });
  });
  return matrix;
}
