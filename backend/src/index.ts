import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { json } from "body-parser";
import { fetchAndSeedData } from "./services/fetchData";
import transactionRoutes from "./routes/transactionRoutes";
import statisticsRoutes from "./routes/statisticsRoutes";
import barChartRoutes from "./routes/barChartRoutes";
import pieChartRoutes from "./routes/pieChartRoutes";
import combinedDataRoutes from "./routes/combinedDataRoutes";

const app = express();
app.use(json());

createConnection()
  .then(async () => {
    console.log("Connected to the database");

    await fetchAndSeedData();

    app.use("/api/transactions", transactionRoutes);
    app.use("/api/statistics", statisticsRoutes);
    app.use("/api/bar-chart", barChartRoutes);
    app.use("/api/pie-chart", pieChartRoutes);
    app.use("/api/combined-data", combinedDataRoutes);

    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.log(error));
