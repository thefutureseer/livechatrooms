import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">

          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Set up or sign in to a live chat room.
          </p>

      </div>




      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">

      </div>


      <div className="relative z-[-1] ">
        
        {/* Moon element */}
        <div className="absolute left-[50%] top-[50%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 shadow-[0_4px_12px_rgba(0,0,0,0.5)] dark:from-gray-100 dark:via-gray-200 dark:to-gray-400">
          {/* Craters for 3D effect */}
          <div className="absolute left-3 top-5 h-5 w-5 rounded-full bg-gray-500 dark:bg-gray-600 opacity-60 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.4)]"></div>
          <div className="absolute right-4 top-10 h-4 w-4 rounded-full bg-gray-400 dark:bg-gray-500 opacity-60 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3)]"></div>
          <div className="absolute left-6 bottom-6 h-3 w-3 rounded-full bg-gray-500 dark:bg-gray-700 opacity-70 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3)]"></div>
        </div>

      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none rounded-t-[50%]">

            By { "Tannehill on Earth"}
        </div>

      </div>
    </main>
  );
}
