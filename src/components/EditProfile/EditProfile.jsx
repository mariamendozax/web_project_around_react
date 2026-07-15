export default function EditProfile() {
  return (
    <form className="popup__form" id="edit-profile-form">
      <input
        className="popup__input popup__input_type_name"
        id="profile-name"
        name="name"
        placeholder="Nombre"
        type="text"
        required
        minLength="2"
        maxLength="40"
      />
      <span className="profile-name-input-error popup__input-error"></span>
      <input
        className="popup__input popup__input_type_description"
        id="profile-about"
        name="description"
        placeholder="Acerca de mí"
        type="text"
        required
        minLength="2"
        maxLength="200"
      />
      <span className="profile-about-input-error popup__input-error"></span>
      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
