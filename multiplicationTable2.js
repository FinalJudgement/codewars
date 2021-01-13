//https://www.codewars.com/kata/5432fd1c913a65b28f000342/train/javascript

function multiplicationTable(row, col) {
  return [...Array(row)].map((_, i) => [...Array(col)].map((_, j) => (i + 1) * (j + 1)))
}

multiplicationTable(2, 2)