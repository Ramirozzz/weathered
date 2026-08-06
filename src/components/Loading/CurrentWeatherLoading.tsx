import loading from "../../assets/backgrounds/loading.svg";
const CurrentWeatherLoading = () => {
  return (
    <div className="relative z-20 flex justify-center h-screen items-center">
      <div className="flex flex-col justify-center items-center gap-6 ">
        <img className=" w-100 h-50 " src={loading} alt="loading" />
        <p className="text-text">Searching...</p>
      </div>
    </div>
  );
};

export default CurrentWeatherLoading;
