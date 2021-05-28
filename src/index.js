import * as core from '@abstractapi/javascript-core';

export class AbstractExchangeRates {
    static apiKey;

    static configure = (apiKey) => {
        this.apiKey = apiKey;
    }

    static live = (base, target) => {
        if (!base) {
            throw new Error('Base is not provided.')
        }

        let query = `base=${base}`;
        if(target && target !== "")
            query += `&target=${target}`;

        return core.makeApiCall('exchange-rates', this.apiKey, query, 'live');
    };

    static historical = (base, date, target) => {
        if (!base) {
            throw new Error('Base is not provided.')
        }
        if (!date) {
            throw new Error('Date is not provided.')
        }

        let query = `base=${base}&date=${date}`;
        if(target && target !== "")
            query += `&target=${target}`;

        return core.makeApiCall('exchange-rates', this.apiKey, query, 'historical');
    };

    static convert = (base, target, date, base_amount) => {
        if (!base) {
            throw new Error('Base is not provided.')
        }
        if (!target) {
            throw new Error('Target is not provided.')
        }

        let query = `base=${base}&target=${target}`;
        if(date && date !== "")
            query += `&date=${date}`;
        if(base_amount && base_amount !== "")
            query += `&base_amount=${base_amount}`;

        return core.makeApiCall('exchange-rates', this.apiKey, query, 'convert');
    };
}
