import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React, { useId, useRef, useState } from "react";
import sound from "../../../../assets/HomePage.mp3";

import "./AudioWidget.css";

const AudioWidget: React.FC = () => {
  const [audioState, setAudioState] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSoundTrack = (): void => {
    audioState ? audioRef.current.pause() : audioRef.current.play();

    setAudioState(!audioState);
  };

  return (
    <>
      <Button id="audioButton" key={`aw_${useId()}`} onClick={playSoundTrack} disableRipple>
        <FontAwesomeIcon
          icon="volume-up"
          key={`aw_${useId()}`}
          id="audioIcon"
          style={{ color: audioState ? "#b61588" : "grey", opacity: audioState ? 1 : 0.5 }}
        />
      </Button>
      <audio key={`aw_${useId()}`} ref={audioRef} src={sound} hidden />
    </>
  );
};

export default AudioWidget;
