const express = require("express");
const router = express.Router();
const { getLocationAndInfo, parseData } = require("../helpers/helpers");

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

    //parse data
    const pets = await parseData(petFinderData);

    // return data back to frontend
    if (petFinderData === undefined) {
      return res.status(400).json({ msg: "No dogs matched that breed :(." });
    }

    return res.status(200).json({
      costs: {
        monthlyCost: 0,
        lifetimeCost: 0,
        grooming: 0,
        food: 0,
        insurance: 0
      },
      pets
    });
  } catch (err) {
    res.status(500).json({ msg: "Servor Error." });
    console.error(err);
  }
});

module.exports = router;
