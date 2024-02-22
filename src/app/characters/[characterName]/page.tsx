import React from "react";
import { CharacterData } from "@/app/data/CharacterData";
import renderCellContent from "./RenderCell";
import Image from "next/image";

import One from "@/app/images/input-notations/1.png";
import Two from "@/app/images/input-notations/2.png";
import Three from "@/app/images/input-notations/3.png";
import Four from "@/app/images/input-notations/4.png";

import OnePlusTwo from "@/app/images/input-notations/12.png";
import OnePlusThree from "@/app/images/input-notations/13.png";
import OnePlusFour from "@/app/images/input-notations/14.png";

import TwoPlusThree from "@/app/images/input-notations/23.png";
import TwoPlusFour from "@/app/images/input-notations/24.png";

import ThreePlusFour from "@/app/images/input-notations/34.png";

interface characterDetailsParams {
  characterName: string;
}

interface CharacterDetailsProps {
  params: characterDetailsParams;
}

export default function CharacterDetails({ params }: CharacterDetailsProps) {
  const characterName = params.characterName;

  interface renderCellContentParams {
    key: number;
    value: number;
  }

  // Calling render Punishment from TSX file
  renderCellContent;

  const character = CharacterData.find(
    (char) => char.name.toLowerCase() === characterName?.toLowerCase()
  );

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="flex-col items-center justify-center">
        <div>
          <strong className="mx-auto">{character.name}</strong>
          <Image
            className="w-[13rem] h-auto mx-auto mb-[3rem] rounded-full"
            src={character.picture}
            alt={character.name}
          />
          <p>{character.description}</p>
          <p>{character.gameplan}</p>
        </div>
        <div className="flex flex-row justify-center gap-[2rem] rounded-md p-[1.5rem] my-[2rem] mx-[15rem] bg-white">
          <div>
            <strong className="bg-green-400 text-black text-2xl">
              Strengths
            </strong>
            <ul className="px-[2rem]">
              {character.strengths.map((item, index) => (
                <li className="my-[0.5rem] list-disc text-black" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <strong className="bg-red-400 text-black text-2xl">
              Weaknesses
            </strong>
            <ul className="px-[2rem]">
              {character.weaknesses.map((item, index) => (
                <li className="my-[0.5rem] list-disc text-black" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-[4rem]">
          <h2 className="text-center text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4">
            Punishments
          </h2>
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border p-2">Move</th>
                <th className="border p-2">Type</th>
                <th className="border p-2">Damage</th>
                <th className="border p-2">Startup</th>
                <th className="border p-2">On Block</th>
                <th className="border p-2">On Hit</th>
                <th className="border p-2">Counter Hit</th>
                <th className="border p-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              {character.punishment.map(
                (row: Record<string, string>, rowIndex: number) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-black" : ""}
                  >
                    {Object.keys(row).map((key, colIndex) => (
                      <td
                        key={colIndex}
                        className="border p-2 whitespace-nowrap"
                      >
                        {renderCellContent(key, row[key])}
                      </td>
                    ))}
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
