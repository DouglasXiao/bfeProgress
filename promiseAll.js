// https://bigfrontend.dev/problem/implement-Promise-all


/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
 function all(promises) {
        // your code here
        return new Promise((resolve, reject) => {
          const res = [];
      
          if (promises.length === 0) {
            resolve(res);
            return;
          }
      
          let cont = promises.length;
      
          promises.forEach(promise => {
            Promise.resolve(promise).then((value) => {
              res.push(value);
              cont--;
      
              if (cont === 0) {
                resolve(res);
              }
            }, reject);
          });
      
          // resolve(res);
        });
      }
      