const Card = () => {
    return (
        <div className="mcard">
          <div className="movieposter">
              {/* <img src="assets/img/poster.jpg" alt=""> */}
          </div>
          <div className="detailsCard">
              {/* <img className="name" src="assets/img/avtarlogo.png" alt=""> */}
              <h3>Directed by James Cameron</h3>
              <div className="rating">
                  <span>4/5</span>
              </div>
              <div className="tags">
                  <span>Sci-fi</span>
                  <span>Action</span>
              </div>
          </div>
        </div>
    );
};

export default Card;