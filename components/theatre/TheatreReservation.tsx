import React from "react";

const TheatreReservation = () => {
  return (
    <section className="reservation-theatre" id="reservation-theatre">
      <div className="flex w-full flex-col items-center justify-between gap-8">
        <h1 className="h1">Réservation</h1>
        <div className="flex w-full flex-col justify-center  gap-4 sm:flex-row">
          <div className="sm:w-1/3 w-full">
            <h4 className="h4 p-2"> Réservation :</h4>
            <div className="m-2 text-lg">
              <p>
                Les places de théatres sont malheureusement limitées. Nous vous recommandons de réserver vos places à l&apos;avance pour être sûr d&apos;avoir une place. La salle de théatre peut accueillir environ 200 personnes.
                Pour réserver vos places, merci de nous contacter par téléphone
                au{" "} <br/>
                <span className="bg-brand-100 rounded-md p-1 font-bold hover:text-white transition-colors">
                 <a href='tel:+4177538505'> +41 77 538 50 05</a>
                </span>
                .
              </p>
            </div>
          </div>
          <div className="sm:w-1/3 w-full">
            <h4 className="h4 p-2">Pour résumé :</h4>
            <div className="m-2 text-lg">
              <p>
                📍 <span className="font-bold">Lieu : </span>
              </p>
              <li className="ml-5 list-disc">Fleurs de lys</li>
              <p>
                📅 <span className="font-bold">Dates : </span>
              </p>
              <li className="ml-5 list-disc">
                Vendredi 17 - 31 JANVIER 2025 | 20H
              </li>
              <li className="ml-5 list-disc">
                Samedi 18 - 25 JANVIER & 1 FEVRIER 2025 | 20H
              </li>
              <li className="ml-5 list-disc">Dimanche 19 JANVIER 2025 | 15H</li>
              <p>
                ⏳ <span className="font-bold">Durée : </span>
              </p>
              <li className="list-disk ml-5">Environ 1h30.</li>
              <p>
                🎟️ <span className="font-bold">Réservations : </span>
              </p>
              <li className="list-disk ml-5">
                Par téléphone au{" "}
                <span className="bg-brand-100 rounded-md p-1 font-bold hover:text-white transition-colors">
                <a href='tel:+4177538505'> +41 77 538 50 05</a>
                </span>
                .
              </li>
              <p>
                🚗 <span className="font-bold">Accès : </span>{" "}
              </p>
              <li className="list-disk ml-5"> Parking gratuit à proximité.</li>
              <p>
                📢 <span className="font-bold">Public : </span>{" "}
              </p>
              <li className="list-disk ml-5">
                Tout public, adapté aux enfants.
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheatreReservation;
