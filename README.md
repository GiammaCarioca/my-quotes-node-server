# Hand Talk Challenge

## Run the server in the development mode

In the root directory:

```shell
npm run dev
```

## Admin user

Log in with the user credentials below:

email: admin@handtalk.com\
password: test123

## Grant admin role to any user

First change the id of the user in the grandAdminRole.js file and then execute the script below:

```shell
GOOGLE_APPLICATION_CREDENTIALS=serviceAccountKey.json node src/utils/grantAdminRole.js
```

## Hosting

The server is hosted on [Heroku](https://react-node-on-fire.herokuapp.com/api/quotes).
