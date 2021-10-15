# Cryptid

## What is Cryptid?
  - Cryptid is a cryptocurrency tracker. Users will be able to get information on the most popular coins, crypto exchanges, historical data, as well as news in the crypto world.

## MVP Features:
  - Landing Page :
      - Navigation Bar, snapshot of global crypto stats, snapshot of the 10 hottest coins, snap shot of several news articles
  - Cryptocurrency Page:
      - A filterable list of the top 100 coins in the world, the list will contain data on each coin such as price, market cap, and volume
  - Cryptocurrency Detail Page:
      - Historical Charts on each currency as well as releveant inforamtion provided by the coingecko api such as descriptions and whitepaper links
  - Exchange Page:
      - Details about each crypto exchange, including description and image
  - News and Events Page:
      - News articles and events in crypto, each card will link out to the actual article/event homepage. 
  - User can Register, Log in, and Log 0ut
      - Users will be notifed when log in, log out, or registration is successfull/unsuccessful. 
      - Local Storage will allow user's log in information to persist through page refresh, app rerendering, and site navigation. 
      - User's password will be salted for secure storage on the DB
      - On log in user's will be authenticated via JWT

## Future Features:
  - Dark/Light Mode
  - Integration of Metamask
  - A coin for Cryptid itself, using smart contracts written in solidty
  - Trading
  
