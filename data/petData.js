

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
        const monthlyFood = (((value.food * 30) / 4) * 2.19);
        const annualFood = (((value.food * 365) / 4) * 2.19);
        const annualGrooming = (value.grooming * 53);
        const annualMedicalInsurance = ((1037 * 0.2) + value.insurance);
        const annualWithInsurance = ( annualFood + (value.grooming * 53) + 55 + ((1037 * 0.2) + value.insurance) );
        const annualWithout = ( annualFood + (value.grooming * 53) + 55 + 1037 );


        monthly = {
            food: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(monthlyFood),
            grooming: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(annualGrooming/12),
            toysTreats: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format((55/12)),
            medical: {
                withInsurance: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format((103.7 * 0.2) + value.insurance),
                without: "$103.70"
            },
            total: {
                withInsurance: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format( monthlyFood + (annualGrooming / 12) + (55/12) +  ((103.7 * 0.2) + value.insurance)),
                without: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format( monthlyFood + (annualGrooming / 12) + (55/12) + 103.7 )
            }
        };

        annual = {
            food: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(annualFood),
            grooming: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(annualGrooming),
            toysTreats: "$55.00",
            medical: {
                withInsurance: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(annualMedicalInsurance),
                without: "$1037.00"
            },
            total: {
                withInsurance: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(annualWithInsurance),
                without: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(annualWithout)
            }
        };

        const lifetimeTotalWithInsurance = annualWithInsurance * value.lifespan;
        const lifetimeTotalWithout = annualWithout * value.lifespan;
        const lifetimeFood = annualFood * value.lifespan;
        const lifetimeGrooming = annualGrooming * value.lifespan;
        const lifetimeToysTreats = 55 * value.lifespan;
        const lifeTimeMedicalWithInsurance = annualMedicalInsurance + 3000;
        const lifetimeMedicalWithout = (1037 * value.lifespan) + 3000;

        lifetime = {
            Baby: {
                total: {
                    withInsurance: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeTotalWithInsurance + 200),
                    without: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeTotalWithout + 200)
                },
                food: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeFood),
                grooming: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeGrooming),
                toysTreats: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeToysTreats),
                medical: {
                    withInsurance: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifeTimeMedicalWithInsurance),
                    without: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeMedicalWithout)
                },
                miscellaneous: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(45 * value.lifespan)
            },
            Young: {
                total: {
                    withInsurance: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeTotalWithInsurance * 0.75),
                    without: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeTotalWithout * 0.75)
                },
                food: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeFood * 0.75),
                grooming: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeGrooming * 0.75),
                toysTreats: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeToysTreats * 0.75),
                medical: {
                    withInsurance: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifeTimeMedicalWithInsurance * 0.75),
                    without: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeMedicalWithout * 0.75)
                },
                miscellaneous: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format((45 * value.lifespan) * 0.75)
            },
            Adult: {
                total: {
                    withInsurance: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeTotalWithInsurance * 0.5),
                    without: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeTotalWithout * 0.5),
                },
                food: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeFood * 0.5),
                grooming: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeGrooming * 0.5),
                toysTreats: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeToysTreats * 0.5),
                medical: {
                    withInsurance: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifeTimeMedicalWithInsurance * 0.5),
                    without: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeMedicalWithout * 0.5)
                },
                miscellaneous: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format((45 * value.lifespan) * 0.5)
            },
            Senior: {
                total: {
                    withInsurance: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeTotalWithInsurance * 0.25),
                    without: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeTotalWithout * 0.25)
                },
                food: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeFood * 0.25),
                grooming: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeGrooming * 0.25),
                toysTreats: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeToysTreats * 0.25),
                medical: {
                    withInsurance: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifeTimeMedicalWithInsurance * 0.25),
                    without: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lifetimeMedicalWithout * 0.25)
                },
                miscellaneous: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format((45 * value.lifespan) * 0.25)
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
