// Flatten a nested object

const data = {
  "Fruits": {
    "Citrus": ["Orange", "Lemon"],
    "Berries": ["Strawberry", "Blueberry"]
  },
  "Vegetables": ["Carrot", "Broccoli"]
}

function flatten(data) {
    let res = []; 
    if (!Array.isArray(data)) {
        res.push(...Object.keys(data));
    }
    Object.keys(data).forEach(v => {
        if (Array.isArray(data[v])) {
            res.push(...flatten(data[v]));
        } else if (typeof data[v] === "object") {
            res.push(...flatten(data[v]));
        } else {
            res.push(data[v]);
        }
    })
    return res;
}

const res = flatten(data);
console.log(res);