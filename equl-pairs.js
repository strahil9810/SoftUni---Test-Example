function equalPairs(input) {
    let previousPairSum = NaN;
    let maxPairDifference = 0;
  
    const pairs = Number.parseInt(input.shift());
  
    for (let i = 0; i < pairs; i++) {
      const firstNumber = Number.parseInt(input.shift());
      const secondNumber = Number.parseInt(input.shift());
      const currentPairSum = firstNumber + secondNumber;
  
      if (isNaN(previousPairSum)) {
        previousPairSum = currentPairSum;
      }
  
      const differenceWithPreviousPair = Math.abs(previousPairSum - currentPairSum);
  
      if (differenceWithPreviousPair > maxPairDifference) {
        maxPairDifference = differenceWithPreviousPair;
      }
  
      previousPairSum = currentPairSum;
    }
  
    if (maxPairDifference !== 0) {
      console.log(`No, maxdiff=${maxPairDifference}`);
    } else {
      console.log(`Yes, value=${previousPairSum}`);
    }
}
equalPairs([2,
-1,
2,
0,
-1])