# React/Redux client consuming an Express server with Passport local auth using JWTs

This demonstrates a fairly minimal username/password auth scenario that makes use of libsodium/Argon2i password hashing. There's also a tiny API to show how JWTs might be used to secure it.


## Setup

```shell
npm i
mv .env.example .env
npm start
```

* A `postinstall` script will run a knex migration that creates a `users` table.
* Go to [http://localhost:3000](http://localhost:3000) to see the site.


## More information

The session and JWT secrets are loaded from environment variables.

Password hashing modules often have a _native_ component: they're written in lower-level languages like C or C++ with a JavaScript _wrapper_. This means they can be trickier to install on some platforms. There are some instructions for how to obtain the necessary tools to build native modules [here](https://github.com/dev-academy-programme/orientation/blob/master/installation/node.md). If you're using a Mac, be sure you have [XCode](https://itunes.apple.com/us/app/xcode/id497799835) and [Homebrew](https://brew.sh) installed and run `brew install libtool autoconf automake`.

To use the API, you'll first need to register a user with the web form. Then hit the `https://localhost:3000/api/v1/authenticate` endpoint with a POST request containing something like:

```json
{ 
  "username": "foo",
  "password": "bar"
}
```

The server should respond with a token. You can use this token in subsequent requests. You'll need to send an `Authorization` header:

```shell
curl -k -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwidXNlcm5hbWUiOiJub2RleSIsImlhdCI6MTQ4NTM5NDc3MCwiZXhwIjoxNDg1NDgxMTcwfQ.EVo65RYtRlA9HTOiIqaG_aDfSE7xMedbr7JMeDlt5kE" \
  https://localhost:3000/api/v1/quote
```

Notice the space between `Bearer` and the token. Compare the response to requests with the token and without it.


## Things to think about

This demo omits plenty of things that a production system would have to care about. For example, how could we better validate the registration form? Right now a user can be created with username ' ' and password ' ': hardly ideal!

Also, because the credentials are passed to the server in clear text, this should _ONLY_ happen over SSL/HTTPS in production.
