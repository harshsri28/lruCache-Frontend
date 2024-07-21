import React, { useState } from "react";
import axios from "../axios"; 

const DeleteCache = ({ onCacheUpdate }) => {
  const [key, setKey] = useState("");

  const handleDeleteCache = async () => {
    try {
      await axios.delete(`/cache/${key}`);
      alert("Cache deleted successfully");
      if (onCacheUpdate) {
        onCacheUpdate();
      }
    } catch (err) {
      alert("Error deleting cache");
    }
  };

  return (
    <section>
      <h2>Delete Cache</h2>
      <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Enter key"
      />
      <button onClick={handleDeleteCache}>Delete Cache</button>
    </section>
  );
};

export default DeleteCache;
