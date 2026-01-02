import { Body } from "./components/body";
import { Header } from "./components/header";

export default function Home() {
  return (
    <div className="bg-[#f3f3f3] h-dvh">
      <div className="flex flex-col  w-[90%] m-auto py-8 text-[#525252]">
        <Header />
        <Body />
      </div>
    </div>
  );
}
