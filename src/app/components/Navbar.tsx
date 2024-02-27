import Link from "next/link";
import Image from "next/image";

import BannerImage from "@/app/images/banner.jpg";

const Navbar = () => {
  return (
    <header>
      <div>
        <Image
          className="w-full h-[30rem] object-contain"
          src={BannerImage}
          alt="Banner"
        />
      </div>
      <div className="flex items-center justify-center my-[2rem]">
        <ul className="flex flex-row gap-[2rem] justify-center items-center">
          <Link href="/">Home</Link>
          <Link href="/additional-resources">Additional Resources</Link>
        </ul>
      </div>
      <div className="flex items-center justify-center my-[2rem]">
        <h1 className="text-4xl">Tekken 8 Resource Library</h1>
      </div>
    </header>
  );
};

export default Navbar;
