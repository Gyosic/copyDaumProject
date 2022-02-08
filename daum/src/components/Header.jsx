import { FaRegKeyboard } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import {
  AiOutlineRightSquare,
  AiOutlineLeftSquare,
  AiOutlineDown,
} from "react-icons/ai";
import { TiWeatherSunny } from "react-icons/ti";
import { favorSch, services } from "../assest/dummy";
import "./Header.scss";

function Header() {
  return (
    <div className="header_wrapper">
      <div className="header_upper">
        <div className="header_upper_left">
          <h1 className="header_title">
            <a href="https://focus.daum.net/daum/help/startpage.html#36609">
              다음을 시작페이지로
            </a>
            <img
              src="https://t1.daumcdn.net/daumtop_chanel/op/20200723055344399.png"
              width="180"
              height="94"
              className="img_thumb"
              alt="Daum"
            />
          </h1>
          <div className="searchbox">
            <div className="searchbar">
              <input type="text"></input>
              <FaRegKeyboard className="keyboard_icon" />
              <IoIosSearch className="search_icon" />
            </div>
            <ul className="favorsch">
              {favorSch.map((el, idx) => (
                <a href={el.link} key={idx}>
                  {el.favor}
                </a>
              ))}
              <AiOutlineLeftSquare className="left_icon" />
              <AiOutlineRightSquare className="right_icon" />
            </ul>
          </div>
        </div>
        <a
          href="https://www.kakao.com/event/wallet/hometax/2021/event.html?t_src=pctop"
          className="daumtop_chanel_img"
        >
          <img
            src="https://t1.daumcdn.net/daumtop_chanel/op/20220119061556880.png"
            width="260"
            height="84"
            alt="연말정산"
          ></img>
        </a>
      </div>
      <div className="header_lower_box">
        <div className="category">
          {services.map((el, idx) => (
            <a href={el.link} key={idx}>
              {el.service}
            </a>
          ))}
          <AiOutlineDown className="down_icon" />
        </div>
        <div className="date_desc">
          <strong>02. 10. (목)</strong>
          <div className="weather">
            <span>경상남도</span>
            <TiWeatherSunny className="weather_icon" />
            <span>-3 ℃</span>
            <AiOutlineDown className="weather_down_icon" />
          </div>
        </div>
      </div>
      <div className="category_line"></div>
    </div>
  );
}

export default Header;
