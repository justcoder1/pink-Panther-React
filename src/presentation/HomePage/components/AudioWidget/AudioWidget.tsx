import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Button } from "@mui/material";
import React, { useId, useRef, useState } from 'react';
import sound from '../../../../assets/HomePage.mp3';

import './AudioWidget.css'

const AudioWidget: React.FC = () => {
  const [audioState, setAudioState] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  

  const playSoundTrack = (): void => {
    audioState ? audioRef.current.play() : audioRef.current.pause();

    setAudioState(!audioState);
  }

  return (
    <>
      <Button id='audioButton' key={`aw_${useId()}`} onClick={playSoundTrack} disableRipple>
        <VolumeUpIcon key={`aw_${useId()}`} id='audioIcon' sx={{color: audioState ? 'grey' : '#b61588', opacity: audioState ? 0.5 : 1}} />
      </Button>
      <audio key={`aw_${useId()}`} ref={audioRef} src={sound} hidden/>
    </>
  );
};

export default AudioWidget;