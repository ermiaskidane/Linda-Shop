import React from "react";

import SingUp from "./signUp/singUp";
import FootCategory from "./footCategory/footCategory";
import "./footer.scss";

const footer = () => {
  return (
    <footer>
      <SingUp />
      <FootCategory />
    </footer>
  );
};

export default footer;
