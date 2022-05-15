// https://bigfrontend.dev/problem/create-a-sum

/**
 * @param {number} num
 */

function sum(num) {
        const func = function (b) {
                if (b) {
                return sum(num + b);
                }
                return num;
        }

        func.toString = () => num;
        return func;
}

console.log(sum(1)(2)(3) == 6);
      