export const searchResult = (context, search) => {
  fetch('https://api-sneakerx.herokuapp.com/api/products?search=' + search)
          .then(r => r.json())
          .then(response => {
            context.commit('storeResult', {response: response})
          })
}
