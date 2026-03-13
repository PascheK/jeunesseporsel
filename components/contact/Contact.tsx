import React from "react";
import MailForm from "@/components/forms/FormMail";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="m-auto md:w-4/5">
        <h1 className="h1 m-auto mb-10">Contactez nous !</h1>
        <MailForm />
        <div className="m-auto my-5">
          <h3 className="h3 text-center">Autres moyens pour nous contacter !</h3>
          <div className="my-5 flex flex-col items-center gap-6">
            <p>
              📞 Téléphone :{" "}
              <span className="hover:text-brand rounded-md p-1 font-bold transition-colors">
                <a href="tel:+41763103560"> +41 76 310 35 60</a>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
