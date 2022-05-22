// https://bigfrontend.dev/problem/implement-Promise-any


/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
 function any(promises) {
        // your code here
      
        return new Promise((resolve, reject) => {
          let pendingPromises = promises.length;
          const res = [];
      
          if (pendingPromises === 0) {
            reject(new AggregateError("No promises found"));
          }
      
          promises.forEach((promise, index) => {
            Promise.resolve(promise).then(value => {
              resolve(value);
            }).catch(reason => {
              res[index] = reason;
              pendingPromises--;
      
              if (pendingPromises === 0) {
                reject(new AggregateError(
                  "No Promise in Promise.any was resolved",
                  res
                ))
              }
            })
          });
        });
      }
