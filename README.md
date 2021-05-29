# AbstractAPI javascript-exchange-rates library

Integrate the powerful [Exchange Rates API from Abstract](https://www.abstractapi.com/exchange-rate-api) in your Javascript or NodeJS project in a few lines of code.

The Exchange Rate API is an REST API that allows you to:

- look up the latest exchange rates for 80+ currencies via the *live* endpoint
- get historical exchange rates using the *historical* endpoint
- convert an arbitrary amount from one currency to another using the *convert* endpoint

It's very simple to use: you only need to submit your API key and a currency symbol (such as "USD"), and the API will respond with current exchange rate, historical data, or convertion rates.

# Documentation

## Installation

You can install **javascript-exchange-rates** via npm, from our CDN, or download the source into your project.

### ES6

Download and install the library from npm:

```
npm install @abstractapi/javascript-exchange-rates --save
```

In your project, import it and configure your `API_KEY`:

```js
import {AbstractExchangeRates} from 'javascript-exchange-rates'

AbstractExchangeRates.configure('API_KEY')
```

### Browser, from the CDN

You can have the browser download the library from its closest location through jsDeliver CDN:

```js
<script src="https://cdn.jsdelivr.net/npm/@abstractapi/javascript-core@latest/dist/javascript-core.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@abstractapi/javascript-exchange-rates@latest/dist/javascript-exchange-rates.js"></script>
<script>
    AbstractExchangeRates.configure('API_KEY');

    // use the library
</script>
```

### Browser, from the built file

You can build the library yourself, or get the already built file from the `dist` directory and load it:

```js
<script src="dist/javascript-exchange-rates.js"></script>
<script>
    AbstractExchangeRates.configure('API_KEY');

    // use the library
</script>
```

## API key

Get your API key for free and without hassle from the [Abstact website](https://app.abstractapi.com/users/signup?target=/api/exchange-rates/pricing/select).

## Quickstart

AbstractAPI **javascript-exchange-rates** library returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) so you can use one of the following approaches:

### Async/Await

```js
async function getLiveRates(currency) {
  let response = await AbstractExchangeRates.live(currency);
  console.log(response);
}

async function getHistoricalRates(currency, date) {
  let response = await AbstractExchangeRates.historical(currency, date);
  console.log(response);
}

async function getConvertion(currency, target) {
  let response = await AbstractExchangeRates.convert(currency, target);
  console.log(response);
}
```

### Using .then()

```js
function getLiveRates(currency) {
  AbstractExchangeRates.live(currency)
    .then(response => {
      console.log(response);
    })
}

function getHistoricalRates(currency, date) {
  AbstractExchangeRates.historical(currency, date)
    .then(response => {
      console.log(response);
    })
}

function getConvertion(currency, target) {
  AbstractExchangeRates.convert(currency, target)
    .then(response => {
      console.log(response);
    })
}
```

## API response

The API response contains the following fields:

### `live` response parameters
| Parameter| Type| Details |
| - | - | - |
| base | String | The base currency used to get the exchange rates. |
| last_updated | String | The Unix timestamp of when the returned data was last updated. |
| exchange_rates | Object | A JSON Object containing each of the target currency as the key and its exchange rate versus the base currency as that key's value. |

### `historical` response parameters

| Parameter | Type | Details |
| - | - | - |
| base | String | The base currency used to get the exchange rates. |
| date | String | The date the currencies were pulled from, per the successful request. |
| exchange_rates | Object | A JSON Object containing each of the target currency as the key and its exchange rate versus the base currency as that key's value. |

### `convert` response parameters

| Parameter | Type | Details |
| - | - | - |
| base | String | The base currency used to get the exchange rates. |
| target | String | The target currency that the base_amount was converted into. |
| date | String | The date the currencies were pulled from, per the successful request. |
| base_amount | Float | The amount of the base currency from the request. |
| converted_amount | Float | The amount of the target currency that the base_amount has been converted into |
| exchange_rate | Float | The exchange rate used to convert the base_amount from the base currency to the target currency |

## Detailed documentation

You will find additional information and request examples in the [Abstract help page](https://app.abstractapi.com/api/exchange-rates/documentation).

## Getting help

If you need help installing or using the library, please contact [Abstract's Support](https://app.abstractapi.com/api/exchange-rates/support).

For bug report and feature suggestion, please use [this repository issues page](https://github.com/abstractapi/javascript-exchange-rates/issues).

# Contribution

Contributions are always welcome, as they improve the quality of the libraries we provide to the community.

Please provide your changes covered by the appropriate unit tests, and post them in the [pull requests page](https://github.com/abstractapi/javascript-exchange-rates/pulls).

## NPM

### Installation

Run `npm install` in the command line to install the dependencies. To update those dependencies you need to run `npm update`.

### Building

To build the library and generate the minified file in the *dist* directory, you need to run `npm run build`.

To build the lib, you need to run `npm run build:lib`.

### Test

To run the test suite, you need the API key from the abstract website and you can run:

    EXCHANGE_RATES_API_KEY=(your key here) npm run test

