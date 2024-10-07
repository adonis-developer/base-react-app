# Getting Started with BASE REACT APP

This project was bootstrapped with Webpack.

## Available Scripts

In the project directory, you can run:

### `cp .env.example .env`

<!-- Each environment will have a different .env, no need to use dev.json, stage.json....
Please use .env rather than hard-fixing secret variables in code-->

### `yarn add`

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Learn More

### Commit lint

Please commit code with message follow syntax: "${subject}(${env}): [${id_feat}][${name_feat}] content...."
vd: "feat(dev): [SHOW MENU] create UI show list video"


### Env Swap

env.dev, env.stag are only for local convenience to switch envs for dev and debug. Not for CI/CD -> CI/CD should only use .env

When locally run the command: 
    1.`NODE_ENV=development npm start` to use code and env of dev 
    2.`NODE_ENV=staging npm start` to use code and env of stag 
    3.`npm start` to use code and env of production 

You can also use dev's env and code if .env contains dev's env property and you run `npm start`, same goes for staging environment