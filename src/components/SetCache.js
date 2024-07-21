import React, { useState } from "react";
import axios from "../axios";
import config from "../config/development.json";

const SetCache = ({ onCacheUpdate }) => {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [duration, setDuration] = useState("");

  const handleSetCache = async () => {
    try {
      await axios.post(config.CREATE_URI, {
        key,
        value,
        duration: parseInt(duration, 10),
      });
      alert("Cache set successfully");
      if (onCacheUpdate) {
        onCacheUpdate();
      }
    } catch (err) {
      alert("Error setting cache");
    }
  };

  return (
    <section>
      <h2>Set Cache</h2>
      <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Enter key"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter value"
      />
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Enter duration (seconds)"
      />
      <button onClick={handleSetCache}>Set Cache</button>
    </section>
  );
};

export default SetCache;
