const Plume = () => {
  return (
    <div className="relative z-[-1] flex place-items-center 
    before:absolute before:h-[200px] before:w-[200px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial 
    before:from-white before:to-transparent before:blur-2xl before:content-[''] 
    after:absolute after:-z-20 after:h-[150px] after:w-[150px] after:translate-x-1/3 
    after:bg-gradient-conic after:from-sky-400 after:via-pink-100 after:blur-2xl after:content-[''] 
    before:dark:bg-gradient-to-br before:dark:from-transparent 
    after:dark:opacity-40 
    sm:before:w-[280px] sm:before:h-[280px] 
    sm:after:w-[200px] sm:after:h-[200px] 
    lg:before:h-[360px] lg:before:w-[360px] animate-float">
  </div>
  )
};
export default Plume;
