import { cafe } from "../assest/dummy";
import "./Cafe.scss";

function Cafe() {
  return (
    <div className="cafe_container">
      <div className="cafe_header">
        <span>카페</span>
        <span>브런치</span>
        <span>티스토리</span>
        <span>카카오스토리</span>
      </div>
      <ul className="cafe_list">
        {cafe.map((el, idx) => (
          <li key={idx}>
            <img src={el.thumb} width="154" alt="" />
            <div>{el.title}</div>
            <div className="teller">{el.teller}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cafe;
