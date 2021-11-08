import { Progress } from "antd";
import "./DonationCard.css";
import axios from "axios";

const DonationCard = ({ type }) => {
  return (
    <a
      className="donation-card"
      href={type === "closed" ? `/campaign/closed/abc` : `/campaign/open/abc`}
    >
      <img
        className="donation-card__thumbnail"
        alt="example"
        src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201808/29/6ebd8751-bf4a-4e5e-9fab-a2076668fc69.jpg"
      />
      <div className="donation-card__contents">
        <div className="donation-card__title">유기견 사료 기부 모금</div>
        <div className="donation-card__group">서초 동물사랑 센터</div>

        <div className="donation-card__progress">
          <Progress percent={30} showInfo={false} />
          <div className="donation-card__progress__info">
            <div>30%</div>
            <div>4,200,000원</div> 
          </div>
        </div>
      </div>
    </a>
  );
};

export default DonationCard;
