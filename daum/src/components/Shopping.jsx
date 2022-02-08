import "./Shopping.scss";
import { shoppingFlatformList, shoppingItems } from "../assest/dummy";

function Shopping() {
  return (
    <div className="shopping_container">
      <div className="shopping_header">
        <strong>쇼핑 &gt;</strong>
        <div className="shopping_platform gmarket">
          <div className="gmarket_ico" />
          <span>G마켓</span>
        </div>
        <div className="shopping_platform action">
          <div className="action_ico" />
          <span>옥션</span>
        </div>
      </div>
      <ul className="shopping_flatform_list">
        {shoppingFlatformList.map((el, idx) =>
          idx <= 5 ? (
            <li className="list" key={idx}>
              <div className={idx === 0 ? "dot hidden" : "dot"} />
              <a>{el.flatform}</a>
            </li>
          ) : idx > 5 && idx <= 10 ? (
            <li className="list" key={idx}>
              <div className={idx === 6 ? "dot hidden" : "dot"} />
              <a>{el.flatform}</a>
            </li>
          ) : (
            <li className="list" key={idx}>
              <div className={idx === 11 ? "dot hidden" : "dot"} />
              <a>{el.flatform}</a>
            </li>
          )
        )}
      </ul>
      <div className="page_btn_wrap">
        <span>1 / 15</span>
        <div className="left_btn" />
        <div className="right_btn" />
      </div>
      <ul className="shopping_items">
        {shoppingItems.map((el, idx) => (
          <li key={idx}>
            <img src={el.picture} />
            <div>{el.item}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shopping;
