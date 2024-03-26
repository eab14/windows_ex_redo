# windows_ex_redo

## Description

SPA mimicking an OS inside the browser using React. Intended to be an application where a user can:

- Open, minimize, close windows like many Operating Systems
- Window memory for the current values of the windows
- Adjust settings such as theme, or desired applications on their nav bar
- Use utilities such as Calculator, Calendar Note App, etc...
- Upload and organize images, music, and video files, then play these files using the customized apps related
- Message and share files with other users
- etc...

## Installation

In the main directory: 

```code
npm i
```

In /server change .env.EXAMPLE to .env

Change the following information to your local or hosted MongoDB:

```
MONGO_URI = "mongodb://localhost:27017/windows_ex_db"
PORT = 8080
```

To seed the database with initial data:

```
npm run seeds
```

## Usage information

To initialize the server and client concurrently:

```code
npm start
```

To sign in through the client using preset data:

Username: 

```code
admin@root.com
```
Password:

```code
root
```