

### Question 
[link](https://leetcode.com/problems/count-the-number-of-complete-components/)

### Solution
#### Javascript
```js
var countCompleteComponents = function (n, edges) {
    let adj = new Array(n).fill(0).map(() => []);
    let result = 0;
    let visit = new Set();

    for (const [v1, v2] of edges) {
        adj[v1].push(v2);
        adj[v2].push(v1);
    }

    console.log("adj ----> ", adj)

    const dfs = (v, res) => {
        if (visit.has(v)) {
            return;
        }

        visit.add(v);
        res.push(v);
        for (let k of adj[v]) {
            dfs(k, res);
        }
    }

    for (let i = 0; i < n; i++) {
        if (visit.has(i)) {
            continue;
        }

        let component = [];
        dfs(i, component);
        let flag = true;

        for (let j of component) {
            if (component.length - 1 !== adj[j].length) {
                flag = false;
                break;
            }
        }

        if (flag) {
            result += 1;
        }

    }
    return result;
};

console.log("Mehlklll", countCompleteComponents(6, [[0, 1], [0, 2], [1, 2], [3, 4]]))
```