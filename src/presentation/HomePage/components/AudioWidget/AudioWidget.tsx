// import VolumeUpIcon from '@mui/icons-material/VolumeUp';
// import { Button } from "@mui/material";
import React, { useRef, useId } from 'react';

export interface AudioWidgetProps {
  link: string
}

const AudioWidget: React.FC<AudioWidgetProps> = ({link}) => {
  // const [audioState, setAudioState] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  

  // const playSoundTrack = () => {
  //   audioState ? document.querySelector('audio').play() : document.querySelector('audio').pause();
  //   setAudioState(!audioState);
  //   console.log(audioState);
    
  // }

  return (
    <>
      {/* <Button onClick={playSoundTrack}>
        <VolumeUpIcon id='audioIcon' />
      </Button> */}
      <audio key={`aw_${useId()}`} ref={audioRef} src='./sample-3s.mp3' controls autoPlay/>
    </>
  );
};

export default AudioWidget;