/**
 * Iteration vs Recursion
 * Iteration: looping through a set of data
 * Recursion: calling a function from within itself
 *
 * Recursive functions:
 * - need a base case/ breaking condition
 * - without a base case, it will saturate the call stack and cause a stack overflow error
 * - the iterative version of a recursive function is usually more efficient as it uses less memory due to not having to store function calls on the call stack
 */

class RecursionVsIteration {
  public static iterativeFactorial(num: number): number {
    if (num === 0) return 1;

    let factorial = 1;

    for (let i = 1; i < num; i++) {
      factorial *= i;
    }

    return factorial;
  }

  // 1! = 1 * 0! = 1
  // 2! = 2 * 1 = 2 * 1!
  // 3! = 3 * 2 * 1 = 3 * 2!
  // n! = n * (n - 1)!

  /**
   * In this recursive function, the function gets put onto the call stack as it waits for the recursive call to return.
   * recursiveFactorial(3), recursiveFactorial(2), recursiveFactorial(1), then recursiveFactorial(0) which returns 1
   */
  public static recursiveFactorial(num: number): number {
    if (num === 1) return 1;

    return num * this.recursiveFactorial(num - 1);
  }
}
