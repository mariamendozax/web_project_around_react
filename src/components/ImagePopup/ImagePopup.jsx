export default function ImagePopup(props) {
  const { onClose, card } = props;

  return (
    <div className="popup" id="image-popup">
      <div className="popup__content popup__content_content_image">
        <button
          aria-label="Cerrar ventana emergente"
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
        <img alt={card.name} className="popup__image" src={card.link} />
        <p className="popup__caption">{card.name}</p>
      </div>
    </div>
  );
}
