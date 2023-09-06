To run the project please use next commands: 

1. navigate to `backend` folder and run: 
    - `yarn install` to install dependencies
    - `yarn strapi import -f ../sample-data.tar.gz` to import sample data
    - `yarn run start` to run the server

Please make sure that Product, Page and Upload api endpoints are accessible to unauthenticated user.
To check open strapi admin panel and navigate to Settings -> Roles -> Public. 

2. navigate to `frontend` folder and run:
    -  `npm install`
    -  `npm run start`