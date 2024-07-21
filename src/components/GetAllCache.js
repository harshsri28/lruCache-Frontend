import React, { useState, useEffect } from "react";
import axios from "../axios"; // Use the axios instance

const GetAllCache = ({ refreshTrigger }) => {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchAllCache = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/cache");
      setItems(response.data.items);
    } catch (err) {
      console.error("Error fetching all cache items:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAllCache();
  }, [refreshTrigger]);

  return (
    <section>
      <h2>All Cache Items</h2>
      <button onClick={fetchAllCache} disabled={loading}>
        {loading ? "Loading..." : "Refresh Cache"}
      </button>
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(items).length === 0 ? (
            <tr>
              <td colSpan="2" className="empty-message">
                No items in cache
              </td>
            </tr>
          ) : (
            Object.entries(items).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
};

export default GetAllCache;
