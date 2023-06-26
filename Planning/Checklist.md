# DOW KIPPER - Capstone Checklist

Developers: Ian Ouyoung, Xi-Ping Chen, Tim Li

## Tasks

* [ ] Build a full stack java project, including backend, sql data, front end configuration (react & fetch API). 
On a high level, this project catalogs a user's hobby items based off of eBay completed item prices and calculates the "hobby portfolio" value. 
  * [ ] Create a detailed proposal checklist
* [ ] Review the requirements 
* [ ] Identify any research to be done

### Part 1: Project Setup, Database Design, and eBay API (Est 8 Hours)

* [ ] Research eBay APIs and understand how they can be utilized (3 Hours)
  * [ ] Use the "findCompletedItems" operation in the "Finding API" (1 Hour)
  * [ ] Pass the keyword of item of interest to the keywords parameter of the findCompletedItems operation to filter the results (0.5 Hour)
  * [ ] Iterate over the items and sum up the sold prices (which should be available in the sellingStatus.currentPrice field of each item in the response) and count the items. (0.5 Hour)
  * [ ] Calculate the average sold price by dividing the total sum of prices by the count of items (test to make sure we can get what we want from the eBay API. We may have to use a different API if this proves to be too difficult) (1 Hour)
* [ ] Initialize Java project (backend) (1 Hour)
* [ ] Identify database tables and their relationships (1 Hour)

### Part 2: Database Connection & Model Creation (Est 5 Hours)

* [ ] Setup a SQL database and connect to java app (2.5 Hours)
  * [ ] Create data models in Java according to database (2.5 Hours)

### Part 3: eBay API Integration (Est 3 Hours)

* [ ] Write the logic to fetch data from API (3 Hours)

### Part 4: Implement CRUD (Est 20 Hours)

* [ ] Implement CRUD operations (Users, Collections, Items)
  * [ ] Models
     * [ ] User
        * [ ] Long id
        * [ ] String name
        * [ ] String email
        * [ ] getters & setters
     * [ ] Collection
        * [ ] Long id
        * [ ] String name
        * [ ] private User user
        * [ ] private List<Item> items
        * [ ] getters & setters
     * [ ] Item
        * [ ] Long id
        * [ ] String name
        * [ ] BigDemcimal price
        * [ ] private Collection collection
        * [ ] getters & setters
     * [ ] Portfolio
        * [ ] Long id
        * [ ] private User user
        * [ ] private List<Collection> collections 
        * [ ] getters & setters 
     * [ ] PriceData (to hold data of sold prices)
  * [ ] Repositories
     * [ ] UserRepository
     * [ ] CollectionRepository
     * [ ] ItemRepository
     * [ ] PortfolioRepository
       * [ ] Service Classes
     * [ ] UserService
        * [ ] getUsers
        * [ ] addUser
        * [ ] updateUser
        * [ ] deleteUser
     * [ ] CollectionService
        * [ ] List<Collection> getCollections()
        * [ ] Collection addCollection(Collection collection)
        * [ ] Collection updateCollection(Collection collection)
        * [ ] deleteCollection(Long id)
     * [ ] ItemService
        * [ ] getItem
        * [ ] addItem
        * [ ] updateItem
        * [ ] deleteItem
     * [ ] PortfolioService
        * [ ] List<Portfolio> getPortfolios()
        * [ ] Portfolio addPortfolio(Portfolio portfolio)
        * [ ] Portfolio updatePortfolio(Portfolio portfolio)
        * [ ] deletePortfolio(Long id)
     * [ ] FetchService     
     * [ ] Result<T>
        * [ ] private ResultType resultType;
        * [ ] private String message;
        * [ ] private T data;
        * [ ] public Result(ResultType resultType, String message)
        * [ ] public Result(ResultType resultType, String message, T data)
        * [ ] getters and setters
     * [ ] ResultType
  * [ ] Controllers
     * [ ] UserController
        * [ ] private UserService userService
        * [ ] public List<User> getUsers()
        * [ ] public User addUser()
        * [ ] public User updateUser()
        * [ ] public void deleteUser()
     * [ ] CollectionController
        * [ ] private CollectionService collectionService
        * [ ] public List<Collection> getCollections()
        * [ ] public Collection addCollection()
        * [ ] public Collection updateCollection()
        * [ ] public void deleteCollection()
     * [ ] ItemController
        * [ ] private ItemService itemService
        * [ ] public List<Item> getItems()
        * [ ] public Item addItem() 
        * [ ] public Item updateItem()
        * [ ] public void deleteItem()
     * [ ] PortfolioController
        * [ ] private PortfolioService portfolioService
        * [ ] public List<Portfolio> getPortfolios() 
        * [ ] public Portfolio addPortfolio()
        * [ ] public Portfolio updatePortfolio()
        * [ ] public void deletePortfolio()
     * [ ] AuthController
        * [ ] private UserService userService
        * [ ] public User register()
        * [ ] public User login()
     * [ ] GlobalExceptionHandler

### Part 5: Frontend (React) - React App Setup and Component Design (Est 20 Hours)

* [ ] Setup REACT (1 Hour)
* [ ] Organize and identify the necessary components (1 Hour)
* [ ] Design our components (10 Hours)
  * [ ] Home
  * [ ] Category
  * [ ] Collections
  * [ ] Inventory
  * [ ] User
  * [ ] Footer
* [ ] Enable routing with React-Router-DOM (3 hours)
  * [ ] Home
  * [ ] Login
  * [ ] Register
  * [ ] Settings
  * [ ] Category
  * [ ] Collections
  * [ ] Inventory
  * [ ] User
* [ ] Hero Component will have a carousel view of categories and items in cards (1 Hour)
* [ ] Footer component will either have individual card information or just a banner with p tag text (1 Hour)
* [ ] Implement CRUD for the frontend (3 Hours)
* [ ] Styling with Tailwind CSS

### Part 6: Implement Component Logic (Est 5 Hours)

* [ ] Implement logic in components
  * [ ] Fetch data from backend (2 Hours)
  * [ ] Handle user inputs (2 Hours)
  * [ ] Ensure components can correctly fetch and display backend data (1 Hour)

### Part 7: Routing and Navigation (Est 5 Hours)

* [ ] Implement routing and navigation & test navigation

## High-Level Requirements

* Test eBay API
* Setup SQL database
* Integrate fetch from API
* Create backend/implement CRUD
* Setup front-end/react
* Implement component logic
* Setup Routing/Navigation
* Final Testing


### File Structure: 
#### Server

```
 src
        ├───main
        │   ├───java
        │   │   └───learn
        │   │       └───Collections
        │   │           │   App.java
        │   │           │
        │   │           ├───data    
        │   │           │       UserRepository.java
        │   │           │       UserJdbcRepository.java
        │   │           │       CollectionRepository.java
        │   │           │       CollectionJdbcRepository.java
        │   │           │       PortfolioRepository.java
        │   │           │       PortfolioJdbcRepository.java
        |   |           |       ItemRepository.java
        │   │           │       ItemJdbcRepository.java
        │   │           │
        │   │           ├───domain
        │   │           │       CollectionService.java
        │   │           │       ItemService.java
        │   │           │       UserService.java
        |   |           |       PortfolioService.java
        │   │           │       Ressult.java
        │   │           │       ResultType.java
        │   │           │
        │   │           ├───models
        │   │           │       Collection.java
        │   │           │       Item.java
        │   │           │       User.java
        |   |           |       Portfolio.java
        │   │           │
        │   │           └───controllers
        │   │                   AuthController.java
        |   |                   CollectionController.java
        |   |                   UserController.java
        |   |                   ItemController.java
        |   |                   PortfolioController.java
        │   │                   Global Exception Handler.java
        │   └───resources
        └───test
            └───java
                └───learn
                    └───BreakHouse
                        ├───data
                        │       CollectionRepositoryTest.java
                        |       ItemRepositoryTest.java       
                        │       UserRepositoryTest.java
                        │       PortfolioRepositoryTest.java
                        │      
                        └───domain
                                CollectionServiceTest.java
                                ItemServiceTest.java
                                UserServiceTest.java
                                PortfolioServiceTest.java
```
