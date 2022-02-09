import { useState } from "react";
import { FaRegKeyboard } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import {
  AiOutlineRightSquare,
  AiOutlineLeftSquare,
  AiOutlineDown,
} from "react-icons/ai";
import { TiWeatherSunny } from "react-icons/ti";
import { favorSch, services } from "../assest/dummy";
import Keyboard from "react-simple-keyboard";
import layout from "simple-keyboard-layouts/build/layouts/korean";
import "react-simple-keyboard/build/css/index.css";
import "./Header.scss";

function Header() {
  const [keyboardClick, setKeyboardClick] = useState(false);
  const [layoutName, setLayoutName] = useState("default");
  const [inputVal, setInputVal] = useState("");

  const onChange = (input) => {
    console.log("Input changed", input);
    setInputVal(input);
  };

  const inputHandler = (e) => {
    setInputVal(e.target.value);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
    if (button === "{shift}") {
      layoutName === "default"
        ? setLayoutName("shift")
        : setLayoutName("default");
    }
    if (button === "{cshift}") {
      layoutName === "change"
        ? setLayoutName("cshift")
        : setLayoutName("change");
    }
    if (button === "{change}") {
      layoutName === "default"
        ? setLayoutName("change")
        : setLayoutName("default");
    }
  };

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
              <input
                type="text"
                value={inputVal}
                onChange={inputHandler}
              ></input>
              <FaRegKeyboard
                className="keyboard_icon"
                onClick={() => setKeyboardClick(!keyboardClick)}
              />
              {keyboardClick ? (
                <div className="simple_keyboard">
                  <Keyboard
                    display={{
                      "{bksp}": "←",
                      "{space}": "간격",
                      "{shift}": "↑",
                      "{cshift}": "↑",
                      "{enter}": "검색",
                      "{change}": "영문",
                    }}
                    layoutName={layoutName}
                    layoutCandidates={layout.layoutCandidates}
                    layout={{
                      default: [
                        "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                        "ㅂ ㅈ ㄷ ㄱ ㅅ ㅛ ㅕ ㅑ ㅐ ㅔ [ ] \\",
                        "ㅁ ㄴ ㅇ ㄹ ㅎ ㅗ ㅓ ㅏ ㅣ ; '",
                        "{shift} ㅋ ㅌ ㅊ ㅍ ㅠ ㅜ ㅡ , . / {shift}",
                        "{change} {space} {enter}",
                      ],
                      shift: [
                        "~ ! @ # $ % ^ &amp; * ( ) _ + {bksp}",
                        "ㅃ ㅉ ㄸ ㄲ ㅆ ㅛ ㅕ ㅑ ㅒ ㅖ { } |",
                        'ㅁ ㄴ ㅇ ㄹ ㅎ ㅗ ㅓ ㅏ ㅣ : "',
                        "{shift} ㅋ ㅌ ㅊ ㅍ ㅠ ㅜ ㅡ &lt; &gt; ? {shift}",
                        "{change} {space} {enter}",
                      ],
                      change: [
                        "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                        "q w e r t y u i o p [ ] \\",
                        "a s d f g h j k l ; '",
                        "{cshift} z x c v b n m , . / {shift}",
                        "{change} {space} {enter}",
                      ],
                      cshift: [
                        "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
                        "Q W E R T Y U I O P { } |",
                        'A S D F G H J K L : "',
                        "{cshift} Z X C V B N M < > ? {shift}",
                        "{change} {space} {enter}",
                      ],
                    }}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                  />
                </div>
              ) : null}
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
