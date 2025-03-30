import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid
} from "recharts";

const API_URL = "https://api.tradingeconomics.com/country/mexico";

const App = () => {
  const [tradeData, setTradeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: { c: process.env.REACT_APP_TE_API_KEY },
        });
        setTradeData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Mexico Trade Dashboard</h1>
        {/* Line Chart */}
        <LineChart margin={{ left: 60, right: 30, top: 5, bottom: 5 }} width={1000} height={600} data={tradeData}>
        <XAxis dataKey="Category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey="LatestValue" stroke="#8884d8" />
      </LineChart>

      {/* Table */}
      <table border="1" cellPadding="10" style={{ width: "100%", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Latest Value</th>
            <th>Previous Value</th>
            <th>Unit</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          {tradeData.map((item, index) => (
            <tr key={index}>
              <td>{item.Category}</td>
              <td><a href={item.SourceURL} target="_blank" rel="noopener noreferrer">{item.Title}</a></td>
              <td>{item.LatestValue}</td>
              <td>{item.PreviousValue}</td>
              <td>{item.Unit}</td>
              <td>{item.Source}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  );
};

export default App;
