import React, { useState, useEffect } from "react";
import GetCache from "./components/GetCache";
import SetCache from "./components/SetCache";
import DeleteCache from "./components/DeleteCache";
import GetAllCache from "./components/GetAllCache";
import "./App.css";
import config from "../src/config/development.json";

const App = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleCacheUpdate = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    let socket;
    const websocketUrl = config.WEBSOCKET_URI;

    const connectWebSocket = () => {
      socket = new WebSocket(websocketUrl);

      socket.onopen = () => {
        console.log("WebSocket connected");
      };

      socket.onmessage = (message) => {
        const data = JSON.parse(message.data);
        if (data.event === "expired") {
          console.log(`Item expired: ${data.data}`);
          handleCacheUpdate();
        }
      };

      socket.onclose = (event) => {
        if (event.wasClean) {
          console.log(
            `WebSocket closed cleanly, code=${event.code} reason=${event.reason}`
          );
        } else {
          console.error(
            `WebSocket connection closed unexpectedly, code=${event.code}`
          );
          setTimeout(connectWebSocket, 5000);
        }
      };

      socket.onerror = (error) => {
        console.error(`WebSocket error: ${error.message}`);
      };
    };

    connectWebSocket();

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

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
