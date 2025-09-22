// 0,1,1,2,3,5.....

function fibi(num) {
  if (num == 0) return 0;
  if (num == 1) return 1;
  return fibi(num - 1) + fibi(num - 2);
}
