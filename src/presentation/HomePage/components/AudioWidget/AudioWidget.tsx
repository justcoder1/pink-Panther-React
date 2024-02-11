import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
import { FaVolumeUp } from "react-icons/fa";
import sound from "../../../../assets/HomePage.mp3";

import "./AudioWidget.css";

const AudioWidget: React.FC = () => {
  const [audioState, setAudioState] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSoundTrack = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    audioState ? audioRef.current.pause() : audioRef.current.play();

    setAudioState(!audioState);
  };

  return (
    <>
      <Button id="audioButton" onClick={playSoundTrack} disableRipple>
        <FaVolumeUp id="audioIcon" style={{ color: audioState ? "#b61588" : "grey", opacity: audioState ? 1 : 0.5 }} />
      </Button>
      <audio ref={audioRef} src={sound} hidden />
    </>
  );
};

export default AudioWidget;
