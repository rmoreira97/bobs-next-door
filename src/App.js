import React, { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import NewStoreForm from "./components/NewStoreForm";
import StoreList from "./components/StoreList";

function App() {
  const [stores, setStores] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8085/stores")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch stores.");
        }
        return response.json();
      })
      .then((data) => setStores(data))
      .catch((error) => {
        console.error("There was an error fetching the stores:", error);
      });
  }, []);

  const filteredStores = stores.filter((store) =>
    store.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function deleteStore(id) {
    fetch(`http://localhost:8085/stores/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        setStores((prevStores) =>
          prevStores.filter((store) => store.id !== id)
        );
      } else {
        console.error("Failed to delete the store with ID:", id);
      }
    });
  }

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" alt="Bobs Burgers Logo" />
      <h1>Neighbor Stores</h1>
      <Search onSearch={setSearchTerm} />
      <div className="form-container">
        <NewStoreForm
          onAdd={(newStore) =>
            setStores((prevStores) => [newStore, ...prevStores])
          }
        />
        <button className="edit-button" onClick={() => setEditMode(!editMode)}>
          {editMode ? "Exit Edit Mode" : "Edit Mode"}
        </button>
      </div>
      <StoreList
        stores={filteredStores}
        editMode={editMode}
        onDelete={deleteStore}
      />
    </div>
  );
}

export default App;
