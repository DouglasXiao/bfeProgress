// https://bigfrontend.dev/problem/create-a-counter-object



function createCounter(): {count: number } {
        // your code here
        let currentVal = -1;
      
        return {
          get count() {
            currentVal++;
            return currentVal;
          }
        }
      }
      
      const counter = createCounter()
      console.log(counter.count);
      console.log(counter.count);
      console.log(counter.count);
      
      counter.count = 100
      console.log(counter.count);
      