import coin from "../../assets/coins/btn-coins.png";
import reword from "../../assets/icons/reword.png";
import userImg from "../../assets/users/1.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import ProcessBar from "../Home/section/ProcessBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowSmLeft } from "react-icons/hi";

const Ranking = () => {
  const [rankUser, setRankUser] = useState([]);

  useEffect(() => {
    const loadRankUser = async () => {
      const responsive = await fetch(
        "https://yescoin-server-bt120s.vercel.app/ranking"
      );
      const resData = await responsive.json();
      console.log(resData);
      setRankUser(resData);
    };
    loadRankUser();
  }, []);

  return (
    <section className="h-full rank-bg-gradient">
      <div className="px-1.5 w-[94%] max-w-3xl h-full mx-auto text-white">
        <div className="w-full pt-px">
          {/* go back link */}
          <Link
            to="/"
            className="text-white text-3xl cursor-pointer hover:text-[#000] mt-2 md:mt-3.5 lg:mt-6 inline-block"
          >
            <HiArrowSmLeft />
          </Link>

          <div className="h-[85px] xs:h-[95px] sm:h-[120px] md:h-[135px]">
            <Swiper
              navigation={true}
              loop={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="flex justify-center">
                  <img
                    className="h-[85px] xs:h-[95px] sm:h-[120px] md:h-[135px]"
                    src={coin}
                    alt="coin img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center">
                  <img
                    className="h-[85px] xs:h-[95px] sm:h-[120px] md:h-[135px]"
                    src={coin}
                    alt="coin img"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center">
                  <img
                    className="h-[85px] xs:h-[95px] sm:h-[120px] md:h-[135px]"
                    src={coin}
                    alt="coin img"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* process bar */}
          <div className="text-center mt-1 sm:mt-2.5 md:mt-4">
            <p className="text-[24px] sm:text-[28px]">Tap</p>
            <p className="text-[#FFFFFF99] my-1.5 sm:my-2.5 md:my-3.5 lg:my-5">
              U will receive tokens once the clock reaches 0
            </p>
            <ProcessBar energy={960} />
          </div>
        </div>
        {/* button and ranking */}
        <div className="mt-1.5 sm:mt-3 md:mt-4 pb-2">
          {/* button */}
          <div className="bg-[#FFFFFF1A] h-9 sm:h-10 rounded-xl flex gap-3">
            <button className="text-black bg-white w-full py-2 rounded-[10px] font-bold text-[15px]">
              Miners
            </button>
            <button className="text-white w-full py-2 rounded-[10px] font-bold text-[15px]">
              Squads
            </button>
          </div>
          {/* ranking list */}
          <div className="mt-1.5 sm:mt-3 bg-[#FFFFFF1A] rounded-[20px] text-white">
            <p className="py-2 sm:py-4 border-b-2 border-white text-center text-[15px] font-medium">
              Ranking
            </p>
            {/* container list */}
            <div className="max-h-[256px] sm:max-h-[295px] sm:mt-1.5 custom-scroll">
              {rankUser &&
                rankUser?.map((user, index) => (
                  <div
                    key={user?.userId}
                    className="flex items-center gap-2.5 py-1.5 pl-3.5 my-px"
                  >
                    <div className="h-[32px] relative">
                      <img className="w-[36px] h-[32px]" src={reword} alt="" />
                      <p className="absolute left-1/2 top-[45%] transform -translate-x-1/2">
                        {index + 1}
                      </p>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <img
                        className="mt-1 w-[32px] h-[32px] sm:w-[42px] sm:h-[42px] rounded-full"
                        src={userImg}
                        alt="user img"
                      />
                      <div>
                        <p className="text-[14px] sm:text-[16px] font-bold">
                          Mohamd
                        </p>
                        <p className="flex items-center gap-1.5">
                          <img className="w-3 h-3" src={coin} alt="coin img" />
                          <span className="text-[12px]">{user?.points}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ranking;
