require("dotenv").config();
const axios = require("axios");

const getToken = async () => {
  try {
    const b = await axios.post("https://api.petfinder.com/v2/oauth2/token", {
      client_id: process.env.PETFINDER_API_KEY,
      client_secret: process.env.PETFINDER_SECRET,
      grant_type: "client_credentials"
    });

    return b.data.access_token;
  } catch (err) {
    console.log(error);
  }
};

//parse data from petFinder api
const parseData = async data => {
  const pets = [];
  for (let i = 0; i < data.animals.length; i++) {
    const pet = {};
    pet["images"] = data.animals[i].photos; //array of photos with obj of sizes
    pet["listingLink"] = data.animals[i].url; // url linking them to dog listing
    pet["description"] = data.animals[i].description; //description of dog
    pet["age"] = data.animals[i].age; // age of dog
    pet["name"] = data.animals[i].name; //name of dog

    if (Number(pet["name"]) === Number) {
      //if dog has a number for name, give default name
      pet["name"] = "Uknown Name: Dog";
    }

    pet["contact"] = data.animals[i].contact; //contact info for shelter
    pet["breeds"] = data.animals[i].breeds; //types of breeds the dog is
    pet["distance"] = data.animals[i].distance; //distance from the location inputed
    pet["attributes"] = data.animals[i].attributes; // small facts about dog

    pets.push(pet);
  }
  return pets;
};

// grabs data from petFinder api
const getLocationAndInfo = async (location, breed) => {
  try {
    //console.log("helper", location, breed);
    const token = await getToken();

    const pets = await axios(
      `https://api.petfinder.com/v2/animals?breed=${breed}&location=${location}&limit=10&sort=distance&status=adoptable`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    return pets.data;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getLocationAndInfo,
  parseData
};
