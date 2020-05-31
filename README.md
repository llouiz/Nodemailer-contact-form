

# Send e-mails from Node.js - Nodemailer

How to send an email using Nodemailer

Prerequisite:
- [Node.js](https://nodejs.org/en/) (Installed)


#### Step 1
Before running any of the following steps. Make sure you run `npm install` to install any dependencies needed for this project. 


#### Step 2
We need to define our nodemailer transporter to connect to our service. Make sure you fill in with your credentials such as `email` and `password`.
```
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'example@gmail.com', 
        pass: 'passowrd'
    }
});
```

#### Step 3
Once you have successfully completed the above steps. Run `npm run dev` to start the server.
