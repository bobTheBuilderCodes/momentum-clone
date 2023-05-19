import { Repeat, VolumeOff, VolumeMute } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";

const Footer = () => {
  const [muteMusic, setMuteMusic] = useState(false);

  const muteMusicHandler = () => {
    return setMuteMusic(!muteMusic);
  };
  return (
    <footer>
      <div>Music goes here</div>
      <div>
        <IconButton>
          <Repeat htmlColor="white" />
        </IconButton>
        {muteMusic ? (
          <IconButton onClick={muteMusicHandler}>
            <VolumeOff htmlColor="white" />
          </IconButton>
        ) : (
          <IconButton>
            <VolumeMute htmlColor="white" />
          </IconButton>
        )}
      </div>
    </footer>
  );
};

export default Footer;
