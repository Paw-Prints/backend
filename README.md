# Paw Prints Backend

The live deploy can be found [here](https://paw-prints.herokuapp.com/) on Heroku.

Uses Node.js with Express, integrating with Nationwide's API and the PetFinder API.

## To Use

Setup a `.env` file with the following variables:

PORT = {Your chosen port number locally}
PETFINDER_API_KEY = {Your Petfinder API Key}
PETFINDER_SECRET = {Your Petfinder API Secret}


## API

Object to send to `/api/`:

```
const sampleSend = {
    "breed": string (must match one of 10 dog breed options exactly),
    "location": integer
};
```

Returns an object with two parts - "costs" and "pets"

```
const sampleReturn = {
    // Estimated Costs
    costs: {
        monthlyCost: integer,
        lifetimeCost: integer,
        grooming: integer,
        food: integer,
        insurance: integer
    },
    // Pets found with 10 objects in array
    pets: [
        {
            smallImage: string,
            mediumImage: string,
            name: string,
            description: string,
            listingLink: string,
            age: string,
            housetrained: boolean,
            neutered: boolean,
            children: boolean,
            dogs: boolean,
            cats: boolean
        }
    ]
};
```