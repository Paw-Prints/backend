
// API POST request example syntax

const sampleSend = {
    "breed": "string (must match one of 10 dog breed options exactly)",
    "location": integer
};

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
            // 100 px - mobile
            smallImage: string,
            // 300 px - tablet, desktop
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

// Weight: pounds, food: cups per day, lifespan: years, grooming: times per year, healthIssues: top health defects and their associated cost
// Food based on this chart: https://www.petmd.com/blogs/nutritionnuggets/dr-coates/2015/july/are-you-feeding-your-dog-right-amount-32905

// Average annual vet cost?

const dogBreeds = {
    "Labrador Retriever": {
        weight: 67.5,
        food: 3.375,
        lifespan: 12,
        grooming: 6,
        healthIssues: "Labs are susceptible to eye diseases and joint problems, like hip and elbow dysplasia which cost $1,700 - $4,500 to treat."
    },
    "German Shepherd Dog": {
        weight: 68.5,
        food: 3.425,
        lifespan: 11,
        grooming: 6,
        healthIssues: "Hip and elbow dysplasia are health concerns, ranging from $1,700-$4,500 in surgical treatment."
    },
    "Golden Retriever": {
        weight: 65,
        food: 3.25,
        lifespan: 11,
        grooming: 6,
        healthIssues: "Hip dysplasia and Von Willebrand Disease are common cocerns, ranging from $1,700-$4,500 in surgical treatment."
    },
    "French Bulldog": {
        weight: 22,
        food: 1.5,
        lifespan: 12,
        grooming: 6,
        healthIssues: "Frequent respiratory issues, skin and ear diseases, and spinal disease leads to roughly $3,000-$6,000 in anticipated surgical costs."
    },
    "Australian Shepherd": {
        weight: 52.5,
        food: 2.67,
        lifespan: 14,
        grooming: 6,
        healthIssues: "Hip and elbow dysplasia are health concerns, ranging from $1,700-$4,500 in surgical treatment."
    },
    "Beagle": {
        weight: 22,
        food: 1.5,
        lifespan: 27,
        grooming: 6,
        healthIssues: "Beagles are generally a healthy breed. The most common health issue is cherry eye, about $300-$500 to treat surgically."
    },
    "Poodle": {
        weight: 57.5,
        food: 2.875,
        lifespan: 13.5,
        grooming: 12,
        healthIssues: "Hip dysplasia ranges from $1,700-$4,500 in surgical treatment. Eye conditions and thyroid issues are common concerns."
    },
    "Siberian Husky": {
        weight: 47.5,
        food: 2.53,
        lifespan: 13.5,
        grooming: 6,
        healthIssues: "10% of Huskies have cataracts or other eye diseases. Treatment costs roughly $2,700-$4,000."
    },
    "Yorkshire Terrier": {
        weight: 6,
        food: 0.5,
        lifespan: 14.5,
        grooming: 12,
        healthIssues: "Hypoglycemia is frequent, with treatments from $1,000-$8,000. Legg-Perthes Disease and skin allergies are also common."
    },
    "Pembroke Welsh Corgi": {
        weight: 26.5,
        food: 1.55,
        lifespan: 13.5,
        grooming: 6,
        healthIssues: "Hip dysplasia ranges from $1,700-$4,500 in surgical treatment. Lifelong eye conditions and Von Willebrand Disease are common concerns."
    }
};

