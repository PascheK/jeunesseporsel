"use client";
import React, { useEffect, useState } from "react";
import Evenement from "@/components/fondue/Evenement";

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
    <section className="fondue-section flex flex-col items-center justify-center bg-jeunesse-white">
      <h1 className=" sm:ml-6 h1">Réserver vos place !</h1>

      {isDataEmpty ? (
        <div className="flex items-center justify-center">
          <p>data empty</p>
        </div>
      ) : (
      <>
        {listEvents.map((event: Evenements) => (

          <Evenement key={event.id} {...event} />
        ))}
      </>
        
      )}
    
 
    </section>
  );
};

export default FondueEvenementDisplayer;
