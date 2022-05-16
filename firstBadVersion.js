// https://bigfrontend.dev/problem/first-bad-version




/*
 type IsBad = (version: number) => boolean
 */

/**
 * @param {IsBad} isBad 
 */
 function firstBadVersion(isBad) {
	// firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version) => {
    // write your code to return the first bad version
    // if none found, return -1
    let start = 0;
    let end = version;

    while (start <= end) {
      const middle = Math.floor((start + end) / 2);
      if (isBad(middle)) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }

    return start <= version ? start : -1; 
  }
}

// just need to consider the all good versions situation, should return -1 
