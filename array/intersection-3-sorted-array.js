const arr1 = [1, 5, 10, 20, 30];
const arr2 = [5, 13, 15, 20];
const arr3 = [5, 20];

// Find common elements in three sorted arrays

function findIntersection(arr1, arr2, arr3) {
    const res = [];
    const n1 = arr1.length, n2 = arr2.length, n3 = arr3.length;
    let i = 0, j = 0, k = 0;
    
    while(i < n1 && j < n2 && k < n3) {
        if (arr1[i] === arr2[j] && arr1[i] === arr3[k]) {
            res.push(arr1[i]);
            i++;
            j++;
            k++;
            
            // remove duplicates in the same array
            while(i < n1 && arr1[i] === arr1[i - 1]) i++;
            while(j < n2 && arr2[j] === arr2[j - 1]) j++;
            while(k , n3 && arr3[k] === arr3[k -1]) k++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr3[k]) {
            j++;
        } else {
            k++;
        }
    }
    
    return res;
}

console.log(findIntersection(arr1, arr2, arr3));



function findIntersection1(arr1, arr2, arr3) {
  const map = new Map();
  const n1 = arr1.length, n2 = arr2.length, n3 = arr3.length;

  for(let i = 0; i < n1; i++) {
    if (map.has(arr1[i])) {
      map.set(arr1[i], map.get(arr1[i]) + 1)
    } else {
      map.set(arr1[i], 1);
    }
  }

  for(let i = 0; i < n2; i++) {
    if (map.has(arr2[i])) {
      map.set(arr2[i], map.get(arr2[i]) + 1)
    } else {
      map.set(arr2[i], 1);
    }
  }

  for(let i = 0; i < n3; i++) {
    if (map.has(arr3[i])) {
      map.set(arr3[i], map.get(arr3[i]) + 1)
    } else {
      map.set(arr3[i], 1);
    }
  }

  const res = [];
  map.forEach((value, key) => {
    if (value === 3) {
        res.push(key);
    }
  });

  return res;
} 