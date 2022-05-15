class MyPromise {
        constructor(executor) {
          // your code here
          this.initValue();
          this.initBind();
      
          try {
            executor(this._resolve, this._reject);
          } catch (e) {
            this._reject(e);
          }
        }
      
        initValue() {
          this.promiseResult = null;
          this.promiseState = "pending";
          this.onFulfilledCallbacks = [];
          this.onRejectedCallbacks = [];
        }
      
        initBind() {
          this._resolve = this._resolve.bind(this);
          this._reject = this._reject.bind(this);
        }
        
        then(onFulfilled, onRejected) {
          // your code here
          onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
          onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason};
      
          var thenPromise = new MyPromise((resolve, reject) => {
            const resolvePromise = cb => {
              setTimeout(() => {
                try {
                  const x = cb(this.promiseResult);
                  if (x === thenPromise) {
                    throw new Error("cannot return yourself");
                  }
                  if (x instanceof MyPromise) {
                    x.then(resolve, reject);
                  } else {
                    resolve(x);
                  }
                } catch (err) {
                  reject(err);
                  throw new Error(err);
                }
              });
            };
      
            if (this.promiseState === 'fulfilled') {
              resolvePromise(onFulfilled);
            } else if (this.promiseState === 'rejected') {
              resolvePromise(onRejected);
            } else if (this.promiseState === 'pending') {
              this.onFulfilledCallbacks.push(resolvePromise.bind(this, onFulfilled));
              this.onRejectedCallbacks.push(resolvePromise.bind(this, onRejected));
            }
          });
      
          return thenPromise;
        }
        
        catch(onRejected) {
          // your code here
          return this.then(undefined, onRejected);
        }
      
        _resolve(value) {
          if (this.promiseState !== "pending") {
            return;
          }
          this.promiseState = "fulfilled";
          this.promiseResult = value;
      
          while (this.onFulfilledCallbacks.length) {
            this.onFulfilledCallbacks.shift()(this.promiseResult);
          }
        }
      
        _reject(reason) {
          if (this.promiseState !== "pending") {
            return;
          }
          this.promiseState = "rejected";
          this.promiseResult = reason;
      
          while (this.onRejectedCallbacks.length) {
            this.onRejectedCallbacks.shift()(this.promiseResult);
          }
        }
      
        static resolve(value) {
          // your code here
          if (value instanceof MyPromise) {
            return value;
          }
      
          return new MyPromise((resolve) => {
            resolve(value);
          });
        }
      
        static reject(value) {
          // your code here
      
          return new MyPromise((_, reject) => {
            reject(value);
          });
        }
      }
      