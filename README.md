# Google-API-Books-Example 
This project was generated using [Nx](https://nx.dev).
### About The Application
Create an app to search and display the results from the Google books API
### Functionality
- Search for Books using Google Books API.
- Get the response from the API and display a list of books.
### Getting Started
1) Clone the repository
2) install dependencies
`npm install`
3) Run the dev server
`npm start`
4) Navigate to the application's url
`http://localhost:4200/`

### Use Storybook
1) Add the Storybook plugin
yarn add --dev @nrwl/storybook

2) Generating Storybook Configuration
nx g @nrwl/react:storybook-configuration google-book-app

3) Running Storybook
nx run google-book-app:storybook
