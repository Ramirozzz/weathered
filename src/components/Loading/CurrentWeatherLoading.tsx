import loading from "../../assets/images/loading.gif";
const CurrentWeatherLoading = () => {
  return (
    <div className="relative z-20 flex justify-center h-screen items-center">
      <div className="flex flex-col justify-center items-center gap-6">
        <img className=" w-35 h-35 " src={loading} alt="loading" />
        <p className="text-lg text-text">Searching...</p>
      </div>
    </div>
  );
};

export default CurrentWeatherLoading;
