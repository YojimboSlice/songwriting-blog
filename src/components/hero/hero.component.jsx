import AbletonImage from '../../assets/ableton.jpg';

const Hero = () => {
  const hero = {
    title: 'Learning Resource and Blog',
    text: 'Educating myself on music-making',
  };
  return (
    <div className='hero-container'>
      <div className='hero-text'>
        <h1>{hero.title}</h1>
        <p>{hero.text}</p>
      </div>
      <div className='hero-image'>
        <img
          className='image'
          src={AbletonImage}
          alt='Hero'
        />
      </div>
    </div>
  );
};

export default Hero;
