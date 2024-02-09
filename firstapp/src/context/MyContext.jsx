// MyContext.js
import React, { createContext, useState } from 'react';

const MyContext = createContext();
const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState('Default Value');

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <MyContext.Provider value={{ value, updateValue }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
