## Stable vs Unstable Sort

- Unstable Sort: Relative ordering of duplicate items is not preserved
- Stable Sort: Relative ordering of duplicate items is preserved

Note: Stable Sorts are preferred especially when sorting objects on multiple fields

## Stable Sorts

- Bubble Sort (because we are sorting based on `j < i` as opposed to `j <= i`)
- Insertion Sort

## Unstable Sort

- Selection Sort
- Shell Sort

### Bubble Sort

- In place algorithm, i.e. does not use extra memory. It uses extra fields but the extra memory being used does not depend on the number of items being sorted.
- O(n2) time complexity (Quadratic)
- Stable sort algorithm
- Sorted partition grows from right to left
- Logic works from the start of the array, swapping the elements if it is larger than the one next to it

### Selection Sort

- In place algorithm, i.e. does not use extra memory. It uses extra fields but the extra memory being used does not depend on the number of items being sorted.
- O(n2) time complexity (Quadratic)
- Generally performs better than bubble sort because there is less swapping going on
- Unstable sort algorithm
- Sorted partition grows from right to left
- It loops through the array from the left, selecting the largest element in the unsorted partition and swapping it with the last item in the unsorted partition

### Insertion Sort

- In place algorithm, i.e. does not use extra memory. It uses extra fields but the extra memory being used does not depend on the number of items being sorted.
- O(n2) time complexity (Quadratic)
- Stable sort algorithm
- Sorted partition grows from left to right
- It loops through the array from the left, assuming that the first element has been sorted. Taking the first element in the unsorted partition as the newElement, it loops through the sorted partition from right to left. If the newElement value is less than the value at the counter's index, we shift the element to the right. This continues until the correct position is found and we insert the newElement in that position.

### Shell Sort

- In place algorithm
- Time complexity depends on the gap at the pre-sorting stage. Worst case would be O(n2) time complexity
- Performs better than insertion sort as it does not require as much shifting
- Unstable sort algorithm because during the pre-sorting stage, relative positions of duplicate values could be swapped depending on which elements they are compared to
- We can apply Shell Sort to Bubble Sort as well, by pre-bubble-sorting with a larger gap
