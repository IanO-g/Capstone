# Capstone Proposal/Checklist

## Tasks

* [ ] Build a full stack java project, including backend, sql data, front end configuration (react & fetch API). 
On a high level, this project catalogs a user's hobby items based off of eBay completed item prices and calculates the "hobby portfolio" value. 
  * [ ] Create a detailed proposal checklist

* [ ] Review the requirements 

* [ ] Identify any research to be done

### Part 1: Project Setup, Database Design, and eBay API

* [ ] Research eBay APIs and understand how they can be utilized
  * [ ] Use the "findCompletedItems" operation in the "Finding API" 
  * [ ] Pass the keyword of item of interest to the keywords parameter of the findCompletedItems operation to filter the results
  * [ ] Iterate over the items and sum up the sold prices (which should be available in the sellingStatus.currentPrice field of each item in the response) and count the items.
  * [ ] Calculate the average sold price by dividing the total sum of prices by the count of items (test to make sure we can get what we want from the eBay API. We may have to use a different API if this proves to be too difficult)
* [ ] Initialize Java project (backend)
* [ ] Identify database tables and their relationships

### Part 2: Database Connection & Model Creation

* [ ] Setup a SQL database and connect to java app
  * [ ] Create data models in Java according to database

### Part 3: eBay API Integration

* [ ] Write the logic to fetch data from API

### Part 4: Implement CRUD

* [ ] Implement CRUD operations (Users, Collections, Items)
  * [ ] Test operations to ensure they are working as expected

### Part 5: Frontend (React) - React App Setup and Component Design

* [ ] Setup REACT
* [ ] Design our components

### Part 6: Implement Component Logic

* [ ] Implement logic in components
  * [ ] Fetch data from backend 
  * [ ] Handle user inputs
  * [ ] Ensure components can correctly fetch and display backend data

### Part 7: Routing and Navigation

* [ ] Implement routing and navigation & test navigation

## High-Level Requirements


## Technical Requirements
