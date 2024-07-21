# LRU Cache Frontend

This Project facilates LRU(Least Recently Used) functionality and has following UI -

<div style="text-align: center;">
  <img src="images/process1.png" alt="UI 1" width="700" height="300">
  <br><br>
  <img src="images/process2.png" alt="UI 2" width="700" height="300">
  <br><br>
  <img src="images/process3.png" alt="UI 2" width="700" height="300">
</div>

## How to run

**Clone the Repo**

```sh
 git clone https://github.com/harshsri28/lruCache-Frontend.git
```

**Install the Dependency**

```sh
npm i
```

**Run The Application**

```sh
npm start
```

## Features

- **Set Cache:** Add items to the cache with a specified expiration duration.
- **Get Cache:** Retrieve items from the cache by key.
- **Delete Cache:** Remove items from the cache by key.
- **View All Cache Items:** Display all items currently in the cache.
- **Real-time Updates:** Automatically updates the UI when cache items expire, using WebSockets.

## Components

- **App.js**

```sh
- Main component that sets up the WebSocket connection and handles real-time updates. It renders the other components for setting, getting, deleting, and viewing cache items.
- In App.js, a WebSocket connection is established to the backend. When a cache item expires, the backend sends a message to the frontend, which triggers a UI update.
```

- **SetCache.js**

```sh
Component for setting cache items. It includes input fields for the key, value, and duration, and a button to submit the data.
```

- **GetCache.js**

```sh
Component for getting cache items by key. It includes an input field for the key and a button to retrieve the value.
```

- **DeleteCache.js**

```sh
Component for deleting cache items by key. It includes an input field for the key and a button to delete the item.
```

- **GetAllCache.js**

```sh
Component for viewing all cache items. It displays the keys and values in a table and includes a button to refresh the list.
```
