import React, { useState } from "react";
import "./display-name.scss";

export default function DisplayName({ userInfo }) {
  const [name, setName] = useState(userInfo);
  return (
    <div>
      <div className="name">Hello {name}</div>
    </div>
  );
}
