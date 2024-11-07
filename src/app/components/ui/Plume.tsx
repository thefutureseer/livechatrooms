const Plume = () => {
  return (
    <div className="relative z-[-1] flex place-items-center animate-float">
      {/* Outer Blur Circle */}
      <div className="absolute h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-gradient-radial from-white to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent sm:h-[280px] sm:w-[280px] lg:h-[360px] lg:w-[360px]"></div>
      
      {/* Inner Conic Gradient Circle */}
      <div className="absolute -z-20 h-[150px] w-[150px] translate-x-1/3 bg-gradient-conic from-sky-400 via-pink-100 blur-2xl dark:opacity-40 sm:h-[200px] sm:w-[200px]"></div>
    </div>
  );
};

export default Plume;