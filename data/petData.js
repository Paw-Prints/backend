
// This file exports finalDogInfo, an object containing the calculated estimated costs for each breed


// Weight: pounds, food: cups per day, lifespan: years, grooming: times per year, healthIssues: top health defects and their associated cost
// Food based on this chart: https://www.petmd.com/blogs/nutritionnuggets/dr-coates/2015/july/are-you-feeding-your-dog-right-amount-32905

// Average annual vet cost?

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

const createDogInfo = (dogs) => {
    finalObject = {}

    for(const [key, value] of Object.entries(dogs)){

        // Food calculated by multiplying daily eaten in cups, times number of days. This is divided by 4 (4 cups per pound of dog food on average), times $2.19, the average cost of dog food nationally
        let monthlyFood = parseInt( (((value.food * 30) / 4) * 2.19).toFixed());
        let annualFood = parseInt( (((value.food * 365) / 4) * 2.19).toFixed());

        monthly = {
            food: monthlyFood,
            grooming: ((value.grooming * 53) / 12),
            toysTreats: parseInt((55/12).toFixed()),
            medical: {
                withInsurance: parseInt(((103.7 * 0.2) + value.insurance).toFixed()),
                without: 103.7
            },
            total: {
                withInsurance: ( monthlyFood + ((value.grooming * 53) / 12) + parseInt((55/12).toFixed()) +  parseInt(((103.7 * 0.2) + value.insurance).toFixed())),
                without: ( monthlyFood + ((value.grooming * 53) / 12) + parseInt((55/12).toFixed()) + 103.7 )
            }
        };

        annual = {
            food: annualFood,
            grooming: (value.grooming * 53),
            toysTreats: 55,
            medical: {
                withInsurance: parseInt(((1037 * 0.2) + value.insurance).toFixed()),
                without: 1037
            },
            total: {
                withInsurance: ( annualFood + (value.grooming * 53) + 55 + parseInt(((1037 * 0.2) + value.insurance).toFixed()) ),
                without: ( annualFood + (value.grooming * 53) + 55 + 1037 )
            }
        };

        const lifetimeTotalWithInsurance = annual.total.withInsurance * value.lifespan;
        const lifetimeTotalWithout = annual.total.without * value.lifespan;
        const lifetimeFood = annual.food * value.lifespan;
        const lifetimeGrooming = annual.grooming * value.lifespan;
        const lifetimeToysTreats = 55 * value.lifespan;
        const lifeTimeMedicalWithInsurance = (annual.medical.withInsurance * value.lifespan) + 3000;
        const lifetimeMedicalWithout = (annual.medical.without * value.lifespan) + 3000;

        lifetime = {
            Baby: {
                total: {
                    withInsurance: lifetimeTotalWithInsurance + 200,
                    without: (lifetimeTotalWithout + 200)
                },
                food: lifetimeFood,
                grooming: lifetimeGrooming,
                toysTreats: lifetimeToysTreats,
                medical: {
                    withInsurance: lifeTimeMedicalWithInsurance,
                    without: lifetimeMedicalWithout
                },
                miscellaneous: (45 * value.lifespan)
            },
            Young: {
                total: {
                    withInsurance: parseInt((lifetimeTotalWithInsurance * 0.75).toFixed()),
                    without: parseInt((lifetimeTotalWithout * 0.75).toFixed())
                },
                food: parseInt((lifetimeFood * 0.75).toFixed()),
                grooming: parseInt((lifetimeGrooming * 0.75).toFixed()),
                toysTreats: parseInt((lifetimeToysTreats * 0.75).toFixed()),
                medical: {
                    withInsurance: parseInt((lifeTimeMedicalWithInsurance * 0.75).toFixed()),
                    without: parseInt((lifetimeMedicalWithout * 0.75).toFixed())
                },
                miscellaneous: parseInt(((45 * value.lifespan) * 0.75).toFixed())
            },
            Adult: {
                total: {
                    withInsurance: parseInt((lifetimeTotalWithInsurance * 0.5).toFixed()),
                    without: parseInt((lifetimeTotalWithout * 0.5).toFixed()),
                },
                food: parseInt((lifetimeFood * 0.5).toFixed()),
                grooming: parseInt((lifetimeGrooming * 0.5).toFixed()),
                toysTreats: parseInt((lifetimeToysTreats * 0.5).toFixed()),
                medical: {
                    withInsurance: parseInt((lifeTimeMedicalWithInsurance * 0.5).toFixed()),
                    without: parseInt((lifetimeMedicalWithout * 0.5).toFixed())
                },
                miscellaneous: parseInt(((45 * value.lifespan) * 0.5).toFixed())
            },
            Senior: {
                total: {
                    withInsurance: parseInt((lifetimeTotalWithInsurance * 0.25).toFixed()),
                    without: parseInt((lifetimeTotalWithout * 0.25).toFixed())
                },
                food: parseInt((lifetimeFood * 0.25).toFixed()),
                grooming: parseInt((lifetimeGrooming * 0.25).toFixed()),
                toysTreats: parseInt((lifetimeToysTreats * 0.25).toFixed()),
                medical: {
                    withInsurance: parseInt((lifeTimeMedicalWithInsurance * 0.25).toFixed()),
                    without: parseInt((lifetimeMedicalWithout * 0.25).toFixed())
                },
                miscellaneous: parseInt(((45 * value.lifespan) * 0.25).toFixed())
            }
        };

        finalObject[key] = {
            monthly: monthly,
            annual: annual,
            lifetime: lifetime,
            healthIssues: value.healthIssues
        };
    }

    return finalObject
};

const finalDogInfo = createDogInfo(dogBreeds);

module.exports = finalDogInfo;