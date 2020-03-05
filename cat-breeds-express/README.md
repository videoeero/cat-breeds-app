# Cat Breed API backend with Express & MongoDB

## Details

An API to get data about different cat breeds. Original data gotten from here: https://api.thecatapi.com/v1/breeds

## Endpoints

| Method | Path               | Parameters | Description                              |
| ------ | ------------------ | ---------- | ---------------------------------------- |
| GET    | api/v1/            | -          | Returns all cat breeds in database       |
| GET    | api/v1/:id         | -          | Returns a cat breed with given id        |
| GET    | api/v1/breed/:slug | :slug      | Returns a cat breed with given slug/name |
