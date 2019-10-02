const express = require("express");
const router = express.Router();
const { getLocationAndInfo } = require("../helpers/helpers");

/**
 * POST: get backs breed and location from frontend
 * @param arr type (int, arr, str, etc) : What it expects
 * @returns {arr} type : What it returns
 */
router.post("/", async (req, res) => {
  try {
    let { location, breed } = req.body;

    // grab all the data from petFinder Api {dog data + shelters nearby}
    const petFinderData = await getLocationAndInfo(location, breed);

    console.log("server api", petFinderData);

    //parse data

    // return data back to frontend
    return res.status(200).json(petFinderData);
  } catch (err) {
    res.status(500).json({ msg: "Servor Error." });
    console.error(err);
  }
});

module.exports = router;
