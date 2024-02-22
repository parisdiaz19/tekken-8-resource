"use client";
import React from "react";
import { CharacterData } from "../data/CharacterData";
import Image from "next/image";
import Link from "next/link";

export default function CharacterList() {
  const sortedCharacters = [...CharacterData].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return (
    <div className="text-white container">
      <div className="text-center">
        <p>
          It is time to get started. No more playing games. This is the real
          game.
        </p>
        <p>Take your Tekken experience to the next level</p>
        <p>
          Dive into the intricate world of this iconic fighting game and gain a
          competitive edge by mastering frame data. Our comprehensive guide
          provides in-depth insights into Tekken 8’s frame data mechanics,
          allowing you to make informed decisions during every match.
        </p>
        <p>
          Discover the precise advantage and disadvantage of every move, perfect
          your combos, and optimize your defensive strategies. With Tekken 8
          frame data at your fingertips, you’ll be better equipped to
          outmaneuver your opponents, execute punishing punishes, and climb the
          ranks to become a true Tekken champion.
        </p>
      </div>
      <ul className="flex items-center justify-center flex-wrap gap-3 mt-[4rem]">
        {sortedCharacters.map((character, index) => (
          <Link
            key={index}
            href="/characters/[character]" as={`/characters/${character.name.toLowerCase()}`}
          >
            <li className="flex-20 flex-col justify-center items-center max-w-[10rem]">
              <Image
                className="rounded-full w-full max-h-[10rem] object-contain  bg-gradient-to-r from-red-800 to-indigo-950 border-white h-auto"
                src={character.picture}
                width={100}
                height={100}
                alt={character.name}
              ></Image>
              <div className="flex items-center justify-center">
                <strong className="text-center">{character.name}</strong>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
