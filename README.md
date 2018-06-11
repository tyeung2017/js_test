# Ethereum Balance fetcher from third party API

## Assignment:
Develop a NodeJS app with a single Endpoint to get the balance of an Ethereum address. It will need to perform a single external request (to an API that provides such data) using a promise-enabled library and async/await. You also need to provide a test/spec for the endpoint.

## Setup and Rundown
Install the app
```
npm i
```

Start the app

```
npm start
```

URL pattern
```
http://localhost:9001/api/:address/balance
```

where :address is the Ethereum address

Example:
```
http://localhost:9001/api/738d145faabb1e00cf5a017588a9c0f998318012/balance
```

Run tests
```
npm test
```

