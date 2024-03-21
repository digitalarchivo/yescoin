import { Link } from "react-router-dom/dist";
import coins from "../../assets/coins/btn-coins.png";
import noFriendImg from "../../assets/icons/no-friend-img.png";
import { HiArrowSmLeft } from "react-icons/hi";
import userImg from "../../assets/users/1.png";
import swal from "sweetalert";
import { useEffect, useState } from "react";

const Friend = () => {
  const [friendList, setFriendList] = useState([]);
  // share refer code function
  const shareReferralCode = () => {
    const isExitUserId = localStorage.getItem("userId");
    if (isExitUserId) {
      const originUrl = window.location.origin;
      const referUrl = `${originUrl}?refCode=${isExitUserId}&active=true`;

      swal("Referral Code", referUrl);
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const loadFriendList = async () => {
      const res = await fetch(
        `https://botgame-server-bt1012.vercel.app/friends/${userId}`
      );
      const data = await res.json();
      const friends = data[0]?.friends;
      if (friends) {
        setFriendList(friends);
      }
    };

    loadFriendList();
  }, []);

  return (
    <section className="h-full bg-black">
      <div className=" w-[94%] px-1 max-w-3xl h-full mx-auto text-white">
        {/* go back link */}
        <div className="relative pt-3 xs:pt-6 sm:pt-7">
          <Link
            to="/"
            className="absolute bottom-1 text-white text-3xl cursor-pointer hover:text-[#F8BB24] p-2"
          >
            <HiArrowSmLeft />
          </Link>
          <h1 className="text-[22px] xs:text-2xl sm:text-[28px] font-medium text-center">
            Friend Zone
          </h1>
        </div>
        {/* invite frens to get bonuse */}
        <div>
          <p className="text-lg sm:text-xl font-bold text-[#F8BB24] mt-4 xs:mt-9 sm:mt-12 mb-3">
            Invite frens to get bonuse
          </p>
          <div className="flex items-center  gap-4 bg-[#FFFFFF1A] rounded-[20px] h-[72px] pl-4">
            <img className="w-8 h-8 sm:w-10 sm:h-10" src={coins} alt="" />
            <div>
              <p>Invite friend</p>
              <div className="flex items-center gap-1">
                <img className="w-2 h-2 sm:w-5 sm:h-5" src={coins} alt="" />
                <p>
                  <span className="text-[#F8BB24]">50,000</span> For you and
                  fren
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* frens list */}
        <div className="relative">
          <p className="text-lg sm:text-xl font-bold mt-4 sm:mt-8 mb-3">
            Friends List
          </p>
          <div className="bg-[#FFFFFF1A] rounded-[20px] h-[340px] py-4 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-10">
            <div className="max-h-[245px] custom-scroll pr-4">
              {friendList.length >= 1 ? (
                friendList.map((friend, index) => (
                  <div
                    key={friend?.userId}
                    className="w-full flex items-center gap-4 my-2.5"
                  >
                    <p>{index + 1}</p>
                    <div className="flex w-full items-center gap-2.5">
                      <img
                        className="w-[32px] h-[32px] sm:w-[44px] sm:h-[44px] rounded-full"
                        src={userImg}
                        alt="user img"
                      />
                      <div className="text-left w-full">
                        <p className="text-[14px] sm:text-[16px] font-bold">
                          Mohamd
                        </p>
                        <div className="flex justify-between">
                          <p className="text-[#00A3FF]">@{friend?.userId}</p>
                          <p className="text-[#04C987]">+{friend?.points}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <img
                    className=" mx-auto w-[100px] h-[100px] xs:w-[110px] xs:h-[110px] sm:w-[120px] sm:h-[120px]"
                    src={noFriendImg}
                    alt=""
                  />
                  <p className="text-[#FFFFFF99] my-2 text-center">
                    Not friends yet
                  </p>
                </div>
              )}
            </div>
            <div className="absolute bottom-3 left-0 w-full">
              <button
                onClick={shareReferralCode}
                className="btn-gradient py-4 text-center w-full rounded-full"
              >
                Share referral code
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Friend;
