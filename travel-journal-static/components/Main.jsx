export default function Main() {
  return (
    <article className="journal">
      <div className="img-container">
        <img className="main-img" src="exp.png" alt="travel" />
      </div>
      <div className="info-container">
        <img src="marker.png" alt="marker" className="marker" />
        <span className="country">Japan</span>
        <a href="">View On Google Map</a>
        <h2 className="title"></h2>
        <p className="date"></p>
        <p className="entry-text"></p>
      </div>
    </article>
  );
}
