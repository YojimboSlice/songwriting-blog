import { useContext } from 'react';

import SONGWRITING_DATA from '../../songwriting-posts.json';
import PostCard from '../../components/post-card/post-card.component';
import './songwriting.styles.scss';

const Songwriting = () => {
  return (
    <div className='songwriting-container'>
      {SONGWRITING_DATA.map(post => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

export default Songwriting;
