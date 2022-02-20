module.exports = function towelSort (matrix) {
  let arrSort = [];
  if (matrix == null) {
    return [];
  }

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      for (j = 0; j < matrix[i].length; j++) {
        arrSort.push(matrix[i][j]);
      }
    } else {
      for (j = matrix[i].length - 1; j >= 0; j--) {
        arrSort.push(matrix[i][j]);
      }
    }
  }
  return(arrSort);
}
