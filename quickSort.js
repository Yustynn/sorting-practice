function quickSort(arr) {
  var sortedIndices = [];

  function swap(leftI, rightI) {
    var temp = arr[leftI];
    arr[leftI] = arr[rightI];
    arr[rightI] = temp;
  }

  function quickSortHelper(leftI, rightI, wall) {
    wall = wall || arr.length - 1;
    if (rightI > wall) rightI = wall;
    if (rightI < 1 || leftI >= rightI) return;
    var pivotLeft = true; // take 0th element as pivot

    while (leftI !== rightI) {
      if (pivotLeft) {
        if (arr[leftI] > arr[rightI]){
          swap(leftI, rightI);
          pivotLeft = !pivotLeft;
          leftI++;
        }
        else {
          rightI--;
        }
      }

      else {
        if (arr[rightI] < arr[leftI]) {
          swap(leftI, rightI);
          pivotLeft = !pivotLeft;
          rightI--;
        }
        else {
          leftI++;
        }
      }
    }
    if (leftI === arr.length) return;
    quickSortHelper(0, leftI - 1, leftI - 1);
    quickSortHelper(rightI + 1, arr.length - 1, wall);
  }


    // helper(leftI, rightI)
    // take 1st el as pivot
    // initialize lookRight = true, left = 0, right = arr.length - 1
    // while right !== left
      // compare pivot to direction, swap if necessary
        // (IF SWAP) lookRight = !lookRight
        // increment opposite direction by 1
    // recur on (0, left - 1) and (right + 1, arr.length - 1)



    quickSortHelper(0, arr.length - 1);
    return arr;


  // return sortedArr
}



var arr = [5,1,3,2,4];
console.log(quickSort(arr));
