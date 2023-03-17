import React, { useState } from "react";

const ListItem = (props) => {
  const [isChecked, setChecked] = useState(false);

  const { listDetails, onDelete } = props;
  const { id, name } = listDetails;

  const onClickDelete = () => {
    onDelete(id);
  };

  const hideOrShowBtn = (e) => {
    console.log(e.target.checked);
    setChecked(e.target.checked);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          hideOrShowBtn(e);
        }}
      />
      <h4>{name} </h4>
      {isChecked && (
        <button type="button" onClick={onClickDelete}>
          Delete
        </button>
      )}
    </div>
  );
};

export default ListItem;
