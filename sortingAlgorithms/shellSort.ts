class ShellSort {
  public static sort(array: number[]) {
    const startingGap = Math.floor(array.length / 2);

    // on each iteration, we reduce the gap by half
    for (let gap = startingGap; gap >= 1; gap = Math.floor(gap / 2)) {
      let newElement = array[array.length];
      let j;

      for (j = gap; j < array.length; j++) {
        newElement = array[j];

        let counter = j;

        // when counter = gap, we've hit the front of the array
        while (counter >= gap && newElement < array[counter - gap]) {
          array[counter] = array[counter - gap];
          counter = counter - gap;
        }

        array[counter] = newElement;
      }
    }
  }
}

(() => {
  console.log('running shell sort...');
  const array1: number[] = [10, 26, -3, 14, 5000, 0, -49];
  ShellSort.sort(array1);
  console.log(array1);
})();
