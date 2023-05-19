import { Button } from "@mui/material";
import { useState } from "react";

const Body = () => {
  //   const getCurrentTime = () => {

  const [currentTime, setCurrentTime] = useState("");
  //   };

  const checkTime = () => {
    const date = new Date();
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();

    const currentSeconds = date.getSeconds();

    setCurrentTime(
      `${currentHour}:${
        currentMinute < 10 ? `0${currentMinute}` : currentMinute
      }:${currentSeconds < 10 ? `0${currentSeconds}` : `${currentSeconds}`}`
    );
  };

  setInterval(checkTime, 1000);

  return (
    <main>
      <h1>{currentTime || "Hang tight..."}</h1>
      <Button variant="outlined" color="inherit">
        Add Checklist for today
      </Button>
    </main>
  );
};

export default Body;
