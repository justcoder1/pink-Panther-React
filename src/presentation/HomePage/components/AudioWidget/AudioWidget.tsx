import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Button } from "@mui/material";
import React, { useId, useRef, useState } from 'react';
import sound from '../../../../assets/HomePage.mp3';

const AudioWidget: React.FC = () => {
  const [audioState, setAudioState] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  

  const playSoundTrack = (): void => {
    audioState ? audioRef.current?.play() : audioRef.current?.pause();
    setAudioState(!audioState);    
  }

  return (
    <>
      <Button onClick={playSoundTrack}>
        <VolumeUpIcon id='audioIcon' />
      </Button>
      <audio key={`aw_${useId()}`} ref={audioRef} src={sound} hidden/>
    </>
  );
};

export default AudioWidget;