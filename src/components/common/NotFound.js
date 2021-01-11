import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound">
      <h2 className="notfound__title">404 Page not found</h2>
      <Link to='/' className="notfound__btn">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
