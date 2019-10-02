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

// grabs data from petFinder api
const getLocationAndInfo = async (location, breed) => {
  try {
    console.log("helper", location, breed);
    const token = await getToken();

    const pets = await axios(
      `https://api.petfinder.com/v2/animals?breed=${breed}&location=${location}&limit=10&sort=distance`,
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
  getLocationAndInfo
};
