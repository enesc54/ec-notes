require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const AuthController = require("./controllers/auth_controller");
const routers = require("./routers");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

const corsOptions = {
    origin: "*", //(https://your-client-app.com)
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/api", routers);

app.use(errorHandler);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
