import { config } from '../Config/config'

export function recommendedBooks() {
  return new Promise((resolve, reject) => {
    fetch(config.API.RECOMMENDED_BOOKS)
      .then(res => res.json())
      .then(
        (result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        }
      )
  })
}
