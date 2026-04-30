import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Star, Flame, Wheat, Clock, MapPin, Phone, ArrowRight, Quote } from "lucide-react";
import heroForno from "@/assets/hero-forno.jpg";
import margherita from "@/assets/pizza-margherita.jpg";
import tagliere from "@/assets/tagliere.jpg";
import pizzaiolo from "@/assets/pizzaiolo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Bella Matildetta — Pizzeria con forno a legna & Gluten Free a Galliate" },
      {
        name: "description",
        content:
          "Pizzeria La Bella Matildetta a Galliate (NO): pizze cotte nel forno a legna e forno dedicato senza glutine. Cucina casereccia, taglieri, 4,6★ su Google.",
      },
      { property: "og:title", content: "La Bella Matildetta — Pizzeria a Galliate" },
      { property: "og:description", content: "Forno a legna, forno gluten free dedicato e cucina casereccia." },
      { property: "og:image", content: "/og-home.jpg" },
    ],
  }),
  component: HomePage,
});

const reviews = [
  {
    name: "Fabian Fabi",
    rating: 5,
    text: "Tagliere davvero eccezionale! I salumi erano freschissimi e di alta qualità, con un sapore autentico.",
    when: "1 mese fa",
  },
  {
    name: "Claudio Ventimiglia",
    rating: 5,
    text: "Sulla pizza nulla da dire, eccezionale. Ma la magia è nella cucina casereccia, all'altezza di quella della nonna. Bravo Michele!",
    when: "2 mesi fa",
  },
  {
    name: "Giuseppe Miranda",
    rating: 4,
    text: "Pizza veramente buona. Ambiente accogliente, una scelta sicura per la serata.",
    when: "1 mese fa",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden pt-20">
        <img
          src={heroForno}
          alt="Forno a legna acceso con fiamme della pizzeria La Bella Matildetta"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.16_0.02_40/0.7)_100%)]" />

        <div className="relative mx-auto max-w-7xl w-full px-5 md:px-10 pb-16 md:pb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/40 backdrop-blur-sm text-xs uppercase tracking-[0.25em] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Aperto · chiude alle 22:00
          </div>

          <h1 className="text-display text-[clamp(3rem,10vw,8.5rem)] leading-[0.9] tracking-tight max-w-5xl">
            La pizza nasce <br />
            dal <span className="italic text-gradient-ember">fuoco</span>,
            <br />
            cresce con le <span className="italic">mani</span>.
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Forno a legna tradizionale e forno dedicato gluten free.
            A Galliate dal cuore della nostra famiglia, con la cucina casereccia di Michele.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/menu"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-ember text-primary-foreground font-medium shadow-[var(--shadow-ember)] hover:scale-[1.02] transition-transform"
            >
              Scopri il menu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:0321862363"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-border bg-background/30 backdrop-blur-sm hover:bg-background/60 transition"
            >
              <Phone className="w-4 h-4" /> 0321 862363
            </a>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 py-24 md:py-32">
        <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {[
            { icon: Flame, title: "Forno a legna", body: "Cottura ad alta temperatura, cornicione alveolato, profumo di brace." },
            { icon: Wheat, title: "Forno Gluten Free", body: "Forno dedicato e ingredienti separati per chi sceglie senza glutine." },
            { icon: Star, title: "4,6 / 5 su Google", body: "590 recensioni di clienti che tornano per la cucina casereccia." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-background p-10 md:p-12">
              <Icon className="w-8 h-8 text-accent mb-6" strokeWidth={1.5} />
              <h3 className="text-3xl mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY ZIGZAG */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 space-y-32 md:space-y-48 pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <img src={pizzaiolo} alt="Pizzaiolo che stende la pasta" loading="lazy" width={1080} height={1350} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">La nostra arte</p>
            <h2 className="text-display text-5xl md:text-6xl leading-[1] mb-8">
              Impasti lenti, <br /> <span className="italic text-gradient-ember">gesti antichi</span>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Lievitazione lunga, farine selezionate, pomodoro che racconta il sud. Ogni pizza è
              il risultato di anni di mestiere e di un forno che non smette mai di scaldare.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              E per chi non può mangiare glutine, abbiamo un forno completamente separato:
              stessa cura, stesso amore, zero compromessi.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="md:order-2 relative aspect-[4/5] rounded-2xl overflow-hidden">
            <img src={margherita} alt="Pizza margherita appena uscita dal forno" loading="lazy" width={1024} height={1280} className="w-full h-full object-cover" />
          </div>
          <div className="md:order-1">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">In tavola</p>
            <h2 className="text-display text-5xl md:text-6xl leading-[1] mb-8">
              La pizza è solo <br /> <span className="italic">l'inizio</span>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Taglieri di salumi e formaggi, primi della tradizione, secondi che sanno di casa.
              La cucina di Michele è quella che ti riporta al tavolo della nonna.
            </p>
            <Link to="/menu" className="inline-flex items-center gap-3 text-foreground border-b border-accent pb-1 hover:gap-5 transition-all">
              Esplora il menu completo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-card/40 border-y border-border/50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">Cosa dicono di noi</p>
              <h2 className="text-display text-5xl md:text-6xl leading-[1]">
                Voci dalla <span className="italic text-gradient-ember">sala</span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-2xl text-display">4,6</span>
              <span className="text-muted-foreground text-sm">· 590 recensioni Google</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <article key={r.name} className="relative p-8 rounded-2xl border border-border bg-background/60 backdrop-blur">
                <Quote className="w-8 h-8 text-accent/40 mb-4" />
                <p className="text-foreground leading-relaxed mb-6">{r.text}</p>
                <div className="flex items-center justify-between pt-6 border-t border-border/50">
                  <div>
                    <p className="font-medium text-sm">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.when}</p>
                  </div>
                  <div className="flex">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TAGLIERE FEATURE */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <img
          src={tagliere}
          alt="Tagliere di salumi e formaggi"
          loading="lazy"
          width={1024}
          height={1024}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">Da provare</p>
            <h2 className="text-display text-5xl md:text-7xl leading-[1] mb-8">
              Il tagliere <br /><span className="italic text-gradient-ember">della casa</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Salumi freschissimi, formaggi stagionati, grissini fragranti. Il modo migliore per
              cominciare la serata.
            </p>
            <a href="tel:0321862363" className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-ember text-primary-foreground font-medium shadow-[var(--shadow-ember)]">
              <Phone className="w-4 h-4" /> Prenota un tavolo
            </a>
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="mx-auto max-w-7xl px-5 md:px-10 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: MapPin, title: "Dove siamo", body: "Via Trieste 102\n28066 Galliate (NO)" },
            { icon: Clock, title: "Orari", body: "Aperto oggi\nChiude alle 22:00" },
            { icon: Phone, title: "Prenota", body: "0321 862363" },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="p-8 rounded-2xl border border-border">
              <Icon className="w-6 h-6 text-accent mb-5" strokeWidth={1.5} />
              <h3 className="text-2xl mb-2">{title}</h3>
              <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
