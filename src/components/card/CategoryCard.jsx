import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CategoryCard = (props) => {
  const { avatar, firstName, id, lastName, phoneNumber } = props;
  return (
    <div className="card mb-3">
      <img src={avatar} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{firstName}</h5>
        <h5 className="card-title">{lastName}</h5>
        <p>{phoneNumber}</p>
        
        <button className="btn btn-success me-2 mb-2" onClick={edit}>Edit</button>
        <button className="btn btn-danger mb-2">Delete</button>
        
        <div className="btnsss">
        <Link to={`/categories/${id}`} className="btn btn-primary">
          Go products {id}
        </Link>
        </div>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phoneNumber: PropTypes.string,
  avatar: PropTypes.string,
  id: PropTypes.string,
};

export default CategoryCard;
