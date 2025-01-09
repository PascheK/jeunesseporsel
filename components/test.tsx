'use client'
import { useState } from "react";

export default function Modal() {
  const [step, setStep] = useState(1);
  const [isSliding, setIsSliding] = useState(false);

  const handleConfirm = () => {
    // Déclencher l'animation
    setIsSliding(true);

    // Attendre la fin de l'animation
    setTimeout(() => {
      setStep(2);
      setIsSliding(false); // Réinitialise l'animation
    }, 500); // Doit correspondre à la durée CSS
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-96">
        <div
          className={`relative transform transition-transform duration-500 ${
            isSliding ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          {step === 1 ? (
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Inscription</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleConfirm();
                }}
              >
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full mb-4 p-2 border rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full mb-4 p-2 border rounded"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                  Confirmer
                </button>
              </form>
            </div>
          ) : (
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Merci !</h2>
              <p className="text-gray-600">Votre inscription a été prise en compte.</p>
              <button
                onClick={() => setStep(1)}
                className="mt-4 w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
              >
                Retour
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}