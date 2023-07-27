TOKOPEDIA PLAY

Database Structure

The database consists of 3 end-points:
- Video : Contains details about the thumbnail video which includes VideoID and Thumbnail Image Url.

- Product : Contains details about the product list which includes ProductID, Product Link, Title, and Price of the product.

- Comment : Contains details about the comment list which includes username, comment, and timestamp.


API Structure
The API is a RESTful API with endpoints for creating dan retrieving, Videos, Products, and Comments.


1. Video
GET /videos getAllVideo (To Get All Video)

Response:
```
[
    {
        "videoID": 0,
        "imgURL": "string",
        "_id": "ObjectId",
    },
    ...
]
```

POST /add-video addVideo (To Create a New Video)

Request:
```
{
    "videoID": 0,
    "imgURL": "string",
    "_id": "ObjectId",
}
```

Response:
```
{
    message: "Video successfully added."
}
```

2. Video
GET /product getAllProduct (To Get All Product)

Response:
```
[
    {
        "productID": 0,
        "url": "string",
        "title": "string",
        "price": "string",
        "_id": "ObjectId",
    },
    ...
]
```

POST /add-product addProduct (To Create a New Product)

Request:
```
{
    "productID": 0,
    "url": "string",
    "title": "string",
    "price": "string",
    "_id": "ObjectId",
}
```

Response:
```
{
    message: "Your Product successfully added."
}
```

3. Comment
GET /comment getAllComment (To Get All Comment)

Response:
```
[
    {
        "username": "string",
        "comment": "string",
        "timestamp": 0,
        "_id": "ObjectId",
    },
    ...
]
```

POST /add-comment addComment (To Create a New Comment)

Request:
```
{
       "username": "string",
        "comment": "string",
        "timestamp": 0,
        "_id": "ObjectId",
}
```

Response:
```
{
    message: "Your Comment successfully added."
}
```

How To Run Locally
please follow these steps to run the API locally:

1. Clone this repository
2. Point the cmd to the project directory file ( cd project-directory )
3. Install the necessary dependencies ( npm install )
4. Set up your .env file into: (DATABASE_URL = your_mongodb_url)
5. Replace your_mongodb_url with yours
6. Run the server following: (npm start)
7. Open your local host http://localhost:3000/
