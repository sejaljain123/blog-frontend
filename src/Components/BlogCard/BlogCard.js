import { deleteApi } from '../../api';
import { Link } from 'react-router-dom';

import './BlogCard.scss';

const BlogCard = (props) => {
  const handleDelete = async () => {
    const data = await deleteApi(props);
    props.handleDisplay();
  };

  return (
    <>
      <div className="card">
        <div className="title">
          <Link to={`/dashboard/${props.id}`}>
            <h2>{props.title}</h2>
          </Link>
          <p>Date:{props.date}</p>
          <img
            onClick={handleDelete}
            src="https://img.icons8.com/wired/64/ffffff/trash.png"
            height="50px"
            width="50px"
            className="delete"
          />
        </div>
      </div>
    </>
  );
};

export default BlogCard;
