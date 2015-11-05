function mergeSort(arr) {
  var tempArr = [];
  //split array in half and insert
  function splitArr(arrToSplit){
    if(arrToSplit.length === 1)  tempArr.push(arrToSplit);
    else {
      var arrLeft = arrToSplit.slice(0,Math.ceil(arrToSplit.length/2));
      var arrRight = arrToSplit.slice(Math.ceil(arrToSplit.length/2));
      splitArr(arrLeft);
      splitArr(arrRight);
    }
  };

  splitArr(arr);
return combineArr(tempArr);

function combineArr(arrOfArrays) {
  // recursive combineArr(arr) function that returns an array of arrays

  // initialArr.length === 1
    // return initialArr[0] which is the sorted array
    if(arrOfArrays.length === 1) {
      return arrOfArrays[0];
    }

    var resultsArr = [];
    while(arrOfArrays.length > 0) {
      var leftArr = arrOfArrays.pop();
      var rightArr = arrOfArrays.pop() || [];
      var combinedArr = combineHelper(leftArr, rightArr);//: combine left and right into one array
      resultsArr.push(combinedArr);
    }

    return combineArr(resultsArr);
  }

  // create new arr from these two
  function combineHelper(leftArr, rightArr) {
    var resultsArr = [];
    while(leftArr.length || rightArr.length) {
      if (leftArr.length >0)
      {
        //check if right >0
        if(rightArr.length >0){
          //pick them in order
          leftArr[0] < rightArr[0] ? resultsArr.push(leftArr.shift()) : resultsArr.push(rightArr.shift());
        }
        else {
            //take left
            resultsArr.push(leftArr.shift());
          }

      }
      //if left is empty
      else {
        //take right
        resultsArr.push(rightArr.shift());
      }
    }
    return resultsArr;
  }

}








var arr = [5,1,3,2,4];
console.log(mergeSort(arr));
