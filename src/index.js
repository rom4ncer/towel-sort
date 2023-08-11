
// You should implement your task here.

module.exports = function towelSort (matrix) {
  answer = [];
  for (row in matrix) row % 2 ? answer.push(...matrix[row].reverse()) : answer.push(...matrix[row]);
  return answer;
}
