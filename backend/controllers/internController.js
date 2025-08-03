const interns = require("../data/dummyData.json");

exports.getInterns = (req, res) => {
  res.json(interns);
};
