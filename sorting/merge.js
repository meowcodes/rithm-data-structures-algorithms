function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let sorted = [];

  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]) {
      sorted.push(arr1[i]);
      i++;
    }else {
      sorted.push(arr2[j]);
      j++;
    }
  }

  sorted.push(...arr1.slice(i));
  sorted.push(...arr2.slice(j));

  return sorted;
}

function mergeSort(arr) {
  // break array until length is 0 or 1;
  if(arr.length <= 1) return arr;
  let left = mergeSort(arr.slice(0, Math.floor(arr.length/2)));
  let right = mergeSort(arr.slice(Math.floor(arr.length/2)));
  // merge each little one;
  let sorted = merge(left, right);
  console.log("IN MS", left, right, sorted);
  return sorted
}

module.exports = {merge, mergeSort};