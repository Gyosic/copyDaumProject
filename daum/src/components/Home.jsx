import ContentsContainer from "./ContentsContainer";
import Header from "./Header";
import "../App.scss";

function Home() {
  return (
    <div className="container">
      <Header />
      <ContentsContainer />
    </div>
  );
}

export default Home;
