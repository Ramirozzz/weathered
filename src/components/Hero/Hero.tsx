const Hero = () => {
  return (
    <section className="relative h-[720px] overflow-hidden md:h-screen">
      <div className="relative z-10 flex h-full items-center justify-center px-4 pt-8 md:px-8 lg:px-30 lg:pt-16">
        <div className="max-w-4xl text-center">
          <h1 className="mb-6 uppercase">Your Daily Weather</h1>

          <p className="mx-auto max-w-sm md:max-w-4xl leading-relaxed text-balance">
            Get weathered with real-time forecasts, hourly updates, and accurate
            conditions wherever you are.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
