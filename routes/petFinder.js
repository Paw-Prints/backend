const express = require("express");
const router = express.Router();
const { getLocationAndInfo, parseData } = require("../helpers/helpers");
const finalDogInfo = require('../data/petData');

/**
 * POST: get backs breed and location + cost from frontend
 * @param arr type (int, arr, str, etc) : What it expects
 * @returns {arr} type : What it returns
 */
router.post("/", async (req, res) => {
  try {
    let { location, breed } = req.body;

    // grab all the data from petFinder Api {dog data + shelters nearby}
    const petFinderData = await getLocationAndInfo(location, breed);

    // return data back to frontend
    if (petFinderData === undefined) {
      return res
        .status(400)
        .json({
          msg:
            "Location is incorrect, please enter a correct city, state or zipcode."
        });
    }

    //parse data
    const pets = await parseData(petFinderData);
    
    return res.status(200).json({
      costs: finalDogInfo[`${breed}`],
      pets
    });
  } catch (err) {
    res.status(500).json({ msg: "Server Error." });
    console.error(err);
  }
});

module.exports = router;
