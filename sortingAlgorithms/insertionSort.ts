class InsertionSort {
  /**
   * Starting from the first element in the unsorted partition,
   * if the value is less than the value to it's left,
   * we assign the value to that index and shift all the elements on the right to the right
   * thus growing the sorted partition from left to right
   * @param array
   * @returns array
   */
  public static sort(array: number[]) {
    // sorted partition grows from left to right hence the starting point for firstSortedIndex is the second element
    for (
      let firstUnsortedIndex = 1;
      firstUnsortedIndex < array.length;
      firstUnsortedIndex++
    ) {
      const newElement = array[firstUnsortedIndex];
      let c;

      for (c = firstUnsortedIndex - 1; c >= 0 && newElement < array[c]; c--) {
        array[c + 1] = array[c];
      }
      array[c + 1] = newElement;
    }
  }

  public static betterSort(array: number[]) {
    let firstUnorderedIndex = 1;

    for (let i = firstUnorderedIndex; i < array.length; i++) {
      let newElement = array[i];
      let j;

      // condition "newElement < array[j - 1]" is added to prevent j from decreasing
      // if we need to place the newElement back at it's original position
      for (j = i; j > 0 && newElement < array[j - 1]; j--) {
        array[j] = array[j - 1];
      }

      array[j] = newElement;
    }
  }
}

(() => {
  console.log('running insertion sort...');
  const array1: number[] = [10, 26, -3, 14, 5000, 0, -49];
  InsertionSort.sort(array1);
  console.log(array1);

  const array2: number[] = [10, 26, -3, 14, 5000, 0, -49];
  InsertionSort.betterSort(array2);
  console.log(array2);
})();
