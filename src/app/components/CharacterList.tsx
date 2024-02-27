"use client";
import React from "react";
import { CharacterData } from "../data/CharacterData";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CharacterList() {
  const sortedCharacters = [...CharacterData].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div className="text-white container">
      <div>
        <p>
          It is time to get started. No more playing games. This is the real
          game.
        </p>
        <br></br>
        <p>Take your Tekken experience to the next level</p>
        <br></br>
        <p>
          Dive into the intricate world of this iconic fighting game and gain a
          competitive edge by mastering frame data. Our comprehensive guide
          provides in-depth insights into Tekken 8’s frame data mechanics,
          allowing you to make informed decisions during every match.
        </p>
        <br></br>
        <p>
          Discover the precise advantage and disadvantage of every move, perfect
          your combos, and optimize your defensive strategies. With Tekken 8
          frame data at your fingertips, you’ll be better equipped to
          outmaneuver your opponents, execute punishing punishes, and climb the
          ranks to become a true Tekken champion.
        </p>
      </div>
      <motion.div initial="hidden" animate="visible" variants={staggerVariants}>
        <ul className="flex items-center justify-center flex-wrap gap-3 mt-[4rem]">
          {sortedCharacters.map((character, index) => (
            <Link
              key={index}
              href="/characters/[character]"
              as={`/characters/${character.name.toLowerCase()}`}
            >
              <motion.li
                variants={staggerVariants}
                className="flex-20 flex-col justify-center items-center max-w-[10rem] border-[3px] border-solid border-white rounded-md hover:border-blue-500 hover:opacity-[0.5] transition-all duration-300"
              >
                <div className="">
                  <Image
                    className="w-full max-h-[10rem] object-contain bg-gradient-to-r from-red-800 to-indigo-950 h-auto"
                    src={character.picture}
                    width={100}
                    height={100}
                    alt={character.name}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <strong className="text-center">{character.name}</strong>
                </div>
              </motion.li>
            </Link>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
