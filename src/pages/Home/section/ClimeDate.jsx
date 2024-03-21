import { useEffect, useState } from "react";
const ClimeDate = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let currentDate = new Date();
    let futureDate = new Date(currentDate.getTime());
    futureDate.setDate(currentDate.getDate() + 55);

    const userId = localStorage.getItem("userId");
    const loadUserInfo = async () => {
      const res = await fetch(
        `https://yescoin-server-bt120s.vercel.app/users/${userId}`
      );
      const data = await res.json();
      const insertDate = new Date(data.date);

      const msInDay = 24 * 60 * 60 * 1000;
      const msInHour = 60 * 60 * 1000;
      const msInMinute = 60 * 1000;
      const msInSecond = 60 * 1000;

      // Calculate the milliseconds to add
      const millisecondsToAdd =
        55 * msInDay + msInHour * 2 + msInMinute * 45 + msInSecond * 60;

      // Create a new Date object with the added milliseconds
      futureDate = new Date(insertDate.getTime() + millisecondsToAdd).getTime();
    };

    loadUserInfo();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = futureDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        console.log("Countdown has ended!");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isNaN(timeLeft.days)) {
      window.location.reload();
    }
  }, [timeLeft]);

  return (
    <div className="text-center mt-3 xs:mt-[23px] sm:mt-6">
      <div className="text-center mt-3 xs:mt-[23px] sm:mt-6 xl:mt-8">
        <p className="font-bold leading-[18px]">Claim your tokens in:</p>
        <div className="mt-4 xs:mt-7 sm:mt-8 flex gap-8 justify-center items-center">
          <div className="mt-4 xs:mt-7 sm:mt-8 flex gap-4 xl:gap-24 justify-center items-center">
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[65.82px] font-medium">
                {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
              </p>
              <p className="text-md sm:text-lg">DAYS</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[65.82px] font-medium">
                {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
              </p>
              <p className="text-md sm:text-lg">HOURS</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[65.82px] font-medium">
                {timeLeft.minutes < 10
                  ? `0${timeLeft.minutes}`
                  : timeLeft.minutes}
              </p>
              <p className="text-md sm:text-lg">MINUTES</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[65.82px] font-medium">
                {timeLeft.seconds < 10
                  ? `0${timeLeft.seconds}`
                  : timeLeft.seconds}
              </p>
              <p className="text-md sm:text-lg">SECONDS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ClimeDate;
