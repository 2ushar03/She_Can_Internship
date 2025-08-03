const express = require("express");
const app = express();
const cors = require("cors");
const internRoutes = require("./routes/internRoutes");

app.use(cors());
app.use("/api/interns", internRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
