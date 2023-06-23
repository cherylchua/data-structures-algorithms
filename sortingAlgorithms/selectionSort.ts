class SelectionSort {
  /**
   * Selecting the largest value in the unsorted partition and swapping it with the last item in the unsorted partition
   * thus growing the sorted partition from right to left
   * @param array
   * @returns array
   */
  public static sort(array: number[]) {
    // sorted partition grows from right to left hence the starting point for lastUnsortedIndex is the last element
    for (
      let lastUnsortedIndex = array.length - 1;
      lastUnsortedIndex > 0;
      lastUnsortedIndex--
    ) {
      let largestValueIndex = 0;

      // sort ignoring the sorted partition
      for (let j = 0; j <= lastUnsortedIndex; j++) {
        if (array[j] > array[largestValueIndex]) {
          largestValueIndex = j;
        }
      }
      this.swap(array, largestValueIndex, lastUnsortedIndex);
    }

    return array;
  }

  public static swap(array: number[], i: number, j: number) {
    if (i === j) {
      return;
    }

    const valueAtIndexI: number = array[i];
    array[i] = array[j];
    array[j] = valueAtIndexI;
    return;
  }
}

(() => {
  console.log('running selection sort...');
  const array: number[] = [10, 26, -3, 14, 5000, 0, -49];
  SelectionSort.sort(array);
  console.log(array);
})();
