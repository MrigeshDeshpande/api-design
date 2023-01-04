# api-design
API development using-node, express &amp; mongoose


node uses commonJS for its module loader.

Using require()-> we can get access to built in and 3rd partyb npm modules

  

There are some differences b/w commonJS and AMD
why not use node for building servers?

->The problem is that configuration and the amount of code you have to write in order to have basic features is pretty overwhelming and at times and difficult. Error prone for sure.
 Express is a framework that sitson top of node and uses the http module to make building serves in node not so hard.

## Express
->Express uses MIDDLEWARE to modify and inspect incoming request
-> From parsing urls to handling auth, middleware makes it easy.
->serve static assets

req-> information about what is trying to access our server
res->gives all types of ways to respond back to client

Express is all routing and middlewares
**MIDDLEWARE**
  

Express uses middleware to modify and inspect the incoming request.
->from parsing urls to handling auth, middleware makes this way
->can also serve static assets (static web server basically )

**MIDDLEWARE** is the backbone of Express. Express is really just a routing and middleware framework.

Middleware is a function with access to the request object, the response object, and the next() function that when called will go to the next middleware.

Middleware can run any code, change the request and response objects, end the request-response cycle, and call the next middleware in the stack.

If a middleware does not call next() or end the cycle, then the server will just hang.

  
There are **5 different types of middleware**

 - 3rd party
   
   
 - Router level

   
   

 - Application level
   
   
 - Error-handling

   
   **Built-in**

-Which ever the type, using middleware is the same.

  

	Error Handling middleware is pretty different 

	->takes 4 argument(err, req,res, next)

	remove the err -> it becomes normal middleware

**keyTakeAway** : characters doesn't count , meaning even if you re-arrange err with next it wont show you error.

&& (err, req,res) || (req,res,err) ->will work as a normal middleware

  

**app.use()** -->it is global middleware

 
when ever a reqest comes in it will run through this stack of middleware in the order we register them

using the .use() method, we can setup application middleware

  

we can use middleware on a route as well passing in as many middleware as we want or an array of middleware its the middleware's job to either call next() or stop the request-response cycle
## Getting RESTful
	

> The modern web is mostly built around REST. the basics are that it
> should be stateless, use HTTP verbs explicitly, expose a directory
> like url pattern for routes, transfoer JSON and or XML.

- module the data first (json)

- design routes to access the resources Following REST->HTTP verbs-->(GET,POST,PUT,DELETE)

	**to** **perform**

(**CREATE,READ,UPDATE,DELETE/DESTROY**)-->(**CRUD**)

  

**GET**-> ask for something

**POST** -> give you something

**PUT** -> update something

**DELETE** -> delete something

  

    app.get('/todos', checkAuth(), function(req, res) {
    
    // auth is good if this runs
    
    });
  
    Functions can return middleware--> or here in this case function itself is a middleware
    
    var options=function(req,res,next)
    {
     next();
    } 
    //or we can code like
    var options=(opts)=>{
    return (req,res,next)
    {
    next()
    }
    }
    //also this just above method is CLOSURE
      

> If you have an error , you can pass it to next() && have another
> middleware catch the error

  

**express.json() && express.urlencoded** 
		-->specifically about POST & PUT request (not for GET /DELETE)
		-->because in both the cases you are sending data to server(in form of data object)
->and we want the server to accept an dstore the response enclosed in body

  

Express provides us with middleware to deal with incoming data object in body of request
**express.json()** --> is a method to recognize incoming request object as JSON object

> used as app.use(express.json());

 
**express.urlencoded()** -> is a method to recognize incoming request Object as string or arrays

  

**ALTERNATIVELY** : body-parser (an npm package) can be used to do the same thing

body-parser sits on top of express designed only for post and put.

  

     //express.urlencoded middleware is used only for parsing request body of
     content-type x-www-form-urlencoded
  
    //calling bp to handle object from POST req
    
    var bodyParser=require('body-parser')

  

    //parse incoming req object as JSON object
    
    app.use(bodyParser.json()); //parse application/json -->
    
      
    
    //parse application/x-www-form-urlencoded -->can only parse incoming request object if string or arrays

    app.use(bodyParser.urlencoded({extended:false}));
    
      
    
    //combine above two, you can parse incoming req Object if object, with nested objects, or generally any type
    
    app.use(bodyParser.urlencoded(){extended:true})
  

## 

## HTTP STATUS CODE STATUS

  

SUCCESS(200)
-
200 : OK

201: CREATED

203 : NON-AUTHORITATIVE INFORMATION

204 : NO CONTENT

  

LEVEL(400)
--
400 : BAD REQUEST

401 : UNAUTHORIZED

403 : FORBIDDEN

404 : NOT FOUND

409 : CONFLICT

  

LEVEL(500)
--
500 : INTERNAL SERVER ERROR

501 : NOT IMPLEMENTENTED

502 : GATEWAY

503 : SERVIC UNAVAILABLE

504 : GATEWAY TIMEOUT

599 : NETWORK TIMEOUT
