// https://bigfrontend.dev/problem/get-DOM-tree-height


/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
 function getHeight(tree) {
        // your code here 
      
        let currHeight = 0;
        if (!tree) {
          return currHeight;
        }
      
        for (let child of tree.children) {
          currHeight = Math.max(getHeight(child), currHeight);
        }
      
        return currHeight + 1;
      }
      
      const exampleDiv = document.createElement('div');
      exampleDiv.innerHTML = `
      <div>
        <div>
          <div>
            <div>
               <div>
                  <div>
                      <div>
                         <span>Wow!</span>
                      </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
        <div>
          <span>World!</span>
          <div>
            <div>
               <div>
                  <div>
                     <div>
                        <div>
                           <div>
                            <span>Wow!<p></p></span>
                          </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>`;
      
      console.log(getHeight(exampleDiv));
      