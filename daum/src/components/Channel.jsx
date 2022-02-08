import "./Channel.scss";
import { channel, best } from "../assest/dummy";

function Channel() {
  return (
    <div className="channel_container">
      <div className="channel_header">
        <span>홈&쿠킹</span>
        <span>머니</span>
        <span>동물</span>
        <span>스타일</span>
        <span>M+</span>
        <span>여행맛집</span>
        <span>직장IN</span>
        <span>뮤직</span>
        <span>웹툰</span>
        <span>게임</span>
        <span>같이가치</span>
      </div>
      <ul className="channer_list">
        {channel.homeAndCook.map((el, idx) =>
          idx === 0 ? (
            <li key={idx}>
              <div className="first_list">
                <img src={el.thumb} width="316" height="159" alt="" />
                <div className="first_list_desc">
                  <div>{el.origin}</div>
                  <div>{el.item}</div>
                </div>
              </div>
            </li>
          ) : (
            <li key={idx}>
              <img src={el.thumb} width="152" height="94" />
              <div className="item">{el.item}</div>
              <div className="origin">{el.origin}</div>
            </li>
          )
        )}
      </ul>
      <div className="best">
        <strong>베스트</strong>
        <ul className="best_list">
          {best.map((el, idx) =>
            idx === 0 ? (
              <li key={idx}>
                <div className="best_first">
                  <img src={el.thumb} width="152" height="108" />
                  <div>{el.title}</div>
                  <div className="rank">
                    <span>1</span>
                  </div>
                </div>
              </li>
            ) : idx === 1 ? (
              <li key={idx}>
                <div className="best_second">
                  <img src={el.thumb} width="152" height="108" />
                  <div>{el.title}</div>
                  <div className="rank">
                    <span>2</span>
                  </div>
                </div>
              </li>
            ) : null
          )}
          <div className="best_rest">
            {best.map((el, idx) =>
              idx >= 2 ? (
                <div className="best_rest_list" key={idx}>
                  <div className="rank">
                    <div>{idx + 1}</div>
                  </div>
                  <span>{el.title}</span>
                </div>
              ) : null
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Channel;
