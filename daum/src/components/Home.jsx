import Header from "./Header";
import ContentsContainer from "./ContentsContainer";
import TodayPhoto from "./TodayPhoto";
import "./Home.scss";

function Home() {
  return (
    <div className="container">
      <Header />
      <ContentsContainer />
      <TodayPhoto />
    </div>
  );
}

export default Home;
