
// Weight: pounds, food: cups per day, lifespan: years, grooming: times per year, healthIssues: top health defects and their associated cost
// Food based on this chart: https://www.petmd.com/blogs/nutritionnuggets/dr-coates/2015/july/are-you-feeding-your-dog-right-amount-32905

// Average weight found using Google, adding low end of female, high end of male, /2.

const dogBreeds = {
    "Labrador Retriever": {
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
        },
        weight: 67.5,
        food: 3.375,
        lifespan: {
            Baby: 0,
            Young: 0,
            Adult: 0,
            Senior: 0
        },
        lifespan: 12,
        grooming: 6,
        healthIssues: "Labs are susceptible to eye diseases and joint problems, like hip and elbow dysplasia which cost $1,700 - $4,500 to treat."
    },
    "German Shepherd Dog": {
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
        },
        weight: 68.5,
        food: 3.425,
        lifespan: {
            Baby: 0,
            Young: 0,
            Adult: 0,
            Senior: 0
        },
        lifespan: 11,
        grooming: 6,
        healthIssues: "Hip and elbow dysplasia are health concerns, ranging from $1,700-$4,500 in surgical treatment."
    },
    "Golden Retriever": {
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
        },
        weight: 65,
        food: 3.25,
        lifespan: {
            Baby: 0,
            Young: 0,
            Adult: 0,
            Senior: 0
        },
        lifespan: 11,
        grooming: 6,
        healthIssues: "Hip dysplasia and Von Willebrand Disease are common concerns, ranging from $1,700-$4,500 in surgical treatment."
    },
    "French Bulldog": {
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
        },
        weight: 22,
        food: 1.5,
        lifespan: {
            Baby: 0,
            Young: 0,
            Adult: 0,
            Senior: 0
        },
        lifespan: 12,
        grooming: 6,
        healthIssues: "Frequent respiratory issues, skin and ear diseases, and spinal disease leads to roughly $3,000-$6,000 in anticipated surgical costs."
    },
    "Australian Shepherd": {
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
        },
        weight: 52.5,
        food: 2.67,
        lifespan: {
            Baby: 0,
            Young: 0,
            Adult: 0,
            Senior: 0
        },
        lifespan: 14,
        grooming: 6,
        healthIssues: "Hip and elbow dysplasia are health concerns, ranging from $1,700-$4,500 in surgical treatment."
    },
    "Beagle": {
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
        },
        weight: 22,
        food: 1.5,
        lifespan: {
            Baby: 0,
            Young: 0,
            Adult: 0,
            Senior: 0
        },
        lifespan: 27,
        grooming: 6,
        healthIssues: "Beagles are generally a healthy breed. The most common health issue is cherry eye, about $300-$500 to treat surgically."
    },
    "Poodle": {
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
        },
        weight: 57.5,
        food: 2.875,
        lifespan: {
            Baby: 0,
            Young: 0,
            Adult: 0,
            Senior: 0
        },
        lifespan: 13.5,
        grooming: 12,
        healthIssues: "Hip dysplasia ranges from $1,700-$4,500 in surgical treatment. Eye conditions and thyroid issues are common concerns."
    },
    "Siberian Husky": {
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
        },
        weight: 47.5,
        food: 2.53,
        lifespan: {
            Baby: 0,
            Young: 0,
            Adult: 0,
            Senior: 0
        },
        lifespan: 13.5,
        grooming: 6,
        healthIssues: "10% of Huskies have cataracts or other eye diseases. Treatment costs roughly $2,700-$4,000."
    },
    "Yorkshire Terrier": {
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
        },
        weight: 6,
        food: 0.5,
        lifespan: {
            Baby: 0,
            Young: 0,
            Adult: 0,
            Senior: 0
        },
        lifespan: 14.5,
        grooming: 12,
        healthIssues: "Hypoglycemia is frequent, with treatments from $1,000-$8,000. Legg-Perthes Disease and skin allergies are also common."
    },
    "Pembroke Welsh Corgi": {
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
        },
        weight: 26.5,
        food: 1.55,
        lifespan: {
            Baby: 0,
            Young: 0,
            Adult: 0,
            Senior: 0
        },
        lifespan: 13.5,
        grooming: 6,
        healthIssues: "Hip dysplasia ranges from $1,700-$4,500 in surgical treatment. Lifelong eye conditions and Von Willebrand Disease are common concerns."
    }
};

