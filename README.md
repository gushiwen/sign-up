# Create react app and deploy on GitHub
https://github.com/gitname/react-gh-pages

### Create an empty repository “sign-up" on GitHub

### npx create-react-app sign-up
https://create-react-app.dev/docs/getting-started
app name need to be lower case

### Install the gh-pages npm package
npm install gh-pages —save-dev

### Add a home page property to package.json
"homepage": “https://gushiwen.github.io/sign-up",

### Add deployment scripts to package.json
"predeploy": "npm run build",
"deploy": "gh-pages -d build",

### Add a “remote” that points to the Github repository
git remote add origin git@github.com:gushiwen/sign-up.git

### Install the formik npm package
npm I formik

### Install validation schema yup 
npm install yup —save

### Edit src/App.js using FORMIK
npm start to test on local machine

### Deploy the React app to Github Pages
npm run deploy

### View the demo web page
https://gushiwen.github.io/sign-up/

### Store the react app’s source code on GitHub
git add .
git commit -m "Configure React app for deployment to GitHub Pages"
git push origin master
