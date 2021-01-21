# The Graph Epochs

This is a NextJS React app interview challenge. Please fork this repo, and push your code to a branch in your forked repo (following the instructions below).

In this exercise you will create an Epochs table that has sorting, search and/or pagination. Data will be available at the endpoint provided in the .env file. _Note_: It is not required to finish implementing all the features. 

First off, watch the [video](https://storage.googleapis.com/graph-web/blog/The%20Graph%20-%20Table.mov) to see what the end result should look like.

Designs can be found [here](https://invis.io/6WZZK4QUGFZ). You might be able to use the "Inspect" mode in Invision to get the styles. Here is the [Sketch file](https://storage.googleapis.com/graph-web/blog/The%20Graph%20-%20Table.sketch). All the assets can be found [here](https://storage.googleapis.com/graph-web/blog/Table%20Assets.zip).

1. Apollo GraphQL is already setup with the subgraph endpoint we are going to use. You can find the subgraph here and use the playground to see the schema and make queries: https://thegraph.com/explorer/subgraph/graphprotocol/graph-network-mainnet.
2. For this challenge we will query the Entity called `Epoch`. 
3. After you get all of the epochs (or some of them, if you use pagination), render them in a table with the columns as in Designs. 
4. In order to format Big numbers that come back from the subgraph fields, divide them with `10^18`. Don't worry about precision. You can round them after division, truncate the decimals..etc. 
5. All columns should be sortable in `asc/desc` order. Default order should be by Epoch's `startBlock`. Make use of GraphQL queries. 
6. Search should only be implemented for Epoch's `startBlock`. Make sure to use a GraphQL query. 
7. As a bonus, there is are a few animations/transitions (check the video). 
8. Another bonus, table should be horizontally scrollable on mobile. 

# Notes

- Make sure to implement the UI/UX according to the Designs provided. We highly value attention to detail.
- Please use Apollo client with hooks to query the data (packages should already be installed - check `package.json`).
- Put your queries into apollo/queries.js file.
- For styling we use Theme UI. There is an example of how to add styles. 

# Setup and Development

1. Fork this repo `git@github.com:edgeandnode/interview-challenge.git` 
2. Make sure you are inside of the repo you just cloned, by running `cd interview-challenge`
3. Run `yarn` to install all dependencies
4. Run `yarn dev` to start the app
5. Open `http://localhost:4000` in your browser
