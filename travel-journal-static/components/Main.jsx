export default function Main(props) {
  return (
    <article className="journal">
      <div className="img-container">
        <img className="main-img" src={props.img} alt="travel" />
      </div>
      <div className="info-container">
        <img src="marker.png" alt="marker" className="marker" />
        <span className="country">{props.title}</span>
        <a href="">{props.googleMapUrl}</a>
        <h2 className="title">{props.country}</h2>
        <p className="date">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  );
}
