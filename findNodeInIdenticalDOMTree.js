// https://bigfrontend.dev/problem/find-corresponding-node-in-two-identical-DOM-tree


/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
 const findCorrespondingNode = (rootA, rootB, target) => {
        // your code here
      
        // Iterative way: BFS
      
        if (rootA === target) {
          return rootB;
        }
      
        const queueA = [rootA];
        const queueB = [rootB];
      
        while (queueA.length) {
          const headChildA = queueA.shift();
          const headChildB = queueB.shift();
      
          if (headChildA === target) {
            return headChildB;
          }
      
          for (let i = 0; i < headChildA.children.length; i++) {
            queueA.push(headChildA.children[i]);
            queueB.push(headChildB.children[i]);
          }
        }
      }


/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
 const findCorrespondingNode = (rootA, rootB, target) => {
        // your code here
      
        // Iterative way: Recusively 
      
        if (rootA === target) {
          return rootB;
        }
      
        for (let i = 0; i < rootA.children.length; i++) {
          const res = findCorrespondingNode(rootA.children[i], rootB.children[i], target);
          if (res) return res;
        }
      }


/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
 const findCorrespondingNode = (rootA, rootB, target) => {
        // your code here
      
        // Iterative way: DFS with Stack
      
        const stack = [[rootA, rootB]];
      
        while (stack.length) {
          const [leftNode, rightNode] = stack.pop();
      
          if (leftNode === target) {
            return rightNode;
          }
      
          for (let i = 0; i < leftNode.children.length; i++) {
            stack.push([leftNode.children[i], rightNode.children[i]]);
          }
        }
      }



/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
        // your code here
      
        // Iterative way: treeWalker
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker
      
        const treeWalkerA = document.createTreeWalker(rootA, NodeFilter.SHOW_ELEMENT);
        const treeWalkerB = document.createTreeWalker(rootB, NodeFilter.SHOW_ELEMENT);
      
        let currentNodeA = treeWalkerA.currentNode;
        let currentNodeB = treeWalkerB.currentNode;
      
        while (currentNodeA) {
          if (currentNodeA === target) {
            return currentNodeB
          }
      
          currentNodeA = treeWalkerA.nextNode();
          currentNodeB = treeWalkerB.nextNode();
        }
      }
      
