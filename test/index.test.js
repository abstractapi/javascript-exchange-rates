import 'regenerator-runtime/runtime';
import {AbstractExchangeRates} from '../src'

const API_KEY = process.env.EXCHANGE_RATES_API_KEY;

describe('Live endpoint', () => {
    it('Should throw error when no key is configured', () => {
        AbstractExchangeRates.configure(null);

        let thrownError;
        try {
            AbstractExchangeRates.live('EUR')
        }
        catch(error) {
            thrownError = error;
        }

        let expectedErrorObj = new Error('No api key is set.');
        expect(thrownError).toEqual(expectedErrorObj);
    });


    it('Should throw error when base is empty', () => {
        AbstractExchangeRates.configure(API_KEY);

        let thrownError;
        try {
            AbstractExchangeRates.live()
        }
        catch(error) {
            thrownError = error;
        }

        let expectedErrorObj = new Error('Base is not provided.');
        expect(thrownError).toEqual(expectedErrorObj);
    });

    it('Request OK when everything is set up correctly', async () => {
        AbstractExchangeRates.configure(API_KEY);

        AbstractExchangeRates.live('EUR').then((response) => {
            expect(response.base).toBe('EUR')
        })
    });
});

describe('Historical endpoint', () => {
    it('Should throw error when no key is configured', () => {
        AbstractExchangeRates.configure(null);

        let thrownError;
        try {
            AbstractExchangeRates.historical('EUR', '2021-05-01')
        }
        catch(error) {
            thrownError = error;
        }

        let expectedErrorObj = new Error('No api key is set.');
        expect(thrownError).toEqual(expectedErrorObj);
    });

    it('Should throw error when base is empty', () => {
        AbstractExchangeRates.configure(API_KEY);

        let thrownError;
        try {
            AbstractExchangeRates.historical(null, '2021-05-01')
        }
        catch(error) {
            thrownError = error;
        }

        let expectedErrorObj = new Error('Base is not provided.');
        expect(thrownError).toEqual(expectedErrorObj);
    });

    it('Should throw error when date is empty', () => {
        AbstractExchangeRates.configure(API_KEY);

        let thrownError;
        try {
            AbstractExchangeRates.historical('EUR')
        }
        catch(error) {
            thrownError = error;
        }

        let expectedErrorObj = new Error('Date is not provided.');
        expect(thrownError).toEqual(expectedErrorObj);
    });

    it('Request OK when everything is set up correctly', async () => {
        AbstractExchangeRates.configure(API_KEY);

        AbstractExchangeRates.historical('EUR', '2021-05-01').then((response) => {
            expect(response.base).toBe('EUR')
            expect(response.date).toBe('2021-05-01')
        });
    });
});

describe('Convert endpoint', () => {
    it('Should throw error when no key is configured', () => {
        AbstractExchangeRates.configure(null);

        let thrownError;
        try {
            AbstractExchangeRates.convert('EUR', 'USD')
        }
        catch(error) {
            thrownError = error;
        }

        let expectedErrorObj = new Error('No api key is set.');
        expect(thrownError).toEqual(expectedErrorObj);
    });

    it('Should throw error when base is empty', () => {
        AbstractExchangeRates.configure(API_KEY);

        let thrownError;
        try {
            AbstractExchangeRates.convert(null, 'USD')
        }
        catch(error) {
            thrownError = error;
        }

        let expectedErrorObj = new Error('Base is not provided.');
        expect(thrownError).toEqual(expectedErrorObj);
    });

    it('Should throw error when target is empty', () => {
        AbstractExchangeRates.configure(API_KEY);

        let thrownError;
        try {
            AbstractExchangeRates.convert('EUR')
        }
        catch(error) {
            thrownError = error;
        }

        let expectedErrorObj = new Error('Target is not provided.');
        expect(thrownError).toEqual(expectedErrorObj);
    });

    it('Request OK when everything is set up correctly', async () => {
        AbstractExchangeRates.configure(API_KEY);

        AbstractExchangeRates.convert('EUR', 'USD').then((response) => {
            expect(response.base).toBe('EUR')
            expect(response.target).toBe('USD')
        })
    });
});
