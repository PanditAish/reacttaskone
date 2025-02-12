import React from "react";

const Maincard = ({ curbook }) => {
  const { cover, title } = curbook;

  return (
    <div className="col-md-6 col-sm-6 col-lg-4 d-flex justify-content-center align-items-center">
      <div className="card-div my-5">
        <div className="imgbox">
          <img src={cover} alt={title} className='imgbook'/>
        </div>
        <div className="content">
            <h4 className="cardhead">{title}</h4> 
        </div>
      </div>
    </div>
  );
};

export default Maincard;
