import React, { useState, useEffect } from "react";
import axios from "axios";

const Statistics = ({ month }) => {
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    fetchStatistics();
  }, [month]);

  const fetchStatistics = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/statistics`, {
        params: { month },
      });
      setStatistics(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Statistics for {month}</h3>
      <div>Total Sale Amount: {statistics.totalSales}</div>
      <div>Total Sold Items: {statistics.soldItems}</div>
      <div>Total Not Sold Items: {statistics.notSoldItems}</div>
    </div>
  );
};

export default Statistics;
