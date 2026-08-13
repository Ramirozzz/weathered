import loading from "../../assets/backgrounds/loading.gif";
const CurrentWeatherLoading = () => {
  return (
    <div className="relative z-20 flex justify-center h-screen items-center">
      <div className="flex flex-col justify-center items-center gap-6">
        <img className=" w-40 h-40 " src={loading} alt="loading" />
        <p className="text-text">Searching...</p>
      </div>
    </div>
  );
};

export default CurrentWeatherLoading;
