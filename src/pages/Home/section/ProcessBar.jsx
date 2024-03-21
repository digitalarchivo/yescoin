import PropTypes from "prop-types";

const ProcessBar = ({ energy }) => {
  const width = energy / 10 + "%";
  return (
    <div className="bg-[#FFFFFF33] rounded-[30px]">
      <div
        className={`botgame-process-bar rounded-[30px] h-3 xs:h-3.5 sm:h-4`}
        style={{ width: width }}
      ></div>
    </div>
  );
};

ProcessBar.propTypes = {
  energy: PropTypes.number.isRequired,
};

export default ProcessBar;
