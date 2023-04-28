import React from "react";
import { NavLink } from "react-router-dom";
import image1 from "../images/Kindergarten/Thumb/2022-08-25 12.42.31 copy.jpg";

export default function SchoolPage() {
  return (
    <section className="section" style={{ marginTop: 85 }}>
      <div className="container">
        <h1 className="title is-2 has-text-centered">Elementary School</h1>
        <hr />
        <div className="columns is-multiline">
          <div className="column is-one-quarter">
            <NavLink exact to="/school/kindergarten">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={image1} alt="Meeting Miss Snider" />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-5">Kindergarten</p>
                  <p className="subtitle is-6">Miss Snider</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
