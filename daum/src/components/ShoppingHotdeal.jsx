import "./ShoppingHotdeal.scss";
import { hotdealList } from "../assest/dummy";

function ShoppingHotdeal() {
  return (
    <div className="hotdeal_container">
      <div className="hotdeal_header">
        <strong>추천 기획전</strong>
        <div className="page_btn_wrap">
          <span>1 / 6</span>
          <div className="left_btn" />
          <div className="right_btn" />
        </div>
      </div>
      <ul className="hotdeal_list">
        {hotdealList.map((el, idx) => (
          <li key={idx}>
            <img src={el.thumb} alt="" />
            <div>{el.item}</div>
          </li>
        ))}
      </ul>
      <div className="recom">
        <div>쇼핑 홈</div>
        <div>핫딜</div>
        <div>BEST 100</div>
      </div>
    </div>
  );
}

export default ShoppingHotdeal;
