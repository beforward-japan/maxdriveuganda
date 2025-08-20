import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  
  // Quote submission endpoint
  app.post("/api/quote", async (req, res) => {
    try {
      const { name, phone, make, model, year, mileage } = req.body || {};
      if (![name, phone, make, model, year, mileage].every(Boolean)) {
        return res.status(400).json({ ok: false, error: "All fields are required." });
      }

      const host = process.env.SMTP_HOST;
      const port = Number(process.env.SMTP_PORT || 587);
      const user = process.env.SMTP_USER;
      const pass = process.env.SMTP_PASS;
      const to = process.env.TO_EMAIL || "aliakber@maxdriveug.com";
      const from = process.env.FROM_EMAIL || user;

      if (!host || !user || !pass) {
        return res.status(500).json({ ok: false, error: "Email not configured on server." });
      }

      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });

      const subject = `Quote Request — ${make} ${model} (${year})`;
      const escape = (s: string = "") => String(s).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[c] as string));
      const text = [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Make: ${make}`,
        `Model: ${model}`,
        `Year: ${year}`,
        `Mileage: ${mileage}`
      ].join("\n");

      const html = \`
        <h2>New quote request</h2>
        <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
          <tr><td><b>Name</b></td><td>\${escape(name)}</td></tr>
          <tr><td><b>Phone</b></td><td>\${escape(phone)}</td></tr>
          <tr><td><b>Make</b></td><td>\${escape(make)}</td></tr>
          <tr><td><b>Model</b></td><td>\${escape(model)}</td></tr>
          <tr><td><b>Year</b></td><td>\${escape(year)}</td></tr>
          <tr><td><b>Mileage</b></td><td>\${escape(mileage)}</td></tr>
        </table>\`;

      await transporter.sendMail({ from, to, subject, text, html });
      return res.json({ ok: true });
    } catch (err) {
      console.error("QUOTE SEND ERROR:", err);
      return res.status(500).json({ ok: false, error: "Failed to send email." });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
