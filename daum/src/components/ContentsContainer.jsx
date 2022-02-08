import News from "./News";
import KakaoTV from "./KakaoTV";
import Cafe from "./Cafe";
import Channel from "./Channel";
import Shopping from "./Shopping";
import ShoppingHotdeal from "./ShoppingHotdeal";
import "./ContentsContainer.scss";

function ContentsContainer() {
  return (
    <div className="contents_wrapper">
      <div className="left_contents">
        <div className="ad">
          <span>광고위치</span>
          <div className="ad_icon">AD</div>
        </div>
        <News />
        <KakaoTV />
        <Cafe />
        <Channel />
      </div>
      <div className="right_contents">
        <div className="login">
          <div className="kakao_login">
            <div className="kakao"></div>
            <span>&nbsp;카카오계정으로 로그인</span>
          </div>
          <div className="daum_login">
            <div className="daum"></div>
            <span>&nbsp;Daum 아이디로 로그인</span>
          </div>
          <div className="login_bottom">
            <div className="qr_login">
              <div className="qr"></div>
              <span>카카오 QR코드 로그인</span>
            </div>
            <span>회원가입</span>
          </div>
        </div>
        <div className="ad">
          <span>광고위치</span>
          <div className="ad_icon">AD</div>
        </div>
        <Shopping />
        <ShoppingHotdeal />
        <div className="ad">
          <span>광고위치</span>
          <div className="ad_icon">AD</div>
        </div>
      </div>
    </div>
  );
}

export default ContentsContainer;
