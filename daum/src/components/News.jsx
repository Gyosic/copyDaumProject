import "./News.scss";
import { news, newsList } from "../assest/dummy";

function News() {
  return (
    <div className="news_container">
      <div className="news_header">
        <div className="tabs">
          <span>뉴스</span>
          <span>연예</span>
          <span>스포츠</span>
          <span>영화</span>
          <span>자동차</span>
          <span>부동산</span>
        </div>
      </div>
      <div className="news_contents">
        <ul className="with_thumb">
          {news.map((el, idx) => (
            <li key={idx} className="thumb">
              <img src={el.thumb} width="154" height="94" alt="" />
              <div className="title">{el.title}</div>
            </li>
          ))}
        </ul>
        <ul className="without_thumb">
          {newsList.map((el, idx) => (
            <li key={idx}>{el}</li>
          ))}
        </ul>
      </div>
      <div className="news_footer">
        <div className="left">
          <span>뉴스홈 &gt;</span>
          <span>연재</span>
          <span>포토</span>
          <span>팩트체크</span>
        </div>
        <div className="right">
          <span>증시</span>
          <span>환율</span>
          <span>운세</span>
          <span>TV편성</span>
        </div>
      </div>
    </div>
  );
}

export default News;
