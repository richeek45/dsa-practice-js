function searchHandler(query) {
  // get query results
  console.log(query);
} 

function debounce(func, delay) {
  let timer;
  return function(...args) {
      clearTimeout(timer);
      
      timer = setTimeout(() => {
          func.apply(this, args);
      }, delay)
  }
}

const debouncedSearchHandler = debounce(searchHandler, 500);

searchBar.addEventListener("click", (e) => {
  const query = e.target.value;
  debouncedSearchHandler(query);
})