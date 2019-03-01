import React from "react";
import Photo from "./Photo";

import PropTypes from "prop-types";

const PhotoList = ({ photos, removePhoto }) => {
  return (
    <React.Fragment>
      <div className="container my-5">
        {/*title */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
            <h1 className="text-slanted">Photos List</h1>
          </div>
        </div>
        {/*end title */}
        <div className="row">
          {photos
            .sort(function(x, y) {
              return y.id - x.id;
            })
            .map(photo => {
              return (
                <Photo
                  key={photo.id}
                  {...photo}
                  onClick={() => removePhoto(photo.id)}
                />
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired
};

export default PhotoList;
