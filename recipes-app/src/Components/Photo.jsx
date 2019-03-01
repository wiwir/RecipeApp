import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Photo = ({ title, url, description, onClick, id }) => {
  return (
    <React.Fragment>
      <div className="col-10 max-auto col-md-6 col-lg-4 my-3">
        <div className="card">
          <Link to={`/single/${id}`}>
            <img
              src={url}
              alt="recipe"
              className="img-card-top"
              style={{ height: "14rem" }}
            />
          </Link>
          <div className="car-body text-capitalize">
            <h6>{title}</h6>
            <h6 className="text-warning text-slanted">
              description:
              <strong className="text-primary">{description}</strong>
            </h6>
          </div>
          <div className="card-footer">
            <button
              onClick={onClick}
              type="button"
              className="btn btn-warning text-capitalize"
            >
              Removed Photo
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Photo.propTypes = {
  photo: PropTypes.object
};

export default Photo;
