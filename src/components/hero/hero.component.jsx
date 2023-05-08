const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-text'>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className='hero-image'>
        <img
          src={image}
          alt='Hero'
        />
      </div>
    </div>
  );
};

export default Hero;
