# Paw Prints Data Model

The `api/` endpoint expects a POST request in the following form:

---
```
{
    breed: STRING (must match one of 10 dog breed options exactly)
    location: STRING ( [City, State] or [5 digit US Zip Code] )
}
```
---

<br>

Accepted dog breeds are:

> Labrador Retriever  
> German Shepherd Dog  
> Golden Retriever  
> French Bulldog  
> Australian Shepherd  
> Beagle  
> Poodle  
> Siberian Husky  
> Yorkshire Terrier  
> Pembroke Welsh Corgi  

<br>

The API will return an object with two keys: 

- `costs` : information about the estimated costs of that breed   
- `pets` : an array of 10 objects with information about individual available-to-adopt pets, sorted by shortest distance  

<br>

## Costs Object

Within the `costs` object, there are several nested objects.

`monthly` and `annual` are similar objects that contain the monthly and annual estimated costs for that breed, in the categories of food, grooming, toys and treats, medical (with or without insurance), and the totals (with or without insurance).

`lifetime` is an object that contains four nested objects: `Baby`, `Young`, `Adult`, and `Senior`, which reference the four age categories that the PetFinder API returns to identify a pet's age.

The lifetime costs in each of those nested objects is adjusted to reflect the remaining lifetime costs if this pet were to be adopted, with the added cost of miscellaneous items.

All costs are strings in USD currency format.

<br>

---
```
costs: {

    monthly: {
        food: STRING (in USD currency),
        grooming: STRING (in USD currency),
        toysTreats: STRING (in USD currency),
        medical: {
            withInsurance: STRING (in USD currency),
            without: STRING (in USD currency)
        },
        total: {
            withInsurance: STRING (in USD currency),
            without: STRING (in USD currency)
        }
    },

    annual: {
        food: STRING (in USD currency),
        grooming: STRING (in USD currency),
        toysTreats: STRING (in USD currency),
        medical: {
            withInsurance: STRING (in USD currency),
            without: STRING (in USD currency)
        },
        total: {
            withInsurance: STRING (in USD currency),
            without: STRING (in USD currency)
        }
    },

    lifetime: {

        Baby: {
            total: {
                withInsurance: STRING (in USD currency),
                without: STRING (in USD currency)
            },
            food: STRING (in USD currency),
            grooming: STRING (in USD currency),
            toysTreats: STRING (in USD currency),
            medical: {
                withInsurance: STRING (in USD currency),
                without: STRING (in USD currency)
            },
            miscellaneous: STRING (in USD currency)
        },

        Young: {
            total: {
                withInsurance: STRING (in USD currency),
                without: STRING (in USD currency)
            },
            food: STRING (in USD currency),
            grooming: STRING (in USD currency),
            toysTreats: STRING (in USD currency),
            medical: {
                withInsurance: STRING (in USD currency),
                without: STRING (in USD currency)
            },
            miscellaneous: STRING (in USD currency)
        },

        Adult: {
            total: {
                withInsurance: STRING (in USD currency),
                without: STRING (in USD currency)
            },
            food: STRING (in USD currency),
            grooming: STRING (in USD currency),
            toysTreats: STRING (in USD currency),
            medical: {
                withInsurance: STRING (in USD currency),
                without: STRING (in USD currency)
            },
            miscellaneous: STRING (in USD currency)
        },

        Senior: {
            total: {
                withInsurance: STRING (in USD currency),
                without: STRING (in USD currency)
            },
            food: STRING (in USD currency),
            grooming: STRING (in USD currency),
            toysTreats: STRING (in USD currency),
            medical: {
                withInsurance: STRING (in USD currency),
                without: STRING (in USD currency)
            },
            miscellaneous: STRING (in USD currency)
        }
    },
    healthIssues: STRING (description of common breed health issues)
}
```
---



<br>

## Pets Array

The `pets` array contains 10 objects, one for each matching pet found in the PetFinder API, listed by nearest distance.

Within each individual pet object, the nested array `images` holds an object per photo provided by PetFinder for an individual pet, with four sizes (small, medium, large, and full) image URL strings. 

`contact` contains an object of contact information for reaching out to the shelter or organization the user can adopt this individual pet from. `breeds` contains an object of information about what primary and secondary breed the individual pet is and if they are a mixed breed dog.

The nested object `attributes` contains keys referencing qualities of the individual pet, as Boolean values (true, false, or null if not provided).

<br>

---
```
pets: [
    {
        images: [
            {
                small: STRING (URL of 100px image),
                medium: STRING (URL of 300px image),
                large: STRING URL,
                full: STRING URL
            },
        ],

        listingLink: STRING (URL of where the pet is listed)
        description: STRING,
        id: INTEGER (unique identifying ID of pet)
        age: STRING,
        name: STRING,

        contact: {
            email: STRING,
            phone: STRING,
            address: {
                address1: STRING or null,
                address2: STRING or null,
                city: STRING,
                state: STRING,
                postcode: STRING,
                country: STRING
        },

        breeds: {
            primary: STRING (primary breed),
            secondary: STRING or null (secondary breed, or null if not known),
            mixed: BOOLEAN (if a mixed breed dog),
            unknown: BOOLEAN
        },

        distance: INTEGER,

        attributes: {
            spayed_neutered: BOOLEAN (true, false or null if not provided),
            house_trained: BOOLEAN,
            declawed: BOOLEAN,
            special_needs: BOOLEAN,
            shots_current: BOOLEAN
        }
    }
]
```
---

<br>

## Full API Response

The full returned API response is formatted like so: 

---
```
{
    costs: {

        monthly: {
            food: STRING (in USD currency),
            grooming: STRING (in USD currency),
            toysTreats: STRING (in USD currency),
            medical: {
                withInsurance: STRING (in USD currency),
                without: STRING (in USD currency)
            },
            total: {
                withInsurance: STRING (in USD currency),
                without: STRING (in USD currency)
            }
        },

        annual: {
            food: STRING (in USD currency),
            grooming: STRING (in USD currency),
            toysTreats: STRING (in USD currency),
            medical: {
                withInsurance: STRING (in USD currency),
                without: STRING (in USD currency)
            },
            total: {
                withInsurance: STRING (in USD currency),
                without: STRING (in USD currency)
            }
        },

        lifetime: {

            Baby: {
                total: {
                    withInsurance: STRING (in USD currency),
                    without: STRING (in USD currency)
                },
                food: STRING (in USD currency),
                grooming: STRING (in USD currency),
                toysTreats: STRING (in USD currency),
                medical: {
                    withInsurance: STRING (in USD currency),
                    without: STRING (in USD currency)
                },
                miscellaneous: STRING (in USD currency)
            },

            Young: {
                total: {
                    withInsurance: STRING (in USD currency),
                    without: STRING (in USD currency)
                },
                food: STRING (in USD currency),
                grooming: STRING (in USD currency),
                toysTreats: STRING (in USD currency),
                medical: {
                    withInsurance: STRING (in USD currency),
                    without: STRING (in USD currency)
                },
                miscellaneous: STRING (in USD currency)
            },

            Adult: {
                total: {
                    withInsurance: STRING (in USD currency),
                    without: STRING (in USD currency)
                },
                food: STRING (in USD currency),
                grooming: STRING (in USD currency),
                toysTreats: STRING (in USD currency),
                medical: {
                    withInsurance: STRING (in USD currency),
                    without: STRING (in USD currency)
                },
                miscellaneous: STRING (in USD currency)
            },

            Senior: {
                total: {
                    withInsurance: STRING (in USD currency),
                    without: STRING (in USD currency)
                },
                food: STRING (in USD currency),
                grooming: STRING (in USD currency),
                toysTreats: STRING (in USD currency),
                medical: {
                    withInsurance: STRING (in USD currency),
                    without: STRING (in USD currency)
                },
                miscellaneous: STRING (in USD currency)
            }
        },
        healthIssues: STRING (description of common breed health issues)
    },

    pets: [
        {
            images: [
                {
                    small: STRING (URL of 100px image),
                    medium: STRING (URL of 300px image),
                    large: STRING URL,
                    full: STRING URL
                },
            ],
            listingLink: STRING (URL of where the pet is listed)
            description: STRING,
            id: INTEGER (unique identifying ID of pet)
            age: STRING,
            name: STRING,
            contact: {
                email: STRING,
                phone: STRING,
                address: {
                    address1: STRING or null,
                    address2: STRING or null,
                    city: STRING,
                    state: STRING,
                    postcode: STRING,
                    country: STRING
            },
            breeds: {
                primary: STRING (primary breed),
                secondary: STRING or null (secondary breed, or null if not known),
                mixed: BOOLEAN (if a mixed breed dog),
                unknown: BOOLEAN
            },
            distance: INTEGER,
            attributes: {
                spayed_neutered: BOOLEAN (true, false or null if not provided),
                house_trained: BOOLEAN,
                declawed: BOOLEAN,
                special_needs: BOOLEAN,
                shots_current: BOOLEAN
            }
        }
    ]
}
```
---

<br>