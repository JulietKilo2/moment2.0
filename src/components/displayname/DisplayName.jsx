import React, { useState } from "react";

export default function DisplayName({ userInfo }) {
  const [name, setName] = useState(userInfo);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}
