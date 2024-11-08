// import Image from "next/image";
import Plume from "./components/ui/Plume";
import Moon from "./components/ui/Moon";
import Footer from "./components/ui/Footer";
import CreateRoom from "./components/CreateRoom";
import JoinRoom from "./components/JoinRoom";

export default function Home() {
  return (
    <main className="relative flex h-screen flex-col items-center justify-between p-8 md:p-24">

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <p className="m-0 max-w-[30ch] text-md opacity-50 p-3">
          Set up or sign in to a live chat room.
        </p>
        <CreateRoom/>
        <div className="p-3">{"-or-"}</div>
        <JoinRoom/>
      </div>
      <Plume/>
      <Moon/>
      <Footer/>
    </main>
  );
};