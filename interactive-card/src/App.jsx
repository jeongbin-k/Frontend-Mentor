import "./reset.css";
import "./App.css";
import CardPreview from "./components/CardPreview";
import CardForm from "./components/CardForm";
import Complete from "./components/Complete";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    yy: "",
    mm: "",
    cvc: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleContinue = () => {
    setFormData({ name: "", number: "", yy: "", mm: "", cvc: "" });
    setIsSubmitted(false);
  };
  return (
    <main className="app-container">
      <section className="section-left">
        <CardPreview formData={formData} />
      </section>
      <section className="section-right">
        {!isSubmitted ? (
          <CardForm
            formData={formData}
            setFormData={setFormData}
            setIsSubmitted={setIsSubmitted}
          />
        ) : (
          <Complete handleContinue={handleContinue} />
        )}
      </section>
    </main>
  );
}

export default App;
