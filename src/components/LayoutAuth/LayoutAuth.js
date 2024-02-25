import React, { useState } from "react";
import { Segmented } from "antd";

import "./LayoutAuth.css";
import Login from "../Login/Login";

const LayoutAuth = () => {
  const options = [
    { label: "OWNER", value: 1 },
    { label: "USER", value: 2 },
  ];
  const [value, setValue] = useState(1);
  const handleBtn = (value) => {
    setValue(value);
  };

  return (
    <div className="content-center">
      <Segmented
        size="large"
        defaultValue={1}
        className="height-segmented"
        style={{
          marginBottom: 8,
          backgroundColor: "#D9D9D9",
        }}
        onChange={handleBtn}
        options={options}
        block={true}
      />
      <Login value={value} />
    </div>
  );
};

export default LayoutAuth;
