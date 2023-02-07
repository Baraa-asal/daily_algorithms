let differenceOfSum = function (nums) {
  let elementSum = 0;
  let digitSum = 0;

  nums.forEach((element) => {
    elementSum += element;
    while (element > 9) {
      digitSum += element % 10;
      element = Math.floor(element / 10);
    }
    digitSum += element;
  });

  return elementSum - digitSum;
};
