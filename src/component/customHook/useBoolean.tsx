import { useState } from "react";

const useBoolean = () => {
  const [bool, setBool] = useState(false);

  const toggle = () => {
    setBool(!bool);
  };
  return {
    bool,
    toggle,
  };
};

export default useBoolean;
