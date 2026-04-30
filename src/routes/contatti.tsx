import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — La Bella Matil · Pizzeria a Galliate" },
      {
        name: "description",
        content:
          "Prenota un tavolo da La Bella Matil: Via Trieste 102, Galliate (NO). Tel 0321 862363. Forno a legna e forno gluten free dedicato.",
      },
      { property: "og:title", content: "Contatti · La Bella Matil" },
      { property: "og:description", content: "Via Trieste 102, Galliate · 0321 862363" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-32 md:pt-40 pb-16 mx-auto max-w-7xl px-5 md:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">Vieni a trovarci</p>
        <h1 className="text-display text-[clamp(3rem,9vw,7rem)] leading-[0.95] max-w-5xl">
          Prenota un <span className="italic text-gradient-ember">tavolo</span>,<br />
          ti aspettiamo.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-10 grid md:grid-cols-5 gap-10 pb-24">
        <div className="md:col-span-2 space-y-6">
          <ContactCard icon={Phone} title="Telefono" body="0321 862363" href="tel:0321862363" cta="Chiama ora" />
          <ContactCard
            icon={MapPin}
            title="Indirizzo"
            body={"Via Trieste 102\n28066 Galliate (NO)"}
            href="https://maps.google.com/?q=Via+Trieste+102+Galliate"
            cta="Apri in Maps"
          />
          <ContactCard
            icon={Clock}
            title="Orari"
            body={"Lun–Dom · 12:00 – 14:30\n19:00 – 22:00"}
          />
          <ContactCard icon={Mail} title="Eventi & feste" body="Cene private, compleanni, gruppi su prenotazione" />
        </div>

        <div className="md:col-span-3 rounded-2xl overflow-hidden border border-border min-h-[420px] md:min-h-full">
          <iframe
            title="Mappa La Bella Matil"
            src="https://www.google.com/maps?q=Via+Trieste+102+Galliate+NO&output=embed"
            className="w-full h-full min-h-[420px] grayscale-[40%] contrast-[110%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="bg-card/40 border-y border-border/50 py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-10 text-center">
          <h2 className="text-display text-4xl md:text-5xl mb-6">
            Hai un'<span className="italic text-gradient-ember">intolleranza</span>?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Disponiamo di un forno completamente dedicato alle pizze senza glutine,
            con ingredienti separati. Comunicacelo in fase di prenotazione: prepareremo
            tutto con la massima cura.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  body,
  href,
  cta,
}: {
  icon: typeof Phone;
  title: string;
  body: string;
  href?: string;
  cta?: string;
}) {
  return (
    <div className="p-7 rounded-2xl border border-border bg-background/60">
      <Icon className="w-6 h-6 text-accent mb-4" strokeWidth={1.5} />
      <h3 className="text-2xl mb-2">{title}</h3>
      <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{body}</p>
      {href && cta && (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-accent hover:text-foreground transition-colors text-sm border-b border-accent/40 pb-0.5"
        >
          {cta}
        </a>
      )}
    </div>
  );
}
