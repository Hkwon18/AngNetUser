IF db_id('UserDb') IS NULL 
    CREATE DATABASE UserDb

GO

CREATE TABLE [UserDb].[dbo].[Users] ( 
	[Id] INT PRIMARY KEY NOT NULL,
	[Email] NVARCHAR(50),
	[FirstName] NVARCHAR(50) NOT NULL,
	[Joined] date NOT NULL,
	[LastName] NVARCHAR(50) NOT NULL,
	[UserName] NVARCHAR(50) NOT NULL
); 

INSERT INTO [UserDb].[dbo].[Users] ([Id], [Email], [FirstName], [Joined], [LastName], [UserName])
VALUES (1, 'hyukjkwon@gmail.com', 'Hyuk Jin', '05-16-17', 'Kwon', 'hyukjink');

INSERT INTO [UserDb].[dbo].[Users] ([Id], [Email], [FirstName], [Joined], [LastName], [UserName])
VALUES (2, 'NoReform.com', 'Justin', '05-01-17', 'Trudeau', 'JTruds');

INSERT INTO [UserDb].[dbo].[Users] ([Id], [Email], [FirstName], [Joined], [LastName], [UserName])
VALUES (3, 'hoho@ho.com', 'Santa', '01-01-17', 'Claus', 'StNick');


Create Index IX_User_FirstName
ON [dbo].[Users] (FirstName);

Create Index IX_User_LastName
ON [dbo].[Users] (LastName);

Create Index IX_User_Email
ON [dbo].[Users] (Email);

Create Index IX_User_Joined
ON [dbo].[Users] (Id);