

import Image from "next/image";

import One from "../images/input-notations/1.png";
import Two from "../images/input-notations/2.png";
import Three from "../images/input-notations/3.png";
import Four from "../images/input-notations/4.png";

import OnePlusTwo from "../images/input-notations/12.png";
import OnePlusThree from "../images/input-notations/13.png";
import OnePlusFour from "../images/input-notations/14.png";

import TwoPlusThree from "../images/input-notations/23.png";
import TwoPlusFour from "../images/input-notations/24.png";

import ThreePlusFour from "../images/input-notations/34.png";


interface renderCellContentParams {
  key: number;
  value: number;
}

const renderCellContent = (key: string, value: string | number) => {
  if (key) {
    switch (value) {
      case "1+2":
        return (
          <>
            <Image
              src={OnePlusTwo}
              alt=""
              className="w-4 h-auto inline-block mr-2"
            />
            {value}
          </>
        );
      case "1+2,2":
        return (
          <>
            <Image
              src={OnePlusTwo}
              alt=""
              className="w-4 h-auto inline-block mr-2"
            />
            {", "}
            <Image src={Two} alt="" className="w-4 h-auto inline-block mr-2" />
            {value}
          </>
        );
      case "1":
        return (
          <>
            <Image src={One} alt="" className="w-4 h-auto inline-block mr-2" />
            {value}
          </>
        );
      case "3":
        return (
          <>
            <Image
              src={Three}
              alt=""
              className="w-4 h-auto inline-block mr-2"
            />
            {value}
          </>
        );
      // Add more cases if needed
      default:
        return value;
    }
  }
  return value;
};

export default renderCellContent;
