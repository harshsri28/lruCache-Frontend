import React, { useState } from "react";
import axios from "../axios";

const GetCache = ({ onCacheUpdate }) => {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleGetCache = async () => {
    try {
      const response = await axios.get(`/cache/${key}`);
      setValue(response.data.value);
      setError("");
      if (onCacheUpdate) {
        onCacheUpdate();
      }
    } catch (err) {
      setValue("");
      setError("Key not found");
    }
  };

  return (
    <section>
      <h2>Get Cache</h2>
      <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Enter key"
      />
      <button onClick={handleGetCache}>Get Cache</button>
      {value && <div className="result">Value: {value}</div>}
      {error && <div className="error">{error}</div>}
    </section>
  );
};

export default GetCache;
