import React from "react";

function Store({ store, editMode, onDelete }) {
  return (
    <tr>
      <td className="row-name">
        <span>{store.name}</span>
      </td>
      <td>
        <a href={store.image} target="_blank" rel="noopener noreferrer">
          <b>&#8599;</b>
        </a>
      </td>
      <td>
        <span>{store.season}</span>
      </td>
      <td>
        <span>{store.episode}</span>
      </td>
      {editMode && (
        <td>
          <button onClick={() => onDelete(store.id)}>Delete</button>
        </td>
      )}
    </tr>
  );
}

export default Store;
