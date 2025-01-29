import { useState, useEffect } from "react";
import { Skeleton as S } from "@mui/material";

const Skeleton = ({ width, height, variant = "rounded", marginBottom }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("sabuag-theme") || "light"
  );

  useEffect(() => {
    const handleStorageChange = (event) => {
      // Only handle changes to the "sabuag-theme" key
      if (event.key === "sabuag-theme") {
        setTheme(event.newValue || "light");
      }
    };

    // Listen to storage changes
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <S
      sx={{
        marginBottom: marginBottom,
        bgcolor: theme === "light" ? "rgba(0,0,0,0.07)" : "rgb(31, 38, 46)",
      }}
      variant={variant}
      width={width}
      height={height}
    />
  );
};

export default Skeleton;
