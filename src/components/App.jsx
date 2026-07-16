import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
        <ImagePopup card={imageSelected} onClose={handleCloseImage} />
      </div>
    </>
  );
}

export default App;
