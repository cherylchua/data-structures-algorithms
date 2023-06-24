## Stable vs Unstable Sort

- Unstable Sort: Relative ordering of duplicate items is not preserved
- Stable Sort: Relative ordering of duplicate items is preserved

Note: Stable Sorts are preferred especially when sorting objects on multiple fields

## Stable Sorts

- Bubble Sort (because we are sorting based on `j < i` as opposed to `j <= i`)
- Insertion Sort

## Unstable Sort

- Selection Sort

### Bubble Sort

- In place algorithm, i.e. does not use extra memory. It uses extra fields but the extra memory being used does not depend on the number of items being sorted.
- O(n2) time complexity (Quadratic)
- Stable sort algorithm
- Sorted partition grows from right to left

### Selection Sort

- In place algorithm, i.e. does not use extra memory. It uses extra fields but the extra memory being used does not depend on the number of items being sorted.
- O(n2) time complexity (Quadratic)
- Generally performs better than bubble sort because there is less swapping going on
- Unstable sort algorithm
- Sorted partition grows from right to left

### Insertion Sort

- In place algorithm, i.e. does not use extra memory. It uses extra fields but the extra memory being used does not depend on the number of items being sorted.
- O(n2) time complexity (Quadratic)
- Stable sort algorithm
- Sorted partition grows from left to right
