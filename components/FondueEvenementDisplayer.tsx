"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const FondueEvenementDisplayer = () => {
  const [isDataEmpty, setIsDataEmpty] = useState(true)
  const [listEvents, setListEvents] = useState<Evenements[]>([]);
  useEffect(() => {

    fetch("api/evenements", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.status != 500) {
        setIsDataEmpty(data.data.length === 0)
        setListEvents(data.data);
        }
      })
      .catch((error) => {
        setIsDataEmpty(true)
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section className="bg-jeunesse-white fondue-section">
      <h1 className=" sm:ml-6 h1">Réserver vos place !</h1>
      <h3 className="sm:ml-12 h3">Infos pratiques</h3>

             <div className='grid grid-cols-1 md:grid-cols-3 gap-5 items-start'>
              <div className='cards'  data-aos="fade-up">
                <Image src='/assets/icons/locate.svg' alt='lieu' width={50} height={50} className=''/>
                <h2 className='h2'>Lieu et accès</h2> 
                <p>Le souper villageois se déroulera dans la salle polyvalante de Porsel. Il y a un parking juste à coté de la salle. Nous vous conseillons d&apos;arrivé 30 minutes avant le début du souper pour profiter pleinement de l&apos;ambiance et éviter tout stress. </p> 
              </div>
              <div className='cards'>
              <Image src='/assets/icons/time.svg' alt='temps' width={50} height={50}/>
              <h2 className='h2'>Durée ?</h2>  
              <p>Le souper dure le temps que vous voudrez manger. Venez profiter du souper et manger une bonne fondue !</p>
              </div>
              <div className='cards'>
              <Image src='/assets/icons/question-mark.svg' alt='question' width={50} height={50}/>
              <h2 className='h2'>Que faire après ?</h2>  
              <p>Lorsque vous avez finis votre fondue, un apéritif est servie et le bar est ouvert jusqu'au bout de la nuit.</p>
              </div>
             </div>
      {isDataEmpty ? (
        <div className="flex items-center justify-center">
          <p>data empty</p>
        </div>
      ) : (
      <>
        {listEvents.map((event: Evenements) => (
          <div key={event.id} className="flex flex-col items-center justify-center">
            <h2 className="h2">{event.nom}</h2>
            <p>{event.jour + ' '+event.date}</p>
            <p>{event.nbPlace}</p>
          </div>
        ))}
      </>
        
      )}
    
 
    </section>
  );
};

export default FondueEvenementDisplayer;
