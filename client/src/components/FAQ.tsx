import React from "react";

export default function FAQ() {
  const qa = [
    ["How long does it take to import a car from Japan to Uganda?","Typically 6–10 weeks end‑to‑end depending on vessel schedules and clearance times."],
    ["Do you handle customs clearance and URA registration?","Yes. We manage clearance at port, storage, URA registration and number plates, then deliver to your location."],
    ["Which payment methods do you accept?","We only use official banking channels for safety and transparency."],
    ["Can I get a transparent quotation before I commit?","Absolutely. Share your name, contact, make, model, year and mileage; we’ll send a detailed quote with all fees itemized."]
  ];
  return (
    <section className="section" id="faq">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="grid gap-3">
          {qa.map(([q,a]) => (
            <details key={q} className="rounded-xl bg-white p-4 shadow-sm">
              <summary className="cursor-pointer select-none font-semibold">{q}</summary>
              <p className="mt-2 text-slate-700">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
