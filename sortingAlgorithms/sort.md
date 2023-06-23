## Stable vs Unstable Sort

- Unstable Sort: Relative ordering of duplicate items is not preserved
- Stable Sort: Relative ordering of duplicate items is preserved

Note: Stable Sorts are preferred especially when sorting objects on multiple fields

## Stable Sorts

- Bubble Sort (because we are sorting based on `j < i` as opposed to `j <= i`)

## Unstable Sort

- Selection Sort

### Bubble Sort

### Selection Sort

- In place algorithm
  - It doesn't use any extra memory. it's okay to use extra fields as long as the extra memory being used doesn't depend on the number of items being sorted.
- O(n2) time complexity (Quadratic)
- Generally performs better than bubble sort because there is less swapping going on
- Unstable sort algorithm
