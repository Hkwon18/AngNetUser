1.	DO NOT run the script to generate the database and table! 
	The script was only included for review purposes. 
	Creating a database manually will conflict with Entity Core’s database mapping, and cause fatal errors. 
	Please run the application without a pre-existing database to allow the Entity Core ORM mapping. 

2.	ASP.NET Core no longer stores database connection strings in “web.config”. 
	Although I have included the default local connection string in “web.config”,
	this application will fetch the connection string from “appsettings.json”. 

Refer to the included documentation for more details.
 
