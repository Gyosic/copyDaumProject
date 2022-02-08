import "./KakaoTV.scss";
import { tv } from "../assest/dummy";

function KakaoTV() {
  return (
    <div className="kakaotv_container">
      <div className="kakaotv_header">
        <strong>카카오TV</strong>
        <span>오리지널 콘텐츠</span>
        <span>TV하이라이트</span>
        <span>TV 주요장면</span>
      </div>
      <ul className="kakaotv_list">
        {tv.map((el, idx) => (
          <li key={idx}>
            <img src={el.thumb} width="154" alt="" />
            <div>{el.desc}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KakaoTV;
