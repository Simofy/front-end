"use strict"

window.onload = function () {
  // First approach
  /**
   * Boolean variable ( false OR true )
   */
  let collapsed = false;
  function Collapse1() {
    /**
     * if (condition) {
     *  logic block
     * } else {
     *  if condition is false OR 0 OR null OR undefined
     * }
     */
    if (collapsed == true) {
      document.getElementById('container').style.height = '200px';
    } else {
      document.getElementById('container').style.height = 0;
    }
    /**
     * ! is NOT operator, it swaps TRUE to FALSE, or NUMBER to 0
     */
    collapsed = !collapsed;
  }
  // End first approach

  // Second approach
  let state = 0;
  function Collapse2() {
    if (state == 0) {
      document.getElementById('container').style.height = 0;
    }
    if (state == 1) {
      document.getElementById('container').style.height = '200px';
    }
    /**
     * The modulus operator ( % ) returns the division remainder
     * Example 97 % 7
     * 97 / 7 = 13.85714...
     * 97 - 7 * 13 = 6
     * 
     * 97 % 7 = 6
     */
    state = (state + 1) % 2;
  }

  // Third approach
  /**
   * More advanced
   * Using #container elements attribute as variable,
   * in this way I can communicate with other Func
   * in what state is our element and there is no need
   * to manage variables across functions.
   */
  function Collapse3() {
    /**
     * If our function/variable hierarchy allows us to
     * store 'collapsable' variable outside function
     * we can make this function almost one liner
     * see Collapse4
     */
    const collapsable = document.getElementById('container');
    /**
     * NOTE: you can see attribute change in DOM tree ( devTools and inspect element #container )
     */
    const state = !collapsable.toggleAttribute('data-collapsed');
    /**
     * Ternary statement https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
     */
    collapsable.style.height = state ? '200px' : 0;
    ;
  }

  // Fourth approach
  const collapsableGlobal = document.getElementById('container');
  function Collapse4() {
    collapsableGlobal.style.height =
      !collapsableGlobal.toggleAttribute('data-collapsed') ? '200px' : 0;
  }

  document.getElementById('buttonCollapse').onclick = Collapse1;

  /**
   * The '.style.height =' should be replaced with class
   * changing inline style might give undesired results
   * as to maintaining style or adding more additional style
   */
}