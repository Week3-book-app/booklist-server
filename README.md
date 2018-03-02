Books App 
#Author: Mikayla and Haron Yunis

#Version: 1.0.0 (increment the patch/fix version number up if you make more commits past your first submission)
#Overview
This product is designed to give users a consistent reading and navigation experience across mobile devices, with content ordered alphebetically by book name with details to each book.

#Getting Started
The user would need to
Create the files needed for books app project. Create a package.json to hold all of our requirments. Add a .gitignore and and .eslintc.json to catch our errors. Create a server.js to handle our request to our sql database. Brought in all required packages and store them in varibales. Open our listening port which is port localhost3000 in testing and our heroku deployment enviroment in our Heroku.

#Architecture

Change Log 02-27-2018 - Today we setup up our packgae.json. In our working directory we npm init to create our package.json. Installed Express. next we established our enviroment variables. DataBase_URl equals our postgres SQL database and Client_URL equals our lcoalhost3000. Next we brought in our varibles in our server.js and set cors() origin to true. Finally to set up a testing route ot test our connection. Setting 


Change Log 02-28-2018 - Set up our Heroku development enviorment. Create our database in porstgres and pg pushed it to Heroku. Create our .get() in our server to listen to our front and request of fetching all books. We then wrote our queries to our database. Either grabbing all the books or some of the books base on id, author name or image_url.


Change Log 03-1-2018 - Added an endpoint for a GET request to /api/v1/books/:id.
This should allow the client to make a request for a singular book, which returns the details of that record from our DB. Next we added a static create method which job is to create new books the user wants to add. Coming from the form are titles, author names, isbn, img-urls and description. 


Change Log 3-2-2018 - Add a new endpoint which is connected to a button that appears alongside any book forwarding the user to a detailed look at the book. Here we quersy from our databse the image_url as well as the description.


#Credits
We used Express library. A Postgres database and SQL to query our database. 

