function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      var current = arr[j],
        next = arr[j + 1];
      if (current > next) {
        var temp = current;
        arr[j] = next;
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

var arr = [5,1,3,2,4];
console.log(bubbleSort(arr));
