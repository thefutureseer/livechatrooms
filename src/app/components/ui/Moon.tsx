
const Moon = () => {
  return (
    <div className="relative z-[-1] ">
        
    {/* Moon element */}
    <div className="absolute left-[50%] top-[50%] h-24 w-24 
          -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-gray-300 via-gray-400
           to-gray-600 shadow-[0_4px_12px_rgba(0,0,0,0.5)] dark:from-gray-100 dark:via-gray-200 dark:to-gray-400">
      {/* Craters for 3D effect */}
      <div className="absolute left-3 top-5 h-5 w-5 rounded-full bg-gray-500 dark:bg-gray-600 opacity-60 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.4)]"></div>
      <div className="absolute right-4 top-10 h-4 w-4 rounded-full bg-gray-400 dark:bg-gray-500 opacity-60 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3)]"></div>
      <div className="absolute left-6 bottom-6 h-3 w-3 rounded-full bg-gray-500 dark:bg-gray-700 opacity-70 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)]"></div>
    </div>

  </div>
  )
};

export default Moon;