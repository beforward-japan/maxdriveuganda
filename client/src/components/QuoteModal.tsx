
import React, { useState } from "react";

type Props = { open: boolean; onClose: () => void };

export default function QuoteModal({ open, onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    make: "",
    model: "",
    year: "",
    mileage: "",
    company: "", // honeypot
  });
  const [status, setStatus] = useState<{sending:boolean; ok:null|boolean; msg:string}>({
    sending: false, ok: null, msg: ""
  });

  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.company) return; // bot
    setStatus({ sending: true, ok: null, msg: "" });
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          make: form.make.trim(),
          model: form.model.trim(),
          year: form.year.trim(),
          mileage: form.mileage.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.ok !== true) throw new Error(data.error || "Failed to send. Try again.");
      setStatus({ sending: false, ok: true, msg: "Thank you! We’ll contact you shortly." });
      setForm({ name: "", phone: "", make: "", model: "", year: "", mileage: "", company: "" });
    } catch (err:any) {
      setStatus({ sending: false, ok: false, msg: err.message || "Something went wrong." });
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-black/50 p-4" onClick={onClose} role="dialog" aria-modal="true">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl" onClick={(e)=>e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="m-0 text-lg font-semibold">Request a Transparent Quote</h3>
          <button onClick={onClose} aria-label="Close" className="text-2xl leading-none">&times;</button>
        </div>

        <form onSubmit={submit} className="space-y-3">
          <input type="text" name="company" value={form.company} onChange={update} className="hidden" />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Name</label>
              <input required name="name" value={form.name} onChange={update} placeholder="Your full name"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"/>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Contact number</label>
              <input required name="phone" value={form.phone} onChange={update} placeholder="+256 7xx xxx xxx"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"/>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Car Make</label>
              <input required name="make" value={form.make} onChange={update} placeholder="Toyota"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"/>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Car Model</label>
              <input required name="model" value={form.model} onChange={update} placeholder="Harrier"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"/>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Year</label>
              <input required name="year" value={form.year} onChange={update} placeholder="2017"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"/>
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Mileage</label>
              <input required name="mileage" value={form.mileage} onChange={update} placeholder="120,000 km"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"/>
            </div>
          </div>

          <div className="mt-2 flex gap-2">
            <button type="submit" disabled={status.sending} className="rounded-xl bg-orange-600 px-4 py-2 font-semibold text-white disabled:opacity-70">{
              status.sending ? "Sending..." : "Submit"
            }</button>
            <button type="button" onClick={onClose} className="rounded-xl bg-slate-600 px-4 py-2 font-semibold text-white hover:brightness-95">Cancel</button>
          </div>

          {status.msg && (
            <p className={"mt-2 " + (status.ok ? "text-green-600" : "text-red-600")}>{status.msg}</p>
          )}
        </form>
      </div>
    </div>
  );
}
