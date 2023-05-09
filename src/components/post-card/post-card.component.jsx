const PostCard = ({ post }) => {
  const { topic, summary, imageUrl } = post;
  return (
    <div className='post-card-container'>
      <img
        src={imageUrl}
        alt={`${topic}`}
      />
      <div className='footer'>
        <h4>
          <span className='topic'>{topic}</span>
        </h4>
        <span className='summary'>{summary}</span>
      </div>
    </div>
  );
};

export default PostCard;
