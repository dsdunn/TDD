//Sorting Suite

// export
const mergeSort = (arr) => {
  const split = (toSplit) => {
    let secondHalf = toSplit.slice(Math.floor(toSplit.length/2));
    let firstHalf = toSplit.slice(0,Math.floor(toSplit.length/2));

    if(toSplit.length > 1) {
    return mergeSorted(split(firstHalf), split(secondHalf));
    }
    return mergeSorted(firstHalf, secondHalf);
  }
  const mergeSorted = (firstSorted, secondSorted) => {
      for( let j = 0; j < secondSorted.length; j++) {
        if(firstSorted[0] < secondSorted[j]) {
          secondSorted.splice(j, 0, firstSorted.shift());
        } 
      }
      while(firstSorted.length) {
        secondSorted.push(firstSorted.shift())
      }
    return secondSorted;
  }
  return split(arr)
}


// const mergeSort = (array) => {
//   if (array.length === 1) {
//     return array;
//   }
//   let firstHalf = array.slice(0, Math.floor(array.length/2));
//   let secondHalf = array.slice(Math.floor(array.length/2));

//   return [...mergeSorted(mergeSort(firstHalf), mergeSort(secondHalf))];

//   function mergeSorted (a,b) {
//     let arr = [];
//     while (a.length || b.length) {
//       if (a[0] < b[0]) {
//         arr.push(a.shift());
//       } else arr.push(b.shift());
//     }
//     return arr;
//   }
// }

module.exports = mergeSort;