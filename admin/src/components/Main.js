import React, { useState } from "react";
import TransactionTable from "./TransactionTable";
import Statistics from "./Statistics";
import BarChart from "./BarChart";
import Select from "react-select";

const monthOptions = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];

const Main = () => {
  const [month, setMonth] = useState("March");
  const [search, setSearch] = useState("");

  return (
    <div>
      <h1>Transaction Dashboard</h1>
      <Select
        options={monthOptions}
        defaultValue={{ value: "March", label: "March" }}
        onChange={(option) => setMonth(option.value)}
      />
      <input
        type="text"
        placeholder="Search transactions"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <TransactionTable month={month} search={search} />
      <Statistics month={month} />
      <BarChart month={month} />
    </div>
  );
};

export default Main;
