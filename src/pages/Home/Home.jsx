import { useEffect, useState } from "react";
import btnCoins from "../../assets/coins/btn-coins.png";
import Coins from "./section/Coins";
import ClimeDate from "./section/ClimeDate";
import ProcessBar from "./section/ProcessBar";
import SocialMedia from "./section/SocialMedia";

const Home = () => {
  const [coins, setCoins] = useState(0);
  const [energy, setEnergy] = useState(1000);
  const [isBoost, setIsBoost] = useState(false);
  const [countClick, setCountClick] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  const tapCoin = () => {
    const container = document.getElementById("coin-animation-container");
    container.style.zIndex = "-5555";

    // Create an image element
    const image = document.createElement("img");
    image.className = "-z-[5] animation-img-cls w-14 h-14 absolute"; // Assuming this is Tailwind CSS class
    image.src = btnCoins; // Update src with the correct path
    image.alt = "Yes Button";

    // Generate random top and left positions
    const randomTop = Math.floor(Math.random() * (60 - 30 + 1)) + 30;
    const randomLeft = Math.floor(Math.random() * (60 - 30 + 1)) + 30;

    // Apply random positions
    image.style.top = randomTop + "%";
    image.style.left = randomLeft + "%";

    // Append the image to the container
    container.appendChild(image);

    // Remove the image after 2000 milliseconds (2 seconds)
    setTimeout(() => {
      image.remove();
    }, 2000);

    setCoins(coins + 1);
    setCountClick(countClick + 1);

    if ((countClick + 1) % 3 === 0) {
      setEnergy((prevEnergy) => Math.max(prevEnergy - 1, 0));
    }

    // boost
    if (isBoost) {
      setIsBoost(false);
    } else {
      setTimeout(() => {
        setIsBoost(true);
      }, 3000);
    }

    // update user information
    const isExitUserId = localStorage.getItem("userId");
    if (isExitUserId) {
      const newPoint = 1;
      try {
        fetch(
          `https://botgame-server-bt1012.vercel.app/users/${isExitUserId}`,
          {
            method: "PATCH",
            body: JSON.stringify({ points: newPoint }),
            headers: {
              "Content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (!data.acknowledged) {
              console.error("Error? Please reload page? try again");
            }
          });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const setUserInfo = () => {
    const isExistUser = localStorage.getItem("userId");
    fetch(`https://botgame-server-bt1012.vercel.app/users/${isExistUser}`)
      .then((data) => data.json())
      .then((data) => {
        let { points } = data;
        setCoins(points);
      });
  };

  useEffect(() => {
    if (isBoost) {
      const interval = setInterval(() => {
        if (energy === 1000) {
          clearInterval(interval);
        } else {
          setEnergy((prevEnergy) => prevEnergy + 1);
        }
      }, 500);

      return () => clearInterval(interval);
    }
  }, [energy, isBoost]);

  // load users data
  useEffect(() => {
    const isExistUser = localStorage.getItem("userId");
    if (isExistUser) {
      setUserInfo();
    }
  }, []);

  return (
    <section className="botgame-height-res bg-black h-full text-white">
      <div className="botgame-bg-gradient h-full">
        <div className="relative w-[94%] px-1 max-w-3xl h-full mx-auto lg:pt-10">
          <Coins points={coins} />
          <ClimeDate />
          <div className="w-full absolute top-[60%]  sm:top-[63%] transform -translate-y-1/2 flex justify-center">
            <div className="w-full absolute top-[60%]  sm:top-[63%] transform -translate-y-1/2 flex justify-center">
              {/* coin animation container */}
              <div
                id="coin-animation-container"
                className="w-[300px] h-[300px]"
              ></div>
            </div>
            {isVisible ? (
              <img
                onClick={tapCoin}
                className="z-[10] w-[140px] h-[140px] xs:w-[170px] xs:h-[170px] sm:w-[242px] sm:h-[251px]"
                src={btnCoins}
                alt="Yes Button"
              />
            ) : (
              <img
                className="z-[10] w-[140px] h-[140px] xs:w-[170px] xs:h-[170px] sm:w-[242px] sm:h-[251px]"
                src={btnCoins}
                alt="Yes Button"
              />
            )}
          </div>
          <div className="w-full absolute bottom-2 sm:bottom-6 lg:bottom-8">
            <SocialMedia energy={energy} />
            <ProcessBar energy={energy} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
