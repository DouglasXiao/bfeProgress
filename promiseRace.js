// https://bigfrontend.dev/problem/implement-Promise-race


/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
 function race(promises) {
        // your code here
        return new Promise((resolve, reject) => {
          promises.forEach(promise => {
            promise.then(resolve, reject);
          });
        });
      }