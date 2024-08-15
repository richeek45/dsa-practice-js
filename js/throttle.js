// https://medium.com/@bs903944/debounce-and-throttling-what-they-are-and-when-to-use-them-eadd272fe0be

function updateLayout() {
  // Update layout logic
}

function throttle(func, interval) {
  let isRunning = false;
  return function(...args) {
    if (!isRunning) {
      isRunning = true;
      func.apply(this, args);
      setTimeout(() => {
          isRunning = false;
      }, interval)
    }
  }
}

const throttleUpdateLayout = throttle(updateLayout, 1000);

window.addEventListener("resize", () => {
  throttleUpdateLayout();
})