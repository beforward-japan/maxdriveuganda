import React from "react";
import { motion } from "framer-motion";
import { 
  Car, 
  Ship, 
  ShieldCheck, 
  ClipboardList, 
  Banknote, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  CheckCircle2,
  Search,
  FileText,
  Truck,
  Package,
  Wrench,
  MessageCircle,
  Clock
} from "lucide-react";

import Logo_PNG from "@assets/Logo PNG.png";
import BeForwardLogo from "@assets/beforward-removebg-preview (1)_1755712664023.png";
import StanmoreLogo from "@assets/logo_stanmore_holdings_1755712738680.gif";
import TransfreightLogo from "@assets/Logo-1_1755712653982.png";
import ConsolbaseLogo from "@assets/Logo-1_1755712677391.png";

const Container = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-[45px] pb-[45px] pl-[36px] pr-[36px] ${className}`}>{children}</div>
);

const SectionTitle = ({ eyebrow, title, subtitle }: { eyebrow?: string, title: string, subtitle?: string }) => (
  <div className="mb-10 text-center">
    {eyebrow && (
      <p className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wide text-primary">{eyebrow}</p>
    )}
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    {subtitle && <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">{subtitle}</p>}
  </div>
);

const Stat = ({ label, value }: { label: string, value: string }) => (
  <div className="rounded-2xl bg-muted p-6 text-center shadow-sm">
    <p className="text-3xl font-bold">{value}</p>
    <p className="mt-1 text-sm text-muted-foreground">{label}</p>
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc }: { icon: React.ElementType, title: string, desc: string }) => (
  <div className="group rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md">
    <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary"><Icon className="h-6 w-6" /></div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
  </div>
);

const PHONE_INTL = "+256708914167";
const WHATSAPP_LINK = `https://wa.me/256708914167`;
const QUOTE_LINK = "/quote";

const BANKS = [
  { label: "Bank", value: "DIAMOND TRUST BANK (DTB)" },
  { label: "Account Name", value: "MAX DRIVE UGANDA LIMITED" },
  { label: "UGX", value: "0270408001" },
  { label: "USD", value: "0270408002" },
  { label: "Branch code", value: "001" },
  { label: "Swift", value: "DTKEUGKA" },
];

const steps = [
  { title: "Tell us your need & budget", text: "Share vehicle preferences, budget range, and destination requirements." },
  { title: "We source & verify options", text: "Professional sourcing with condition verification and price negotiation." },
  { title: "Pro-forma & TT", text: "Detailed quotation with transparent fees and secure payment processing." },
  { title: "Shipping & clearance", text: "Professional shipping management and customs clearance handling." },
  { title: "Registration, delivery & after-sales", text: "Complete registration, number plates, delivery and ongoing support." },
];

const services = [
  { icon: Search, title: "Vehicle Sourcing", desc: "Professional vehicle selection based on your budget and requirements, with quality and history checks. Sourcing from partners in Japan, UK, UAE, Thailand and other locations." },
  { icon: FileText, title: "Transparent Quotation", desc: "Complete cost breakdown with no hidden fees or surprises from C&F Prices, Clearance costs, Delivery Charges, Precise Duty, Tax and Registration Estimates." },
  { icon: ShieldCheck, title: "Pre-shipping Inspection", desc: "Official Pre-Shipping Inspection with UNBS Agents, Transparent condition reports and Auction reports." },
  { icon: Ship, title: "Shipping", desc: "Reliable RoRo and container shipping with tracking and updates." },
  { icon: Package, title: "Port Clearance & Storage (Mombasa or Tanzania)", desc: "Professional customs clearance and secure port storage." },
  { icon: ClipboardList, title: "Registration & Number Plates", desc: "Complete URBS registration and number plate processing." },
  { icon: Truck, title: "Transport — Driven or Car Carrier", desc: "Safe vehicle transport via professional drivers or car carriers." },
  { icon: Car, title: "Delivery", desc: "Secure delivery to your preferred location with all documentation." },
  { icon: Wrench, title: "After-Sales Support", desc: "Servicing, Car wash, Minor repairs, customisations & add-ons. Ongoing support for maintenance, customization and additional services." },
];

const partnerships = [
  { 
    name: "BeForward Japan", 
    url: "https://www.beforward.jp", 
    logo: BeForwardLogo 
  },
  { 
    name: "Stanmore Holdings", 
    url: "https://www.stanmore.co.ke", 
    logo: StanmoreLogo 
  },
  { 
    name: "Transfreight Logistics", 
    url: "https://transfreight.co.ke/", 
    logo: TransfreightLogo 
  },
  { 
    name: "Consolbase Limited", 
    url: "https://www.consolbase.co.ke/", 
    logo: ConsolbaseLogo 
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img src={Logo_PNG} alt="Max Drive Uganda" className="h-8 w-auto object-contain pl-[-52px] pr-[-52px]" />
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Process</a>
            <a href="#partners" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Partners</a>
            <a href="#trust" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Trust</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a 
              href={QUOTE_LINK} 
              className="hidden rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity md:inline-block"
              data-testid="button-request-quote-nav"
            >
              Request a Quote
            </a>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noreferrer" 
              className="rounded-xl border px-4 py-2 text-sm font-semibold hover:bg-muted transition-colors"
              data-testid="button-whatsapp-nav"
            >
              WhatsApp Us
            </a>
          </div>
        </Container>
      </header>
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden border-b">
          <Container className="py-16 md:py-24">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }} 
                className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
                data-testid="text-hero-title"
              >
                <div>From Dreams to Wheels</div>
                <div className="text-3xl sm:text-4xl lg:text-5xl mt-2">Vehicle Import, Done Right</div>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.1 }} 
                className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground"
                data-testid="text-hero-subtitle"
              >We provide end-end vehicle import—sourcing to delivery solutions for your personal and business needs.</motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }} 
                className="mt-8 flex flex-wrap items-center justify-center gap-4"
              >
                <a 
                  href={QUOTE_LINK} 
                  className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
                  data-testid="button-get-quotation"
                >
                  Get a Transparent Quotation <ArrowRight className="h-4 w-4" />
                </a>
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 rounded-2xl border px-6 py-3 font-semibold hover:bg-muted transition-colors"
                  data-testid="button-whatsapp-hero"
                >
                  WhatsApp Us <MessageCircle className="h-4 w-4" />
                </a>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.3 }} 
                className="mt-6 flex items-center justify-center gap-2 rounded-xl border bg-muted/50 px-4 py-3 shadow-sm"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">or call</span>
                <a 
                  href={`tel:${PHONE_INTL}`} 
                  className="text-base font-semibold text-primary hover:text-primary/80 transition-colors"
                  data-testid="link-phone-hero"
                >
                  +256 708 914 167
                </a>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* SERVICES */}
        <section id="services" className="border-b py-16 md:py-24">
          <Container>
            <SectionTitle 
              eyebrow="Our Services" 
              title="Complete Vehicle Import Solution" 
              subtitle="End-to-end services from sourcing to delivery, with full transparency at every step." 
            />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FeatureCard 
                    icon={service.icon} 
                    title={service.title} 
                    desc={service.desc} 
                  />
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* PROCESS */}
        <section id="process" className="border-b py-16 md:py-24">
          <Container>
            <SectionTitle 
              eyebrow="How it works" 
              title="Simple 5-Step Process" 
              subtitle="Clear steps from initial consultation to vehicle delivery and beyond." 
            />
            <ol className="grid grid-cols-1 gap-6 md:grid-cols-5">
              {steps.map((step, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative rounded-2xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
                  data-testid={`card-process-step-${i + 1}`}
                >
                  <span className="absolute -top-3 left-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-sm">
                    {i + 1}
                  </span>
                  <h4 className="mt-3 text-base font-semibold">{step.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
                </motion.li>
              ))}
            </ol>
          </Container>
        </section>

        {/* PARTNERSHIPS */}
        <section id="partners" className="border-b py-16 md:py-24 bg-muted/30">
          <Container>
            <SectionTitle 
              eyebrow="Official Partnerships" 
              title="Trusted Global Network" 
              subtitle="We work with established partners to ensure reliable sourcing and shipping." 
            />
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {partnerships.map((partner) => (
                <motion.a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group flex flex-col items-center gap-4 rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  data-testid={`link-partner-${partner.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex h-12 w-full items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className="max-h-10 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                    {partner.name}
                  </h3>
                </motion.a>
              ))}
            </div>
          </Container>
        </section>

        {/* TRUST & SAFETY */}
        <section id="trust" className="border-b py-16 md:py-24">
          <Container>
            <SectionTitle 
              eyebrow="Trust & Safety" 
              title="Official Banking & Payment Policy" 
              subtitle="Secure payments through our official bank accounts only. Your safety and transparency are our priorities." 
            />
            
            {/* Payment Policy Bullets */}
            <div className="mb-12 rounded-2xl border bg-card p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-semibold text-center">Payment Policy</h3>
              <ul className="space-y-4 max-w-3xl mx-auto">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Payments are accepted only via our official MDL bank accounts or direct TT to Japan.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">All TT and bank charges are borne by the client.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Payments to sales staff will not be accepted and MDL will not be liable.</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Banking Details */}
              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <h3 className="mb-6 text-lg font-semibold">Official Banking Details</h3>
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {BANKS.map((bank) => (
                    <div key={bank.label}>
                      <dt className="text-xs uppercase tracking-wide text-muted-foreground">{bank.label}</dt>
                      <dd className="text-sm font-medium" data-testid={`text-bank-${bank.label.toLowerCase().replace(/\s+/g, '-')}`}>
                        {bank.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Benefits */}
              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <h3 className="mb-6 text-lg font-semibold">Why Choose Max Drive</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Transparent quotations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">URA-compliant paperwork</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">End-to-end to number plates</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16 md:py-24">
          <Container>
            <SectionTitle 
              eyebrow="Get Started" 
              title="Ready to Import Your Vehicle?" 
              subtitle="Contact us today for professional guidance and transparent pricing." 
            />
            
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Contact Actions */}
              <div className="space-y-6">
                <div className="rounded-2xl border bg-card p-8 shadow-sm text-center">
                  <h3 className="mb-6 text-xl font-semibold">Get in Touch</h3>
                  <div className="space-y-4">
                    <a 
                      href={WHATSAPP_LINK} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-50 border border-green-200 px-6 py-3 font-semibold text-green-700 hover:bg-green-100 transition-colors"
                      data-testid="button-whatsapp-contact"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp Us
                    </a>
                    <a 
                      href={`tel:${PHONE_INTL}`} 
                      className="flex w-full items-center justify-center gap-2 rounded-xl border px-6 py-3 font-semibold hover:bg-muted transition-colors"
                      data-testid="button-call-contact"
                    >
                      <Phone className="h-5 w-5" />
                      {PHONE_INTL}
                    </a>
                  </div>
                  <p className="mt-6 text-sm text-muted-foreground">
                    Request a quote and we'll guide you end-to-end.
                  </p>
                </div>

                {/* Business Hours */}
                <div className="rounded-2xl border bg-card p-6 shadow-sm">
                  <h4 className="mb-4 text-lg font-semibold flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Business Hours
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-muted-foreground">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-muted-foreground">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="rounded-2xl border bg-card p-6 shadow-sm">
                  <h4 className="mb-4 text-lg font-semibold">Contact Information</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground" data-testid="text-phone-contact">
                          {PHONE_INTL}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-muted-foreground" data-testid="text-email-contact">
                          info@maxdriveuganda.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Location</p>
                        <p className="text-sm text-muted-foreground" data-testid="text-location-contact">
                          Kampala, Uganda
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border bg-card p-6 shadow-sm">
                  <h4 className="mb-4 text-lg font-semibold">Professional Service</h4>
                  <div className="space-y-3">
                    <Stat label="Years of Experience" value="10+" />
                    <Stat label="Vehicles Imported" value="1,000+" />
                    <Stat label="Average Quote Time" value="< 5 min" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      {/* FOOTER */}
      <footer className="border-t bg-muted/30">
        <Container className="py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="Max Drive Uganda" className="h-8 w-auto object-contain" />
                <span className="text-lg font-bold tracking-tight">Max Drive Uganda Ltd</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-md">
                Professional vehicle import services with transparent pricing and reliable delivery. Manual payments only via official MDL bank accounts.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Quick Links</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-foreground transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-foreground transition-colors">Services</a></li>
                <li><a href="#process" className="hover:text-foreground transition-colors">Process</a></li>
                <li><a href="#partners" className="hover:text-foreground transition-colors">Partners</a></li>
                <li><a href="#trust" className="hover:text-foreground transition-colors">Trust</a></li>
                <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Contact</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>{PHONE_INTL}</li>
                <li>info@maxdriveuganda.com</li>
                <li>Kampala, Uganda</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Max Drive Uganda Limited. All rights reserved.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Manual payments only via official MDL bank accounts.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
