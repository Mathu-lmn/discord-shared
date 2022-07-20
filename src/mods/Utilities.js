const Logging = require('./Logging');
const logger = new Logging.Logger(bool_fs=false);

/**
 * Sort elements inside arrays in a matrix.
 * @param {Array} - list 2D Arrays/Matrix to sort
 * @param  {comparatorFunction} - Comparator function. (Optional)
 * @return {null}
 */
function sortMatrixElems(list, comparatorFunction=null) {
    list.forEach(sub_list => {
        comparatorFunction == null ? sub_list.sort()
                                   : sub_list.sort(comparatorFunction);
    });
}

/**
 * Kill program with error message and error code.
 * @param  {Number} no  - Error code to return after killing the program.
 * @param  {String} msg - Message to log when killing the program.
 * @return {null}
 */
function killMyself(no, msg) {
    const Process = require('process'); // For Process.exit()

    no != 0 ? logger.logOutput("ERR", msg)
            : logger.logOutput("SUCC", msg);

    Process.exit(no);
}

/**
 * Recurse until uncommon elements are eliminated in an array.
 * @param {Array}    list  - 2D Array/Matrix to recurse and eliminate uncommons
 * @param {Array}    accum - Accumulation list. An array with common elements
 * @param {Boolean}  sort  - Sort if the 2D arrays are not sorted
 * @param {Function} comparatorFunction - Comparison function for sort()
 * @return {Array}         - Return an array with common elements (Accumulation list)
 */
function battleRoyale(list, accum, sort=false, comparatorFunction=null) {
    if (sort)
        sortMatrixElems(list, comparatorFunction);

    let pivot = list[0][0];
    let is_common = true; // Checks if the element is common among the arrays
    let is_undefined = false; // Checks if array is undefined
    let tmp;


    /* Test the list whether it's common or not */
    for (let i = 1; i < list.length; ++i) {
        for (let j = 0; j < list[i].length; ++j) {
            if (pivot !== list[i][j])
                is_common = false;
            else {
                is_common = true;
                break;
            }
        }
    }

    /* Push it to accum if common */
    if (is_common === true) {
        accum.push(pivot);
    }

    /* Shift everything by 1 and if an empty list found,
     * stop recursion */
    for (let i = 0; i < list.length; ++i) {
        tmp = list[i].shift();
        if (tmp == undefined) {
            is_undefined = true;
            break;
        }
    }

    /* Recurse the function */
    if (is_undefined == false)
        battleRoyale(list, accum);
}

module.exports = {
    sortMatrixElems: sortMatrixElems,
    killMyself: killMyself,
    battleRoyale: battleRoyale
};
