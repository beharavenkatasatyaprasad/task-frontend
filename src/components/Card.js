import React from "react";
import ReactTooltip from "react-tooltip";

export default function Card({ candidate }) {
  return (
    <div className="candidate-card card col-sm-12 col-md-12 col-lg-3">
      <div className="col-sm-12 p-1 candidate-data">
        <div className="candidate-container col-sm-12 p-0 m-0">
          <div className="row">
            <div className="col text-center candidate-photo justify-content-between col-lg-3 col-sm-12 p-0 m-0">
              <img src={candidate.picture || ""} alt={candidate._id} />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3 candidate-details col-lg-9 pr-1 pt-2 col-sm-12 p-0 m-0">
              <span className="float-right status badge-secondary px-1">
                {candidate.status}
              </span>
              <p className="name">{candidate.name}</p>
              <p className="experience">{candidate.experience}</p>
              <p className="description text-justify">
                {candidate.description}
              </p>
              <p className="qualification">{candidate.qualification}</p>
              <p className="age-gender">
                {candidate.age + " , " + candidate.gender}
              </p>
              <div className="row">
                <div className="col row">
                  <div className="col">
                    <a href="/" data-tip data-for="mblNum">
                      <i className="fa fa-headphones" aria-hidden="true"></i>
                    </a>
                    <ReactTooltip id="mblNum" type="info">
                      <span>{candidate.mbl}</span>
                    </ReactTooltip>
                  </div>
                  <div className="col row">
                    <a href="/" data-tip data-for="email">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </a>

                    <ReactTooltip id="email" type="info">
                      <span>{candidate.email}</span>
                    </ReactTooltip>
                  </div>
                </div>
                <div className="col">
                  <button className="btn invite-btn btn-sm btn-block">
                    delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
