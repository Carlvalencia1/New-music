import PlayButton from '../atoms/PlayButton';
import PauseButton from '../atoms/PauseButton';
import NextButton from '../atoms/NextButton';
import PreviousButton from '../atoms/PreviousButton';
import './Controls.css';

function Controls({ isPlaying, onPlay, onPause, onNext, onPrevious }) {
  return (
    <div id='controls'>
      <PreviousButton onClick={onPrevious} />
      {isPlaying ? (
        <PauseButton onClick={onPause} />
      ) : (
        <PlayButton onClick={onPlay} />
      )}
      <NextButton onClick={onNext} />
    </div>
  );
}

export default Controls;
