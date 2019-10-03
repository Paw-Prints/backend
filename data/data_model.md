#### api/

The `api/` endpoint expects a POST request in the following form:

---
```
{
    breed: STRING (must match one of 10 dog breed options exactly)
    location: INTEGER (5 digit US Zip Code) or STRING (City, State)
};
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

Within the `costs` object, there is a nested object, `lifetimeCost`. Its keys reference the age provided in an individual pet's listing from PetFinder (Baby, Young, Adult, and Senior), while the value corresponds to the remaining lifetime estimated cost.

In the `pets` individual objects, the nested array `images` holds an object per photo provided by PetFinder for an individual pet, with the object containing four size (small, medium, large, and full) image URL strings. 

`contact` contains an object of contact information for reaching out to the shelter or organization the user can adopt this individual pet from. `breeds` contains an object of information about what primary and secondary breed the individual pet is and if they are a mixed breed dog.

The nested object `attributes` contains keys referencing qualities of the individual pet, as Boolean values (true, false, or null if not provided).

---
```
{
    costs: {
        monthlyCost: INTEGER,
        lifetimeCost: {
            Baby: INTEGER,
            Young: INTEGER,
            Adult: INTEGER,
            Senior: INTEGER

        },
        grooming: INTEGER,
        food: INTEGER,
        insurance: INTEGER
    },

    pets: [
        {
            images: [
                {
                    small: STRING URL of 100px image,
                    medium: STRING URL of 300px image,
                    large: STRING URL,
                    full: STRING URL
                },
            ],
            listingLink: STRING URL of where the pet is listed
            description: STRING,
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