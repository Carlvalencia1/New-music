import Music from '../organisms/Music';


const playlist = [
  './assets/audios/CountingStars.mp3',
  '/assets/audios/HoHey.mp3',
  '/assets/audios/LetHerGo.mp3',
  '/assets/audios/WeFoundLove.mp3',
  '/assets/audios/SetFiretotheRain.mp3'
];

function Home() {
  return (
    <>
      <div id='titulo'>
      <h1>Reproductor de Música</h1>
      </div>
    <div>
      <Music playlist={playlist} />
    </div>
    </>
  );
}

export default Home;
