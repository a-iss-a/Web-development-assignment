About:

(The assignment was changed to include async methods)
added a task that does calculation 1+1 and ggive the result 2
Due to the task that required providing Id, Name, and Description data, I decided to create a ToDoTask API.

Technologies Used:

- C#

- ASP.NET Core Web API

- Entity Framework Core

- SQL Server

- Postman

Project Structure:

Model Layer:

A ToDoTask model was developed to show the stored data in our database.

The model has:

- Id

- Name

- Description

Database Connection:

The entity framework core was utilized to establish a connection between the API and sql server database.

A class, DbContext-based, was used to establish this connection.

The DbContext is responsible for:.

The process of connecting the application and SQL server database.

Displaying database tables as objects in C#. -

- Letting the application get.
Utilize the entity framework core to manage data.

Program.cs Configuration:

Program.cs is used to establish the connection to the database through dependency injection, as described below.

I added the data and configured it to be stored on a SQL server using AddDbContext.'

In the appsettings.json file, there is a connection string that exists. The application links to the SQL Server database using that string....

In the Program.cs file, the following components have been included:

Repository setup:

IToDoTaskRepository -> ToTaskRepository

Service setup:

IToDoTaskService -> ToTaskService

Repository Layer:

The Repository Layer is responsible for managing data access.

- IToDoTaskRepository interface

- implementation

The repository works with MyAppDbContext. Retrieves the ToDoTask data from the SQL Server database.

The repository contains the code for:

- Getting the ToDoTasks table

- Fetching the needed data

- Using pageNumber.
Pagesize for pagination

Service Layer:

The Repository communicates with the Controller from within its Service Layer.

- IToDoTaskService interface

- ToTaskService implementation

The service receives requests from the controller. Employs the repository to retrieve data....

By separating business logic from data access, this part helps to maintain the cleanliness of the application.

Controller Layer:

The Controller is responsible for handling HTTP requests and responses.

The solution involves a get endpoint that retrieves ToDoTask data and transmits it as json.

Endpoint:

GET /api/data

This endpoint allows pagination using:

- pageNumber

- pageSize

Testing:

Tested using the API, Postman