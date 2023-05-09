import { Outlet } from 'react-router-dom';
import CategoryMenu from '../../components/category-menu/category-menu.component';
// import Hero from '../../components/hero/hero.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Songwriting',
      info: 'Check out my journey to become a better songwriter and check out what sources I learn from.',
    },
    {
      id: 2,
      title: 'Music Production',
      info: 'I try out various music production, mixing, and mastering techniques for my music from YouTube.',
    },
    {
      id: 3,
      title: 'Inspirations',
      info: 'The songwriters, music producers, and engineers that inspire me and leave their mark in my music.',
    },
    {
      id: 4,
      title: 'Hardware',
      info: 'Figuring out how to use some of my favorite hardware. Octatrack, Digitakt, and some Chase Bliss pedals.',
    },
  ];
  return (
    <div className='home'>
      {/*<Hero />*/}
      <CategoryMenu categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
