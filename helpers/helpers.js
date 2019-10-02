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
    pet["images"] = data.animals[i].photos;
    pet["listingLink"] = data.animals[i].url;
    pet["description"] = data.animals[i].description;
    pet["age"] = data.animals[i].age;
    pet["name"] = data.animals[i].name;
    pet["attributes"] = data.animals[i].attributes;

    pets.push(pet);
  }
  return pets;
};

// grabs data from petFinder api
const getLocationAndInfo = async (location, breed) => {
  try {
    console.log("helper", location, breed);
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
