import PropTypes from "prop-types";
import coins from "../../../assets/coins/coins.png";
const Coins = ({ points }) => {
  return (
    <div className="flex justify-center items-center h-[52px]">
      <img className="w-10 h-10" src={coins} alt="coins" />
      <h1 className="text-[45px] leading-[52px] font-bold ml-3">{points}</h1>
    </div>
  );
};

Coins.propTypes = {
  points: PropTypes.number.isRequired,
};

export default Coins;
