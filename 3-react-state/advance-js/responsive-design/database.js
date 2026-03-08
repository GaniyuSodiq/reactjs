/** 

🍎🍎🍎 Welcome to SQL

The world is full of data. Every app that you use is full of data. 
On Khan Academy, we store data about users and badges and progress. 
On Facebook they store data about who you are, who your friends are, and what they're posting. 
On Bank of America they store data about how much money you have and what accounts that's in. 
How do these apps store data? 
Well, they use a database which is a program that helps store data and provides functionality for adding, modifying, and querying that data, and doing that all fast. 
Databases come in many forms, but a really popular type of database is called a relational database. 
It stores each kind of data in a table, which is kind of like storing data in a spreadsheet. 
A row represents an item, and a column represents properties about that item. 
For example, to store data about Khan Academy users, we'd have a users table with a row for each user and columns for properties like their nickname and location. 
Relational databases make it particularly easy to form relationships between tables. 
For example, in order to store Khan Academy users and their badges, we might have a users table and a badges table, and then a user badges table to remember which users earned which badges, just by mapping user IDs to badge IDs. 
That's a more efficient form of storage than having to repeat everything about the user and everything about the badge in the user badges table. 
Most database come with a query language to interact with the database. 
SQL is a language designed entirely for accessing databases and is the most popular of them. 
With SQL, we can create tables, change data, get back the data we're interested in. 
Like if we wanna find out which users joined in the last week or which users have a particular badge. 
That's what we're going to teach here. 
And you'll actually get to try out SQL here in the browser using SQL Lite, a particular implementation of it. 
You won't be able to write the whole app here, but when you're done learning SQL, you'll have a much better understanding of how data is stored in the apps that you use and be able to use SQL if you ever build an app.


*/


/**

🍎🍎🍎 Creating a table and inserting data

Welcome to my database. It has no data in it yet because I want to build it up with you. 

What sort of data should we store in our first table? Let's start with a grocery list, which you've probably used in real life. 
I'm pasting an example list which has three delicious items and how much we want to buy of each of them. Our first bit of sequel will be the command to make the table to store this list. Alright. 

CREATE TABLE in all caps and then the name of the table "groceries." And then ( ); We see an error pop up because the sequel interpreter expects to see the column names inside these parenthesis. 

What column should we have in order to describe each item on our list? Well first we need a name for the item, which I'll call "name" and we need to follow that with a data type. We have a few options. 
Let's go for TEXT. 

If we look on the right hand side, we can see our new table is listed with one column. 
But we also need to specify how many of each thing to buy, like our four bananas. 
So let's add and quantity column as well. And this will always have a whole number so let's use an integer for that data type. And now we can see that new column listed in our table. 
That looks pretty good if we're thinking about what data we have in this grocery list. But we're missing something that we need in databases. A unique identifier for each row. 

We almost always need unique IDs for each row in a database because we need a way to identify rows later when we're updating or deleting them and not be dependent on other columns because those could change. We typically specify this ID column first. So I'm moving my cursor before a name. I'll call this column "id," which that's standard. 
And then for the data type, I'll have to write this phrase, "INTEGER PRIMARY KEY" which signals to the database that it should treat this as the row identifier and that each row must have a unique value for this column. Okay. 
Now we have our groceries table with three columns in it. It's empty though so let's put some data in it. 
Write "INSERT INTO" and then the table name "groceries" then "VALUES" and then ( and here we start listing the column values in the order that we declared the columns. 

The first column was id so I'll put "1" since we haven't used that id yet. The second column is name so I'll write "bananas" and third column was quantity. So I'll write "4." Do you see how the schema update on the right? 

It now says that there's one row in the groceries table. 

So our instruction worked. Let's add the next two items and just doing the same thing. 

"INSERT INTO groceries" "VALUES (2, "Peanut Butter" and just one of those cause if I say too much and "INSERT INTO groceries VALUES" and id "3, Dark chocolate bars," have to be dark. 
Milk chocolate is not even chocolate. 
And we'll get two of those. Okay. 

So it says three rows but to really see that the database actually contains data you can click the table name on the right. This will insert a select statement in your code. 

And don't worry too much about this now because we'll get to it in the next video. If you want, you can pause the talk through and try clicking the table name yourself to see what happens. 
    
That's it, that's all we needed to create our first table and add data to it. 
It's pretty cool, huh? In the next section, we'll see how to get the data back out of the table in more interesting ways.



CREATE TABLE groceries (id INTEGER PRIMARY KEY, name TEXT, quantity INTEGER );

INSERT INTO groceries VALUES (1, "Bananas", 4);
INSERT INTO groceries VALUES (2, "Peanut Butter", 1);
INSERT INTO groceries VALUES (3, "Dark chocolate bars", 2);
SELECT * FROM groceries;


 */

/**
CREATE TABLE mybook (id INTEGER PRIMARY KEY, name TEXT, rating INTEGER);

INSERT INTO mybook VALUES (1, "Al-Quran", 5.0);
INSERT INTO mybook VALUES (2, "16 laws of high flying student", 4.2);
INSERT INTO mybook VALUES (3, "Coding notes", 4.6);

SELECT * FROM mybook


🍎🍎🍎 Querying the table

We're back with our groceries table but we've expanded on it a bit. 
It now has a column for which aisle number we can find the item at the supermarket plus we've added a few more items. 
You can really see the power of SQL in the different ways that you can retrieve your data from your database. 
This is also where it can get a bit tricky. 
To start off simple, how would we retrieve all the rows from our table? 
To form any query we write select, and then which columns we're interested in, like the name, and then from and the table name that we're selecting from. 
We can see a list of the groceries on the right under that results section. 
What if we want all the column names? 
We can just replace name with star and that was also the query that got inserted when you clicked the table name which you might remember from the first talk through. 
This list is out of order, though. 
If we went from top to bottom at the store with this list we'd have to keep changing aisles. 
We'd rather have it ordered by aisle so that we can be more efficient at the store. 
To do that we can just add an order by clause to our query, specifying which column we want to order by. 
That's better, now we can get our ingredients faster. 
To be even more efficient, my brother and I like to shop together and split the store so that I shop in half the store, he shops in the other half and we meet at the checkout. 
There are twelve aisles at this grocery store so for my list I just want to know which items are in aisles 6 through 12. 
Any time we want to filter results out we can use a where clause for this and specify the column name and then what we want to compare it to. 
In this case I used a greater than operator but there's lots of different comparison operators depending on what it is you were trying to filter by. 
Great, so now I know exactly what items I'm going to get, I'm going to be really efficent and you've learned a few ways to use SQL to query. Stay tuned to find out even more ways you can select.

CREATE TABLE groceries (id INTEGER PRIMARY KEY, name TEXT, quantity INTEGER, aisle INTEGER);
INSERT INTO groceries VALUES (1, "Bananas", 4, 7);
INSERT INTO groceries VALUES(2, "Peanut Butter", 1, 2);
INSERT INTO groceries VALUES(3, "Dark Chocolate Bars", 2, 2);
INSERT INTO groceries VALUES(4, "Ice cream", 1, 12);
INSERT INTO groceries VALUES(5, "Cherries", 6, 2);
INSERT INTO groceries VALUES(6, "Chocolate syrup", 1, 4);

SELECT * FROM groceries WHERE aisle > 5 ORDER BY aisle;




Filter recent movies
Now, add a second query after the first, that retrieves only the movies that were released in the year 2000 or later, not before. Sort the results so that the earlier movies are listed first. You should have 2 SELECT statements after this step.

CREATE TABLE movies (id INTEGER PRIMARY KEY, name TEXT, release_year INTEGER);
INSERT INTO movies VALUES (1, "Avatar", 2009);
INSERT INTO movies VALUES (2, "Titanic", 1997);
INSERT INTO movies VALUES (3, "Star Wars: Episode IV - A New Hope", 1977);
INSERT INTO movies VALUES (4, "Shrek 2", 2004);
INSERT INTO movies VALUES (5, "The Lion King", 1994);
INSERT INTO movies VALUES (6, "Disney's Up", 2009);
 
SELECT * FROM movies;
SELECT * FROM movies WHERE release_year > 2000 ORDER BY release_year; 

*/



/**

🍎🍎🍎 Aggregating data

We're back with our grocery list. 
I can see that it has six rows in it, but I can also see that we need to buy more than one of each item, like our bananas. 
So I'm not sure offhand how many items we'll end up buying total. 
And I'd like to know that total number so that when we're cashing out, we can just do a quick check to see if we have the right number of items in our cart. 
Well to do that in SQL we can use what's called an aggregate function. 
An aggregate function is useful for things like getting the maximum, minimum, sum and average of values in our database. 
In this example, to get the total number of items, we'll start with SELECT. Then the name of the aggregate function we'll be using, SUM. 
Then the name of the column we want. And then FROM, the name of the table we're selecting from. 
Tah-dah! So you can see on the right that the SUM is 15 so we should have 15 items in our cart if we got everything correctly. And notice if I go up here and change the number of bananas because, you know, I'm gonna invite my monkey friends over for a jungle party, we can see the SUM increase in real time and get bigger and bigger. 
So we know that we're now gonna need 67 items in our cart. Now we can easily try out other aggregate functions here. 
Cause SUM's not the only one. So if we wanted to know what is the most that we'll be buying of any one item, then we could use MAX. See, 56, those are obviously our bananas. 
But this information isn't as useful for this case. 
Let's go back to SUM. Okay. Now what if we wanted to make sure we had the right number of items after each aisle? Well we can do that in SQL using the GROUP BY clause. 
We add it to the end of a query, specifying the column name to GROUP BY "aisle." Okay, so now we can see that in one aisle we have nine, in another we have one, but I don't actually know which aisle we're getting each of those in. So what we can do there is just add "aisle" to the beginning of this SELECT. 
So there you can see it, okay. So we're gonna get nine items in aisle two, one item in aisle four, 56 in aisle seven, and one in aisle twelve. Awesome. 
Now how did that actually work behind the scenes? 
The SQL engine first did the grouping of the rows based on aisle. So first did this GROUP BY. Then it summed up the quantity in each of those groups. And then, finally, it selected the first aisle value that it saw in each group. And, you know, the aisle value was the same for all of them so we got the aisles back out. 
But we could've also said "name" here and we do see a name for each of the rows. But it's a bit misleading because for some of these aisles there are actually multiple items in that group. But the SQL engine just picked the first item out of it. 
So you really shouldn't be using something different from what you're grouping by cause you might not get a sensible result. 
So let's say "aisle" and now that's an accurate presentation of our data. Okay, so great. 
You've seen aggregate functions. You've seen grouping it by and now you can officially gather useful statistics on your data. Another tool for your SQL toolbox.

CREATE TABLE groceries (id INTEGER PRIMARY KEY, name TEXT, quantity INTEGER, aisle INTEGER);
INSERT INTO groceries VALUES (1, "Bananas", 56, 7);
INSERT INTO groceries VALUES(2, "Peanut Butter", 1, 2);
INSERT INTO groceries VALUES(3, "Dark Chocolate Bars", 2, 2);
INSERT INTO groceries VALUES(4, "Ice cream", 1, 12);
INSERT INTO groceries VALUES(5, "Cherries", 6, 2);
INSERT INTO groceries VALUES(6, "Chocolate syrup", 1, 4);

SELECT aisle, SUM(quantity) FROM groceries GROUP BY aisle;

*/


// 🍎🍎🍎 Project: Design a store database

/**
Create your own store! Your store should sell one type of things, like clothing or bikes, whatever you want your store to specialize in. You should have a table for all the items in your store, and at least 5 columns for the kind of data you think you'd need to store. You should sell at least 15 items, and use select statements to order your items by price and show at least one statistic about the items.


CREATE TABLE items (id INTEGER PRIMARY KEY, name TEXT, type TEXT, quantity INTEGER, price INTEGER);

INSERT INTO items VALUES (1, "smallBag", "garri", 3, 6000);
INSERT INTO items VALUES (2, "bigBag", "garri", 7, 14000);
INSERT INTO items VALUES (3, "smallBag", "lebu", 3, 3000);
INSERT INTO items VALUES (4, "bigBag", "lebu", 7, 7000);
INSERT INTO items VALUES (5, "epoo", "kpaki", 7, 1400); 
INSERT INTO items VALUES (6, "smallBagB", "garri", 3, 60010);
INSERT INTO items VALUES (7, "bigBagB", "garri", 7, 140200);
INSERT INTO items VALUES (8, "smallBagB", "lebu", 3, 30300);
INSERT INTO items VALUES (9, "bigBagB", "lebu", 7, 70500);
INSERT INTO items VALUES (10, "epooB", "kpaki", 7, 13400); 
INSERT INTO items VALUES (11, "smallBagC", "garri", 3, 86000);
INSERT INTO items VALUES (12, "bigBagC", "garri", 7, 145000);
INSERT INTO items VALUES (13, "smallBagC", "lebu", 3, 39000);
INSERT INTO items VALUES (14, "bigBagC", "lebu", 7, 70200);
INSERT INTO items VALUES (15, "epooC", "kpaki", 7, 14090); 

SELECT * FROM items ORDER BY price;

SELECT SUM(price) FROM items;


*/