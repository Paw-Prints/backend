# Paw Prints Backend

The live deploy can be found [here](https://paw-prints.herokuapp.com/) on Heroku.

Uses Node.js with Express, integrating with Nationwide's API and the PetFinder API.

Callback URL: `https://paw-prints.herokuapp.com/api/callback`

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

## Data Notes

1. Find out grooming needs for each breed
2. Find out pet insurance for each breed
3. Find out annual vet costs (vaccines?)
4. Get annual total to calculate monthly & lifespan
5. Calculate lifespan based on age percentage

If puppy, add training costs of $200

About 4 cups per pound of dog food

Average price per pound is $2.19
https://www.petfoodindustry.com/articles/7836-chewy-dog-food-price-per-pound-analyzed-royal-canin-tops


Expect an emergency health cost of $2,000-4,000 at least once during the pet’s lifetime.

Toys & Treats: $55
Miscellaneous: $45

Compare pet insurance plans: https://www.valuepenguin.com/pet-insurance/comparison

$1037 average per year in vaccinations, dental, veterinary care and medications. 80% off if using insurance. Could toggle to show costs with or without insurance?
https://www.thesimpledollar.com/pet-cost-calculator/

Lifetime averages:
$1470 vet
$1260 vaccines
$3750 dental
$3894 medications

$207.40 annual with 80% reimbursement covering accidents, illness and wellness. $627.40 total annual with average insurance payments.

Insurance averages: https://www.valuepenguin.com/pet-insurance/average-cost-of-pet-insurance
https://www.consumerreports.org/pet-products/is-pet-insurance-worth-cost/

