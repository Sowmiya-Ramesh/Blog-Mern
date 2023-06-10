$BACKEND:
   Inside BE folder =>
   install express (express server) mongoose( to connect mongoDB) dotenv (to hide) multer(to upload images)
   npm init
   npm i nodemon (to listen as we are saving to avoid start everytime)
   1. create index.js file
   2. start node (listen to the port)
   3. add mongo url from the Mongodb and connect it
   4. create folder for Model => sub files based on your requirement (eg: user, post , category)
   5. create folder for Routes => (user, posts, categories, auth)

   6. In models files, 
       6.1 import mongoose and create schemas
       6.2 each key should have the type, required and unique (based on requirements) 
       6.3 add timeStamps to get created at and updatedAt times
       6.4 export the model



$DATABASE:

  How to connect : https://mongoosejs.com/ (refer this)