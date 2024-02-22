import React from "react";
import { FC } from "react";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { CharacterData } from "@/app/data/CharacterData";
import { useRouter } from "next/router";

// Define the type for your character data
interface CharacterProps {
  name: string;
  description?: string;
  picture: string;
}

const CharacterPage = () => {
  const router = useRouter();
  return (
    <div className="text-white">
      <h1>name: {router.query.slug}</h1>
      <p>test</p>
    </div>
  );
};

export default CharacterPage;
