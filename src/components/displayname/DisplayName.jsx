import React, { useState } from "react";

export default function DisplayName({ userInfo }) {
  const [name, setName] = useState(userInfo);
  return (
    <div>
      <div>Hello {name}</div>
    </div>
  );
}
