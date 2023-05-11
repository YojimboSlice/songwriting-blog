import PostCard from '../../components/post-card/post-card.component';
import './songwriting.styles.scss';

const Songwriting = ({ backendData }) => {
  return (
    <div className='songwriting-container'>
      {backendData.map(post => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

export default Songwriting;
