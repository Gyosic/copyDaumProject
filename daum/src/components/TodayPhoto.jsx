import "./TodayPhoto.scss";

function TodayPhoto() {
  return (
    <div className="today_photo_container">
      <h4 className="today_photo_header">오늘의 포토</h4>
      <div className="img_slide"></div>
      <div className="thumb_slide"></div>
    </div>
  );
}

export default TodayPhoto;
