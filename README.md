# How to setup Express & Node with TypeScript

## First Step

Initialize a package.json for your back-end.

```
npm init -y
```
#
## .Then
We are gonna need to install the following packages:

- Express.
- TypeScript.
- Concurrently.
- Rimraf.
- types/express.
- types/node.
- Nodemon.

### Here's how

```
npm install express typescript concurrency rimraf @types/express @types/node
```

and Nodemon as a Dev dependency
```
npm install nodemon -D
```
#
## .Now
We are gonna create an Express instance in a .ts file, this way:

```ts
import express { Express, Request, Response } from 'express'

const app: Express = express();
```
-The Request and Response types are for when we decide to build routes using the callback function (req, res) parameters-
#
## .Then
We could declare the port we are gonna use, it can be done like this:

```ts
const port = process.env.PORT || 3000
```
Note that the dotenv environment variables will only work if they are correctly set up.

Next we should initialize our simple express server:

```ts
app.listen(port, () => {
    console.log(`Now listening on port ${port}`)
})
```
#
## .After this
it would be ideal to start a tsconfig.json file for the project. Run this command at root level:

```bash
npx tsc --init
```
This will initialize a tsconfig.json file that will determine how your compiling works.

Inside tsconfig.json we are going to set this commands in the following way:
```json
"outDir": "./"
we need to uncomment this and turn it into
"outDir": "./comp"
```
Now all our TS files will compile inside a folder called comp (optional name).

#

Now that this is built, we are going to skip a couple steps.
We will need a "npx tsc -w" command to run a build on our Typescript file and compile it into a JS file that will be used by Node.

This will be automated with the package.json scripts the following way:

```json
"scripts": {
  "build": "rimraf comp && npx tsc",
  "preserve": "npm run build",
  "serve": "concurrently \"npx tsc -w\"  \"nodemon comp/index.js\""
 }
```

# Step by step:
- ## build: 
    this script is running the rimraf comp and npx tsc commands, what this does is essentially use the rimraf command to clean up the comp folder and then rebuild it using the tsc command.

- ## preserve:
    this script works using the json script keyword "pre", which makes it so that everytime you run the script "serve", any script that is called preserve will run automatically before "serve.
    Specifically this time it is running the build script so it will run everytime before serve.

- ## serve:
    here we are using concurrently syntax to run two scripts consecutively, the backslash \ next to the quotes " is how we specify which script is being run by wrapping the script inside them. So this script is running "npx tsc -w" first, which is starting the Typescript compilator in watch mode, using "-w" and then we run "nodemon comp/index.js" which means we are starting with nodemon an index.js file that is located in the comp folder (optional name).

The index.js file is named like this only because our Typescript file is called index.ts, so bear that in mind.

If everything was done correctly, our Typescript server should be working correctly now.

