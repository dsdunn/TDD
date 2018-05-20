//Sorting Suite

const mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  }
  if (array.length){
    let firstHalf = array.slice(0, Math.floor(array.length/2));
    let secondHalf = array.slice(Math.floor(array.length/2));

    return mergeSorted(mergeSort(firstHalf), mergeSort(secondHalf));
    }
  function mergeSorted (a,b) {
    for (let i = 0; i < b.length; i++) {
      if (a[0] < b[i]) {
        b.splice(i, 0, a.shift());
      } 
    } b = [...b, ...a];
    return b;
  }
}

module.exports = mergeSort;