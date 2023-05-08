import CategoryItem from '../category-item/category-item.component';
import PropTypes from 'prop-types';
import './category-menu.component.scss';

const CategoryMenu = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map(category => (
        <>
          <CategoryItem
            key={category.id}
            category={category}
          />
        </>
      ))}
    </div>
  );
};

CategoryMenu.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoryMenu;
