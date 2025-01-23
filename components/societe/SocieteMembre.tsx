import React from "react";
import { membreJeunesse } from "@/constants";

const MembreSection = () => {
  const membres = membreJeunesse.sort((a, b) => a.nom.localeCompare(b.nom));
  const groupedMembres = membres.reduce(
    (acc, membre) => {
      const firstLetter = membre.nom[0].toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(membre.nom + " " + membre.prenom);
      return acc;
    },
    {} as { [key: string]: string[] }
  );
  return (
    <section className="membre-section">
      <div className="flex size-full flex-col items-center justify-center">
        <h1 className="h1">Nos membres !</h1>
        <div className="flex w-4/5 flex-wrap items-center justify-center items-stretch">
          {Object.keys(groupedMembres).map((letter, index) => (
            <div
              key={index}
              className="flex w-full flex-col justify-center md:w-1/3 h-full my-6"
            >
              <div className="text-left mx-auto h-full w-[200px]">
                <h2 className="h2">{letter}</h2>
                {groupedMembres[letter].map((nom, index) => (
                  <p key={index} className="membre-item">
                    {nom}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembreSection;
