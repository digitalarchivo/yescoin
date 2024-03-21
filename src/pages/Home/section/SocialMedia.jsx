import PropTypes from "prop-types";
import frens from "../../../assets/social-media/frens.png";
import twitter from "../../../assets/social-media/twitter.png";
import telegram from "../../../assets/social-media/telegram.png";
import icon from "../../../assets/icons/icon.png";
import ranking from "../../../assets/icons/ranking.png";
import { Link } from "react-router-dom";

const SocialMedia = ({ energy }) => {
  return (
    <div className="h-[100px] flex justify-between items-center">
      <div className="flex items-center w-[82px] h-[40px]">
        <img className="w-[32px] h-[32px] xs:h-[36px] xs:w-[36px] sm:w-[40px] sm:h-[40px]" src={icon} alt="" />
        <div>
          <p className="text-lg lg:text-xl xl:text-2xl leading-5 font-medium">{energy}</p>
          <p className="text-gray-300">/1000</p>
        </div>
      </div>
      {/* social link */}
      <div className="flex gap-3 bg-[#FFFFFF33] rounded-xl py-2 px-2.5">
        <div className="flex flex-col items-center border-r border-gray-300 pr-3">
          <Link to="/ranking">
            <img className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" src={ranking} alt="" />
            <p>Rank</p>
          </Link>
        </div>
        {/* frens */}
        <div className="flex flex-col items-center border-r border-gray-300 pr-3">
          <Link to="/friends">
            <img className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" src={frens} alt="" />
            <p>Frens</p>
          </Link>
        </div>
        {/* twitter */}
        <div className="flex flex-col items-center border-r border-gray-300 pr-3">
          <a
            href="https://x.com/yescoinairdrop?t=Crc2e5ZJx-newsAcIvbj4w&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <img className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" src={twitter} alt="" />
            <p>X.com</p>
          </a>
        </div>
        {/* telegram */}
        <div className="flex flex-col items-center">
          <a
            href="https://t.me/yescoinairdrop"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" src={telegram} alt="" />
            <p>Join</p>
          </a>
        </div>
      </div>
    </div>
  );
};

SocialMedia.propTypes = {
  energy: PropTypes.number.isRequired,
};
export default SocialMedia;
