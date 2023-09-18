import React from "react";

function NewStoreForm({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const newStore = {
      name: e.target.name.value,
      image: e.target.image.value,
      season: Number(e.target.season.value),
      episode: Number(e.target.episode.value),
    };

    fetch("http://localhost:8085/stores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStore),
    })
      .then((response) => response.json())
      .then((data) => {
        onAdd(data);
        e.target.reset(); // Resetting the form
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Store Name" />
      <input type="text" name="image" placeholder="Image URL" />
      <input type="number" name="season" placeholder="Season" step="1" />
      <input type="number" name="episode" placeholder="Episode" step="1" />
      <button type="submit">Add Store</button>
    </form>
  );
}

export default NewStoreForm;
