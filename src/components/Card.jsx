import "../styles/Card.css";
function Card(props) {
  return (

    <ul className="cards">
      <li>
        <a href="" className="card">
          <img
            src={props.img}
            className="card__image"
            alt=""
          />
          <div className="card__overlay">
            <div className="card__header">
              <img
                className="card__thumb"
                src="https://render.fineartamerica.com/images/rendered/default/poster/8/7/break/images/artworkimages/medium/3/final-fantasy-final-fantasy-xiii-rainbow-logo-rose-chloe.jpg"
                alt="FFXIII-logo"
              />
              <div className="card__header-text">
                <h3 className="card__title">{props.title}</h3>
                <span className="card__status">{props.jp_name}</span>
              </div>
            </div>
            <p className="card__description">
              {props.description}
            </p>
          </div>
        </a>
      </li>
    </ul>
  );
}

export default Card;
