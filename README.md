## Available Scripts

In the project directory, you can run:

### `yarn start:dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build:dev`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.


### `Explanation on structure of your code`

In the source code of this project, I use reactJS technology with a combination of redux thunk and redux saga. When it starts, the source will point to the src / routes / home folder. I split the file based on its function, which is the view folder for coding related to UI, folder style related to css, redux folder relating to data handling and data retrieval process via API. I will explain a little flow from the UI to the process of retrieving data through the API, processing data and displaying it to the UI. First, the user enters to the home page then the userEffect function will call the action, from the action will call the getData function that is contained. In the getData function there is a function to call the API and the results of the response will be stored in reducers. The currency filter process will call the getData action when the submit button is clicked.