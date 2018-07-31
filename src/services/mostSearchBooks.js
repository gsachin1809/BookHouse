import { config } from '../Config/config'

export function mostSearchBooks() {
  return new Promise((resolve , reject ) => {
    fetch(config.API.MOST_SEARCH_BOOKS)
    .then(res => res.json())
    .then((result) => {
        if(result.code == 200){
            resolve(result)
        }else{
          reject(result)
        }
      },
      (error) => {
        reject(error)
      })
  });
}
