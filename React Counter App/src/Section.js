import React from "react";
import Card from "./card"
const TopSection = () => {
  return (
    <div>
      <div className="jumbotron ">
        <h1 className="display-4">App looks great!</h1>
        <p className="lead">
          hello a aabas Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Ratione necessitatibus, quas voluptas beatae optio maxime
          cupiditate at fuga officiis odit rem provident nobis esse magni! Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Assumenda velit
          dolorem repudiandae qui rerum possimus sit animi. Illo, laudantium ea!
        </p>
        <hr className="my-4" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          incidunt?
        </p>
        <a className="btn btn-success btn-lg" href="#" role="button">
          Read more
        </a>
      </div>

      <div className="bg-success text-center">
        <p className="display-4 text-white p-4">Discover the amazing new app</p>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rem?
        </p>
        <div className="row  p-4">
          <div className="col-6 text-right">
            <button className="btn btn-warning btn-lg">Play Store</button>
          </div>
          <button className="btn btn-warning btn-lg">App Store</button>
          <div className="col-6 text-center"></div>
        </div>
      </div>

      <section className="contact bg-success">
        <div className="container ">
          <h2 className="text-white">We love new friends!</h2>
          <div className="row">
            <div className="col-4 mb-5">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-success">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-success">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <Card />
            {/* <div className="col-4 ">
              <div className="card " style={{ width: "18rem" }}>
                <img
                  src="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-success">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopSection;
