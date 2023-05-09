import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './category-item.component.scss';

const CategoryItem = ({ category }) => {
  const { title, info } = category;
  return (
    <div className='category-container'>
      <div className='body'>
        <Link
          className='category-item-link'
          to={`/${category.title.toLowerCase().replace(/\s+/g, '')}`}>
          <div className='grid'>
            <div className='card'>
              <span>icon</span>
              <h4>{title}</h4>
              <p>{info}</p>
              <div className='shine'></div>
              <div className='background'>
                <div className='tiles'>
                  {[...Array(10)].map((_, index) => (
                    <div
                      key={index}
                      className={`tile tile-${index + 1}`}></div>
                  ))}
                  {[...Array(3)].map((_, index) => (
                    <div
                      key={index}
                      className={`line line-${index + 1}`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

CategoryItem.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryItem;
