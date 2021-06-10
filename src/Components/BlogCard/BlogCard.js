import { deleteApi } from '../../api';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './BlogCard.scss';
import 'react-toastify/dist/ReactToastify.css';

const BlogCard = (props) => {
  const handleDelete = async () => {
    const data = await deleteApi(props);
    if ((data.success = true)) {
      toast.dark('Post Deleted', {
        position: 'top-right',
        autoClose: 1000,
      });
    }
    props.handleDisplay();
  };

  return (
    <>
      <div className="Card">
        <div className="cardtitle">
          <Link className="cardTitle" to={`/${props.id}`}>
            {props.title}
          </Link>
          <p className="cardDate">Date:{props.date}</p>
          <div className="cardeditdelete">
            <img
              onClick={handleDelete}
              src="https://img.icons8.com/wired/64/ffffff/trash.png"
              height="50px"
              width="50px"
              className="carddelete"
              title="Delete Blog"
              alt="trash"
            />
            <Link to={`/dashboard/update/${props.id}`}>
              <img
                className="cardedit"
                src="https://img.icons8.com/material-rounded/48/ffffff/edit--v1.png"
                title="Edit Blog"
                height="50px"
                width="50px"
                alt="edit"
              />
            </Link>
          </div>
          <ToastContainer autoClose={1000} />
        </div>
      </div>
    </>
  );
};

export default BlogCard;
