
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

// Add average inflation of top 15 cities to calculate costs based on CPI.
// National CPI is 251.11. Adjusting single dollar value based on major metropolitan areas' CPI
// Source: https://www.statista.com/statistics/245014/consumer-price-index-for-selected-us-cities/

const cityAdjustment = {
    SanDiego: 1.165,
    SanFrancisco: 1.137,
    Boston: 1.098,
    NewYork: 1.099,
    NewJersey: 1.099,
    Seattle: 1.08,
    LosAngeles: 1.059,
    Miami: 1.056,
    FtLauderdale: 1.056,
    Denver: 1.043,
    WashingtonDC: 1.041,
    Baltimore: 1.01,
    Philadelphia: 1.002,
    Minneapolis: 0.976,
    Atlanta: 0.95,
    Chicago: 0.947,
    Dallas: 0.927,
    Detroit: 0.925,
    StLouis: 0.911,
    Houston: 0.9,
    Tampa: 0.893,
    // State wide
    Alaska: 0.898,
    Hawaii: 1.103
};

// Could search within these arrays to find zip code match for city CPI

const SanDiego = [91911, 91914, 91915, 91932, 91942, 91945, 91950, 92014, 92025, 92027, 92029, 92037, 92064, 92065, 92067, 92071, 92075, 92101, 92102, 92103, 92104, 92105, 92106, 92107, 92108, 92109, 92110, 92111, 92113, 92114, 92115, 92116, 92117, 92118, 92119, 92120, 92121, 92122, 92123, 92124, 92126, 92127, 92128, 92129, 92130, 92131, 92132, 92134, 92135, 92139, 92140, 92145, 92147, 92154, 92173];

const SanFrancisco = [94102, 94103, 94104, 94105, 94107, 94108, 94109, 94110, 94111, 94112, 94114, 94115, 94116, 94117, 94118, 94121, 94122, 94123, 94124, 94127, 94129, 94130, 94131, 94132, 94133, 94134, 94158, 94089, 95002, 95008, 95013, 95014, 95032, 95035, 95037, 95050, 95054, 95070, 95110, 95111, 95112, 95113, 95116, 95117, 95118, 95119, 95120, 95121, 95122, 95123, 95124, 95125, 95126, 95127, 95128, 95129, 95130, 95131, 95132, 95133, 95134, 95135, 95136, 95138, 95139, 95140, 95148, 94577, 94601, 94602, 94603, 94605, 94606, 94607, 94608, 94609, 94610, 94611, 94612, 94613, 94618, 94619, 94621, 94704, 94705];

