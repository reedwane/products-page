# Products Page Application developed by Ridwan Abdulkareem

This project is live at [Reed-products-page](https://reed-products-page.netlify.app/).

## To run the project on your local machine

Clone the project, navigate to the directory and install the dependencies.
Then in the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Source Folder Structure

---

The `src ` folder contains the codes to the components, unit tests, stylesheets, contstants and helpers in folder and nested folders.

The `src` folder is structured like this:

- **assets**: [logo.png]
- **components**: [CartItem, CartOverlay, Header, Loading, ProductLIst]
- **context**: [ProductContext.js]
- **Fetch**: [useFetch.ts]
- **helpers**: [helpers.js]
- App.js
- index.css
- index.js

### The components

Each component folder contains a component of the application and the wrapping element styled with `styled-components`

## Technologies

The packages used to develop this application can be found in the package.json and are as shown below:

```json
"dependencies": {
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.1.1",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.1.0",
    "react-awesome-spinners": "^1.3.1",
    "react-dom": "^18.1.0",
    "react-icons": "^4.4.0",
    "react-scripts": "5.0.1",
    "usehooks-ts": "^2.5.4",
    "web-vitals": "^2.1.4"
  },
```
