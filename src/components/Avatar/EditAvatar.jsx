export default function EditAvatar() {
  return (
    <form className="popup__form" id="edit-avatar-form">
      <input
        className="popup__input"
        id="avatar-url"
        name="avatar"
        placeholder="Enlace a la imagen"
        type="url"
        required
      />
      <span className="avatar-url-input-error popup__input-error"></span>
      <button className="popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
