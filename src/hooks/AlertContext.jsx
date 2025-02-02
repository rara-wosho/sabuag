import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "",
  });

  const showAlert = (message, type = "success") => {
    setAlert({ show: true, message, type });

    setTimeout(() => {
      hideAlert();
    }, 3000);
  };

  const hideAlert = () => {
    setAlert({ show: false, message: "", type: "" });
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
