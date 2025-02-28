import React from "react";

const TheatreSynopsys = () => {
  return (
    <section className="presentation" >
      <div className=" flex w-auto flex-col m-auto sm:w-4/5 gap-5 " >
      <h1 className="h1 py-5 px-2" >Un soucis à l&apos;étude</h1>
   
        <div className="bg-jeunesse opacity-95 text-jeunesse-white mx-2  rounded-xl bg-opacity-90 p-2 shadow-drop-3 lg:w-2/3 w-auto sm:m-auto  sm:p-10 ">
          <div className="guillmets flex w-auto items-start">
            <h1>“</h1>
          </div>
          <div className="synopsis">
            <h4 className="h4">Synopsys :</h4>
            <p className="pt-5 first-letter:text-[60px] first-letter:font-semibold">
              Oh ! Non, les soucis ne vont pas manquer à l&apos;étude de Maître
              Stanislas Dobrowlosky ! Ce jeune et brillant avocat est réputé
              dans le domaine de la défense des locataires. Or, un grand nombre
              de situations compliquées vont se succéder et sa fidèle secrétaire
              a beaucoup de mal à filtrer les clients qui défilent, tous assez
              pittoresques. Elle n&apos;est guère aidée par une stagiaire presque
              aphone. Entre les plaintes pour abus dans les loyers ou les soucis
              financiers d&apos;une cousine de la petite noblesse, Stan ne sait plus
              où donner de la tête. Même son propre locataire, un brave fermier,
              vient « gueuler » car il a reçu une facture exorbitante. Et il
              n&apos;est de loin pas le seul à avoir rendezvous ! Comment l&apos;homme de
              loi réussira-t-il à dénouer les fils de ces très compliquées
              affaires ? Vous le saurez, …. ou pas, … en suivant les quatre
              actes de notre petite comédie. Bonne soirée. Nicolas Bussard
            </p>
          </div>
          <div className="guillmets flex w-auto justify-end">
            <h1>”</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheatreSynopsys;
