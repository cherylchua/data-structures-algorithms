class BubbleSort {
  /**
   * Bubbling up the largest value to the end of the array and growing the sorted partition from right to left
   * @param array
   * @returns array
   */
  public static sort(array: number[]): number[] {
    // sorted partition grows from right to left hence the starting point for lastUnsortedIndex is the last element
    for (
      let lastUnsortedIndex = array.length - 1;
      lastUnsortedIndex > 0;
      lastUnsortedIndex--
    ) {
      // sort ignoring the sorted partition, we use < because the previous loop has already sorted the lastUnsortedIndex
      for (let j = 0; j < lastUnsortedIndex; j++) {
        if (array[j] > array[j + 1]) {
          this.swap(array, j, j + 1);
        }
      }
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
  console.log('running bubble sort...');
  const array: number[] = [10, 26, -3, 14, 5000, 0, -49];
  BubbleSort.sort(array);
  console.log(array);
})();
