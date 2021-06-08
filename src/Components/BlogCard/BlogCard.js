import { deleteApi, updateApi } from '../../api';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './BlogCard.scss';
import 'react-toastify/dist/ReactToastify.css';
const BlogCard = (props) => {
  const handleDelete = async () => {
    const data = await deleteApi(props);
    console.log(data);
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
      <div className="card">
        <div className="cardtitle">
          <Link to={`/${props.id}`}>
            <h2 className="cardTitle">{props.title}</h2>
          </Link>
          <p className="carDate">Date:{props.date}</p>
          <div className="editdelete">
            <img
              onClick={handleDelete}
              src="https://img.icons8.com/wired/64/ffffff/trash.png"
              height="50px"
              width="50px"
              className="delete"
              title="Delete Blog"
            />
            <Link to={`/dashboard/update/${props.id}`}>
              <img
                className="edit"
                src="https://img.icons8.com/ios/24/ffffff/edit-file.png"
                height="50px"
                width="50px"
                title="Edit Blog"
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
