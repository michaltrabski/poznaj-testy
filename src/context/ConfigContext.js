import React from "react";

// here I place some configurations that user is not able to change

export const config = {
  enableRemoveQuestionButton: false
};

const ConfigContext = React.createContext({
  config
});

export default ConfigContext;
