function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let minIdx = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < min) {
        min = arr[j];
        minIdx = j;
      }
    }
    if(minIdx !== i) {
      // move curr val to min spot
      arr[minIdx] = arr[i];
      // update min spot
      arr[i] = min;
    }
  }
  return arr;
}

module.exports = selectionSort;