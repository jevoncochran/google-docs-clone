import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <section className="bg-[#F0F3F4] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="py-6 flex justify-between items-center">
            <h2 className="text-gray-700 text-lg">Start a start document</h2>
            <BsThreeDotsVertical size="1.2em" />
          </div>
        </div>
      </section>
    </div>
  );
}
