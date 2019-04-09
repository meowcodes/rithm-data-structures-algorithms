/** product: calculate the product of an array of numbers. */

// function product(nums) {
//   if(nums.length === 0) return 1;

//   return nums.pop() * product(nums);
// }

function product(nums, i=0){
  if(i === nums.length) return 1;

  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, max = 0, i = 0) {
  if(i === words.length) return max;

  if(words[i].length > max){
    max = words[i].length;
  }

  return longest(words, max, i + 1);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  if(i >= str.length) return "";

  return str[i] + everyOther(str, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  if(i >= Math.floor(str.length / 2)) return true;

  if(str[i] === str[str.length - i - 1]){
    return isPalindrome(str, i + 1);
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if(i === arr.length) return -1;

  if(arr[i] === val) {
    return i;
  } else {
    return findIndex(arr, val, i + 1);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0) {
  if(i === str.length) return "";

  return revString(str, i + 1) + str[i];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, out=[], i=0) {
  if(i === Object.keys(obj).length) return out;

  if(typeof Object.values(obj)[i] === "string") {
    out.push(Object.values(obj)[i])
  } else if(typeof Object.values(obj)[i] === "object") {
    gatherStrings(Object.values(obj)[i], out)
  }

  return gatherStrings(obj, out, i + 1);
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  let mid = Math.floor((left + right) / 2);
  if(left > right) return -1;

  if(arr[mid] === val){
    return mid;
  } else if(arr[mid] < val) {
    return binarySearch(arr, val, mid + 1, right);
  } else if(arr[mid] > val) {
    return binarySearch(arr, val, left, mid - 1);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
