
// Weight: pounds, food: cups per day, lifespan: years, grooming: times per year, healthIssues: top health defects and their associated cost
// Food based on this chart: https://www.petmd.com/blogs/nutritionnuggets/dr-coates/2015/july/are-you-feeding-your-dog-right-amount-32905

// Average annual vet cost?

sampleObject = {
    monthly: {
        total: 0,
        food: 0,
        grooming: 0,
        toysTreats: 0,
        medical: {
            withInsurance: 0,
            without: 0
        }
    },
    annual: {
        total: 0,
        food: 0,
        grooming: 0,
        toysTreats: 0,
        medical: {
            withInsurance: 0,
            without: 0
        }
    },
    lifetime: {
        Baby: {
            total: 0,
            food: 0,
            grooming: 0,
            toysTreats: 0,
            medical: {
                withInsurance: 0,
                without: 0
            }
        },
        Young: {
            total: 0,
            food: 0,
            grooming: 0,
            toysTreats: 0,
            medical: {
                withInsurance: 0,
                without: 0
            }
        },
        Adult: {
            total: 0,
            food: 0,
            grooming: 0,
            toysTreats: 0,
            medical: {
                withInsurance: 0,
                without: 0
            }
        },
        Senior: {
            total: 0,
            food: 0,
            grooming: 0,
            toysTreats: 0,
            medical: {
                withInsurance: 0,
                without: 0
            }
        }
    }
};

const dogBreeds = {
    "Labrador Retriever": {
        weight: 67.5,
        food: 3.375,
        lifespan: 12,
        grooming: 6,
        insurance: 53.82,
        healthIssues: "Labs are susceptible to eye diseases and joint problems, like hip and elbow dysplasia which cost $1,700 - $4,500 to treat."
    },
    "German Shepherd Dog": {
        weight: 68.5,
        food: 3.425,
        lifespan: 11,
        grooming: 6,
        insurance: 50.16,
        healthIssues: "Hip and elbow dysplasia are health concerns, ranging from $1,700-$4,500 in surgical treatment."
    },
    "Golden Retriever": {
        weight: 65,
        food: 3.25,
        lifespan: 11,
        grooming: 6,
        insurance: 55,
        healthIssues: "Hip dysplasia and Von Willebrand Disease are common concerns, ranging from $1,700-$4,500 in surgical treatment."
    },
    "French Bulldog": {
        weight: 22,
        food: 1.5,
        lifespan: 12,
        grooming: 6,
        insurance: 56.72,
        healthIssues: "Frequent respiratory issues, skin and ear diseases, and spinal disease leads to roughly $3,000-$6,000 in anticipated surgical costs."
    },
    "Australian Shepherd": {
        weight: 52.5,
        food: 2.67,
        lifespan: 14,
        grooming: 6,
        insurance: 42.23,
        healthIssues: "Hip and elbow dysplasia are health concerns, ranging from $1,700-$4,500 in surgical treatment."
    },
    "Beagle": {
        weight: 22,
        food: 1.5,
        lifespan: 27,
        grooming: 6,
        insurance: 47.08,
        healthIssues: "Beagles are generally a healthy breed. The most common health issue is cherry eye, about $300-$500 to treat surgically."
    },
    "Poodle": {
        weight: 57.5,
        food: 2.875,
        lifespan: 13.5,
        grooming: 12,
        insurance: 35.92,
        healthIssues: "Hip dysplasia ranges from $1,700-$4,500 in surgical treatment. Eye conditions and thyroid issues are common concerns."
    },
    "Siberian Husky": {
        weight: 47.5,
        food: 2.53,
        lifespan: 13.5,
        grooming: 6,
        insurance: 43.21,
        healthIssues: "10% of Huskies have cataracts or other eye diseases. Treatment costs roughly $2,700-$4,000."
    },
    "Yorkshire Terrier": {
        weight: 6,
        food: 0.5,
        lifespan: 14.5,
        grooming: 12,
        insurance: 33.78,
        healthIssues: "Hypoglycemia is frequent, with treatments from $1,000-$8,000. Legg-Perthes Disease and skin allergies are also common."
    },
    "Pembroke Welsh Corgi": {
        weight: 26.5,
        food: 1.55,
        lifespan: 13.5,
        grooming: 6,
        insurance: 43.70,
        healthIssues: "Hip dysplasia ranges from $1,700-$4,500 in surgical treatment. Lifelong eye conditions and Von Willebrand Disease are common concerns."
    }
};

const averageAnnualMedical = 1037

const createDogInfo = (dogs) => {
    finalObject = {}

    for(const [key, value] of Object.entries(dogs)){
        monthly = {
            food: parseInt((value.food * 30).toFixed()),
            grooming: ((value.grooming * 53) / 12),
            toysTreats: parseInt((55/12).toFixed()),
            medical: {
                withInsurance: parseInt(((103.7 * 0.2) + value.insurance).toFixed()),
                without: 103.7
            } 
        };

        annual = {
            food: parseInt((value.food * 365).toFixed()),
            grooming: (value.grooming * 53),
            toysTreats: 55,
            medical: {
                withInsurance: parseInt(((1037 * 0.2) + value.insurance).toFixed()),
                without: 1037
            } 
        };

        // total: 0,
        // food: 0,
        // grooming: 0,
        // toysTreats: 0,
        // medical: {
        //     withInsurance: 0,
        //     without: 0
        // }


        lifetime = {
            Baby: {},
            Young: {},
            Adult: {},
            Senior: {}
        };

        finalObject[key] = {
            monthly: monthly,
            annual: annual,
            lifetime: lifetime
        };
    }

    console.log(finalObject)
};

createDogInfo(dogBreeds);