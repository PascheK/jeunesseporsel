"use client";
import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("cookie-consent");
    if (!saved) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cookie-consent", "true");
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex flex-col items-center gap-2 bg-jeunesse-white p-4 text-black">
      <p>Ce site utilise des cookies pour améliorer votre expérience.</p>
      <button onClick={accept} className="rounded bg-brand px-4 py-2 text-white">
        Accepter
      </button>
    </div>
  );
};

export default CookieConsent;
