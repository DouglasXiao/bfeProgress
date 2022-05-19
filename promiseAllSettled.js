// https://bigfrontend.dev/problem/implement-Promise-allSettled


/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
 function allSettled(promises) {
        // your code here
      
        return new Promise(resolve => {
          const res = [];
          let pendingLength = promises.length;
      
          if (pendingLength === 0) {
            resolve(res);
            return;
          }
      
          promises.forEach((promise, index) => {
            Promise.resolve(promise).then(value => {
              res[index] = { status: "fulfilled", value };
              pendingLength--;
            }).catch(reason => {
              res[index] = { status: "rejected", reason };
              pendingLength--;
            }).finally(() => {
              if (pendingLength === 0) {
                resolve(res);
              }
            });
          });
        });
      }

      // Note: index is very important for the sequence, do not use push!
