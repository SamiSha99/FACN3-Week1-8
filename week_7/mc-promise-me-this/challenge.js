const https = require('https')

const pokeUrl = pokemon => `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
const pikaUrl = pokeUrl('pikachu')

// const myApiCall = (url, callback) => {
//   https
//     .get(url, resp => {
//       let data = ''
//       resp.on('data', chunk => {
//         data += chunk
//       })
//       resp.on('end', () => {
//         try {
//           callback(null, JSON.parse(data))
//         } catch (e) {
//           callback('It dun broked')
//         }
//       })
//     })
//     .on('error', err => {
//       callback(err.message)
//     })
// }

const myPromiseApi = url => {
  return new Promise((resolve, reject) => {
    https
      .get(url, resp => {
        let data = ''
        resp.on('data', chunk => {
          data += chunk
        })
        resp.on('end', () => {
          try {
            resolve(JSON.parse(data))
          } catch (e) {
            reject('Resolve machine broke')
            console.log("Understandable have a great day!")
          }
        })
      })
      .on('error', err => {
        reject(err.message)
      })
  })
}

myPromiseApi(pikaUrl)
  .then(console.log)
  .catch(console.log)

const pikaPromise = myPromiseApi(pikaUrl)
const itemPromise = jsonData => {
  const itemUrl = jsonData.held_items[0].item.url
  return myPromiseApi(itemUrl)
}
pikaPromise
  .then(itemPromise)
  .then(console.log)
  .catch(console.log)
//Now let's make it a Promise

// const myPromiseApi =

//And call it here...
