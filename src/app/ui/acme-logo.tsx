import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@assets/fonts/fonts";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <p className="text-[33px]">HJ Portfolio</p>
    </div>
  );
}
