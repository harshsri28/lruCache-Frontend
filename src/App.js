import React, { useState } from "react";
import GetCache from "./components/GetCache";
import SetCache from "./components/SetCache";
import DeleteCache from "./components/DeleteCache";
import GetAllCache from "./components/GetAllCache";
import "./App.css";

const App = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleCacheUpdate = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>LRU Cache</h1>
      </header>
      <main>
        <GetAllCache refreshTrigger={refreshTrigger} />
        <SetCache onCacheUpdate={handleCacheUpdate} />
        <GetCache onCacheUpdate={handleCacheUpdate} />
        <DeleteCache onCacheUpdate={handleCacheUpdate} />
      </main>
    </div>
  );
};

export default App;
