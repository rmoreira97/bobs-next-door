import React from "react";
import Store from "./Store";

function StoreList({ stores, editMode, onDelete }) {
  return (
    <table>
      <tbody>
        <tr>
          <th className="row-name">Name</th>
          <th>Image</th>
          <th>Season</th>
          <th>Episode</th>
          {editMode && <th>Action</th>}
        </tr>
        {stores.map((store) => (
          <Store
            key={store.id}
            store={store}
            editMode={editMode}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default StoreList;
