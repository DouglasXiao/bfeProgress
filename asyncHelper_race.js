// https://bigfrontend.dev/problem/implement-async-helper-race

/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
 function race(funcs){
        // your code here
      
        let finished = false;
        return function(callback) {
          const callbackWrapper = (...arguments) => {
            if (finished) return;
            callback(...arguments);
            finished = true;
          };
      
          for (const func of funcs) {
            func(callbackWrapper);
          }
        }
      }