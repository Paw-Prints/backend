# Paw Prints Backend

|   [**Joseph Rios**](https://github.com/orgs/Paw-Prints/people/josephriosIO)  |    [**Julie Jonak**](https://github.com/juliejonak)    |
|:----------------:|:----------------:|
| [<img src="https://avatars2.githubusercontent.com/u/43492172?s=400&v=4" width="80">](https://github.com/orgs/Paw-Prints/people/josephriosIO) | [<img src="https://avatars0.githubusercontent.com/u/41002881?s=460&v=4" width="80">](https://github.com/juliejonak) |
| [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/orgs/Paw-Prints/people/josephriosIO)  | [<img src="https://github.com/favicon.ico" width="15"> Github](https://github.com/juliejonak)  | 
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/josephiosdev/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> LinkedIn](https://www.linkedin.com/in/juliejonak/) | 

<br>

The Paw Prints API is deployed with Heroku and can be found [here](https://paw-prints.herokuapp.com/).

[Paw Prints](https://optimistic-brattain-b3415e.netlify.com/) is a web application that helps potential dog adopters locate nearby dogs available for adoption and provides an estimated budget required to adopt. 

The American Humane Association found that [1 in 10 pets is no longer in their adoptive home just six months later](https://news.orvis.com/dogs/pet-adoption-statistics-the-numbers-behind-the-need), with one commonly cited reason for surrender being unexpected cost. Our goal is to inform potential adopters of the lifetime costs of dog ownership to reduce the rate of return. Ou API provides estimated monthly, annual and lifetime costs based on dog breed and comparisons for average savings with pet insurance.

Paw Prints API was built with [Node.js](https://www.nodejs.org/en) with [Express](http://expressjs.com), integrating the [PetFinder API](https://www.petfinder.com/developers/).

<br>

The current dog breeds Paw Prints provides information for are:

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
<br>

## To Use

After forking and cloning, in your local repo, setup an `.env` file with the following variables:

```
PORT = {Your chosen port number locally}
PETFINDER_API_KEY = {Your Petfinder API Key}
PETFINDER_SECRET = {Your Petfinder API Secret}
```

<br>

## API

The API endpoint to hit with a POST request is `https://paw-prints.herokuapp.com/api/`.

For more information about what to send and what data to expect in return, [see the API data model here](./data/data_model.md).

<br>

## Future Goals

In the future, our team would like to improve this API by:

- Integrating the Nationwide Pet Insurance API to provide more accurate quotes and a quick way to apply for pet insurance
- Adding more popular dog breeds
- Find more specific data to base cost estimates on
- Publish this API with additional endpoints to make the data compiled accesible to other projects

<br>

## How Costs Were Estimated

Due to a lack of data on pet ownership costs in one source, and limitations working with the Nationwide Pet Insurance API, our team ultimately compiled data from a variety of sources and calculated estimated monthly, annual and lifetime costs based on dog breed.

Here is a breakdown of those figures and sources:

<br>

### Food

To calculate the average food costs, our team found the average weight of an adult of each breed, using Google's dog breed information. We found the median between the low end weight of a female and the high end weight of a male.

Based on the average weight and [this chart](https://www.petmd.com/blogs/nutritionnuggets/dr-coates/2015/july/are-you-feeding-your-dog-right-amount-32905), we found the average daily amount of food each breed would eat in cups.

The average dog food yields 4 cups per pound, and based on the average large sized bag of dog food's cost in the United States, we cound that the [average price per pound of food is $2.19](https://www.petfoodindustry.com/articles/7836-chewy-dog-food-price-per-pound-analyzed-royal-canin-tops).

As seen in our [petData file](./data/petData.js), we found the monthly and annual food costs by multiplying the number of days in that timeframe by the breed's average daily consumption in cups, divided by 4 to find the weight in pounds, and multiplied by the average food costs.

Food costs will vary based on quality, age of the dog, and size of the bag purchased by the owner.

<br>

### Grooming

After conducting research with the [American Kennel Club](https://www.akc.org), our team found that the average dog will go in for professional grooming about once every two months, unless they are a high maintenance dog, such as a Poodle or Yorkie, who will go in roughly once per month.

The United States average cost for professional grooming is $50, according to [HomeGuide](https://homeguide.com/costs/dog-grooming-prices), but will vary with personal preference, size of the dog, how easy the dog is to handle, and average cost of living in the area.

Our algorithm estimated 6 visits per year at $50 per visit for average maintenance dogs, and 12 visits per year for high maintenance dogs. It did not take into account age or weight of the breed, though it could in the future.

<br>

### Toys & Treats

Based on [The Simple Dollar's breakdown of pet costs](https://www.thesimpledollar.com/pet-cost-calculator/), we allocated $55 per year towards treats and toys.

<br>

### Insurance and Medical Costs

Referencing [consumer reports](https://www.consumerreports.org/pet-products/is-pet-insurance-worth-cost/) and [Value Penguin's Pet Insurance Comparison Tool](https://www.valuepenguin.com/pet-insurance/average-cost-of-pet-insurance), as well as weighing [The Simple Dollar's breakdown of pet costs](https://www.thesimpledollar.com/pet-cost-calculator/), our team estimated the average medical costs of each breed annually.

The medical costs cover annual veterinary visits, vaccine and booster shots, flea and heartworm medication, and dental cleanings, for [an average of $1,037](https://www.valuepenguin.com/pet-insurance/average-cost-of-pet-insurance), without insurance. 

Assuming a standard pet insurance plan that covers accidents, illness and wellness visits, with a $250 deductible, $5000 annual limit, and 80% reimbursement policy, the total average amount an owner would spend annually is $207.40 out-of-pocket, before adding in monthly insurance costs.

<br>

We used those figures as a baseline amount to calculate medical costs, to provide a total for owners who choose to purchase pet insurance, or not, and allow prospective owners to see the potential benefits of insurance.

The insurance costs per breed were calculated with the [Value Penguin tool](https://www.valuepenguin.com/pet-insurance/average-cost-of-pet-insurance), averaging the cost of plans available as both a 1-year-old dog and 5+ year-old dog. By using both ages, we found a "lifetime" average amount for insurance per month.

The total monthly and annual medical costs _with_ insurance added a breed's monthly insurance payment to the $207.40 estimated out-of-pocket costs.

<br>

### Health Concerns

Using the [American Kennel Club](https://www.akc.org) and Google, our team evaluated the top health concerns for each breed, as well as the average associated surgical costs if a pet needs to be treated for that ailment.

While we did not add this into the final lifetime costs, because it is variable to each animal, we did add it as pre-cautionary information to be aware of when choosing a dog.

<br>

### Lifetime Calculations

Averaging information from the [American Kennel Club](https://www.akc.org) and Google, we landed on a lifespan estimate for each breed, to multiply each annual cost by to determine the lifetome aggregate cost of that dog breed in each major category.

The PetFinder API returns age as one of four categorizations: `Baby`, `Young`, `Adult` and `Senior`.

Using these designations, we averaged the remaining lifetime costs of each individual dog breed at that age as `100%` (Baby), `75%` (Young), `50%` (Adult) and `25%` (Senior) of entire lifetime costs determined by lifespan.

<br>

In addition to those annually calculated costs, we added some additional costs depending on the dog. If the dog is a puppy ("Baby"), we added $200 estimated training costs for house and obedience training.

Majority of pet owners cite at least [one emergency health incident](https://www.thesimpledollar.com/pet-cost-calculator/) that cost them $2,000-$4,000 out of pocket during a pet's lifetime. To accomodate for an emergency fund, we added $3,000 to the lifetime medical costs, to both insured and un-insured pets.

<br>

Based on [The Simple Dollar's breakdown of pet costs](https://www.thesimpledollar.com/pet-cost-calculator/), we allocated $45 per year towards miscellaneous purchases, but did not add that to the annual estimate. Instead, it was added into lifetime costs as a variable amount based on the breed's average lifespan.

<br>
<br>