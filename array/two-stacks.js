



// implementing two stack starting from the middle
class twoStacks {
  constructor(n) {
    this.stack = new Array(n);
    this.size = n;
    this.top1 = Math.floor(n/2) + 1;
    this.top2 = Math.floor(n/2);
  }

  push1(val) {
    if (this.top1 > 0) {
      this.top1--;
      this.stack[this.top1] = val;
      console.log(this.top1, val, ' stack 1');
    } else {
      console.log('stack overflow in stack 1 =', val)
    }
  }

  push2(val) {
    if (this.top2 < this.size - 1) {
      this.top2++;
      this.stack[this.top2] = val;
      console.log(this.top2, val, ' stack 2');

    } else {
      console.log('stack overflow in stack 2 =', val)
    }
  }

  pop1() {
    if (this.top1 <= (this.size / 2)) {
      const val = this.stack[this.top1];;
      this.top1++;
      return val;
    } else {
      console.log('stack is empty')
    }
  }

  pop2() {
    if (this.top2 >= Math.floor(this.size / 2) + 1) {
      const val = this.stack[this.top2];
      this.top2--;
      return val;
    } else {
      console.log('stack is empty')
    }
  }

}

let ts = new twoStacks(5); 
ts.push1(5); 
ts.push2(10); 
ts.push2(15); 
ts.push1(11); 
ts.push2(7);
console.log("Popped element from stack1 is "
  + " : " +  ts.pop1()); 
ts.push2(40); 
console.log("Popped element from stack2 is "
  + ": " +  ts.pop2());




