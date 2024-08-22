const arr1 = [1, 3, 4, 5, 7];
const arr2 = [2, 3, 5, 6];


function merge(arr1, arr2) {
    const res = [];
    const n1 = arr1.length;
    const n2 = arr2.length;
    let i = 0, j = 0, index = 0;
    
    while(i < n1 && j < n2) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i++]);
        } else if (arr1[i] > arr2[j]) {
            res.push(arr2[j++]);
        } else {
            res.push(arr1[i]);
            i++;
            j++;
        }
        
        index++;
    }
    
    while(i < n1) {
        res.push(arr1[i++]);
    }
    while(j < n2) {
        res.push(arr2[j++]);
    }
    
    return res;
}

function intersection(arr1, arr2) {
  const res = [];
  const n1 = arr1.length;
  const n2 = arr2.length;
  let i = 0, j = 0, index = 0;
  
  while(i < n1 && j < n2) {
      if (arr1[i] < arr2[j]) {
          i++;
      } else if (arr1[i] > arr2[j]) {
          j++;
      } else {
          res.push(arr1[i]);
          i++;
          j++;
      }
      
      index++;
  }

  return res;
}

console.log(merge(arr1, arr2));

console.log(intersection(arr1, arr2));
