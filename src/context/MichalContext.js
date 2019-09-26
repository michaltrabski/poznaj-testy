import React from "react";
import config from "../config/Config";

const MichalContext = React.createContext({
  ...config
});

export default MichalContext;
