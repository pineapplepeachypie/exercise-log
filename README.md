# exercise-log

This is a full stack MERN app that is also a Single Page Application (SPA) that track exercises completed by the user. React is used for the front-end
UI, and REST API using Node and Express for the back-end web service. 

The collection has the below properties: 

Property	Data Type	Comments

![Screen Shot 2023-03-28 at 5 31 32 PM](https://user-images.githubusercontent.com/126367511/228371458-ef9d9a39-bd84-497f-8318-203074c647b1.png)



1. Create using POST /exercises

Request

The request body will be a JSON object with the 5 properties listed in the data model.  

The POST request will have no path parameters. 

The written code validates the request body and if it is valid, a new document is created the the "Success" response is sent. If the request body is invalid then the "Failure" response is sent.

Response: 

Success: If the request is valid then a new document must be created and the following response is sent:

  Body: A JSON object with all the properties of the document including the unique ID value generated by MongoDB.
  
  Content-type: application/json.
  
  Status code: 201.

Failure: If the request body is invalid then the following response is sent:

  Body: A JSON object { Error: "Invalid request"}
  
  Content-type: application/json.
  
  Status code: 400.


2. Read using GET /exercises

Request

No path parameter.

No request body (you don't need to validate this).

Response

Body: A JSON array containing the entire collection.

  If the collection is empty, the response will be an empty array
  
  Each document in the collection must be a JSON object with all the properties of the document including the ID.
  
Content-type: application/json.

Status code: 200.


3. GET using GET /exercises/:_id

Request

The path parameter will contain the ID of the document.

No request body.

Response

Success: If a document exists with the specified ID, the following response must is sent:

  Body: A JSON object with all the properties of the document including the unique ID value.
  
  Content-type: application/json.
  
  Status code 200.

Failure:  If no document exists with the specified ID, the following response is sent:

  Body: A JSON object { Error: "Not found"}
  
  Content-type: application/json.
  
  Status code: 404.


4. Update using PUT /exercises/:_id

Request

The request body will be a JSON object with all the 5 properties listed in the data model.

Response

Success: If the request body is valid and a document exists with the specified ID, then the document is updated and the following response sent: 

  Body: A JSON object with all the properties of the updated document including the ID.
  
  Content-type: application/json.
  
  Status code: 200.
  
Failure: If the request body is invalid then the following response is sent:

  Body: A JSON object { Error: "Invalid request"}
  
  Content-type: application/json.
  
  Status code: 400.
  
Failure:  If no document exists with the specified ID, the following response is sent:

  Body: A JSON object { Error: "Not found"}
  
  Content-type: application/json.
  
  Status code: 404.
  
Note: This first checks the validity of the request body and if it is invalid, return the response with status code 400. It will only look for the existence of the document if the request body is valid.


5. DELETE using DELETE /exercises/:_id

Request

The path parameter needs to contain the ID of the document.

There will not be a request body.

Response

Success: If a document exists with the specified ID, it is deleted and the following response sent:

  Body: No response body
  
  Content-type: Not applicable
  
  Status code: 204.
  
Failure: If no document exists with the specified ID, the following response is sent:

  Body: A JSON object { Error: "Not found"}
  
  Content-type: application/json.
  
  Status code: 404.
  
  

Some notes: 

-Model code is separate from the controller code

-REST API code uses ES modules

-The homepage gets the data by calling the endpoint GET /exercises in the REST API.

-Each row of the table includes an 'edit' and 'delete' buttons for dynamic editing and deletion. 

-The edit page allows the user to edit the specific exercise for which the user clicked the edit icon.

-React componenets are function-based, not class-based. 
