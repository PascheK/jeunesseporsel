import React from "react";
import { membreJeunesse } from "@/constants";
import { cn } from "@/lib/utils";

const ComiteSection = () => {
  const membreComite = membreJeunesse.filter((r) => r.role);
  return (
    <section className="comite-section" id="comite-jeunesse">
      <div className="flex size-full flex-col items-center justify-center">
        <h1 className="h1">Notre comité !</h1>
        <div className="m-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {membreComite.map((value, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center justify-center w-full flex-col transition-bigger",
                index === 0 && "md:col-span-4"
              )}
            >
              <div
                className={cn(
                  "shadow-lg rounded-lg border-solid border-2 p-6 h-full border-light-100 ",
                  index !== 0 && "w-full"
                )}
              >
                <h3 className="h3">{value.nom + " " + value.prenom}</h3>
                <p className="">{value.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComiteSection;
