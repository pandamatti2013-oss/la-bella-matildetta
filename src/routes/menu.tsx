import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Flame, Wheat } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — La Bella Matildetta · Pizze, taglieri e cucina casereccia" },
      {
        name: "description",
        content:
          "Pizze nel forno a legna, opzioni gluten free, taglieri, primi e secondi della tradizione. Scopri il menu della pizzeria La Bella Matildetta a Galliate.",
      },
      { property: "og:title", content: "Menu · La Bella Matildetta" },
      { property: "og:description", content: "Pizze a legna, gluten free, cucina casereccia." },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc: string; price: string; gf?: boolean };

const sections: { id: string; title: string; subtitle: string; items: Item[] }[] = [
  {
    id: "antipasti",
    title: "Antipasti",
    subtitle: "Da condividere, per cominciare",
    items: [
      { name: "Tagliere della casa", desc: "Selezione di salumi, formaggi stagionati, grissini, olive", price: "16" },
      { name: "Bruschetta classica", desc: "Pomodoro fresco, basilico, aglio, olio EVO", price: "6" },
      { name: "Burrata pugliese", desc: "Con pomodorini confit e crudo di Parma", price: "12" },
      { name: "Frittura di calamari", desc: "Croccante, limone, maionese al lime", price: "11" },
    ],
  },
  {
    id: "pizze",
    title: "Pizze dal forno a legna",
    subtitle: "Lievitazione 48h, cottura ad alta temperatura",
    items: [
      { name: "Margherita", desc: "Pomodoro San Marzano, fior di latte, basilico, EVO", price: "8", gf: true },
      { name: "Marinara", desc: "Pomodoro, aglio, origano, acciughe del Cantabrico", price: "8", gf: true },
      { name: "Diavola", desc: "Pomodoro, mozzarella, salame piccante calabrese", price: "10", gf: true },
      { name: "Quattro formaggi", desc: "Mozzarella, gorgonzola, taleggio, parmigiano 24 mesi", price: "11", gf: true },
      { name: "Bufala & crudo", desc: "Bufala campana DOP, crudo di Parma, rucola", price: "13", gf: true },
      { name: "Tartufata", desc: "Mozzarella, funghi porcini, crema al tartufo nero", price: "14", gf: true },
      { name: "Matildetta", desc: "La firma della casa: 'nduja, stracciatella, pomodorini gialli", price: "13", gf: true },
      { name: "Vegetariana", desc: "Verdure di stagione grigliate, scaglie di grana", price: "11", gf: true },
    ],
  },
  {
    id: "primi",
    title: "Cucina casereccia",
    subtitle: "I piatti di Michele, come a casa",
    items: [
      { name: "Tagliatelle al ragù", desc: "Pasta fresca, ragù di manzo cotto 6 ore", price: "12" },
      { name: "Risotto al barolo", desc: "Carnaroli, vino barolo, midollo, parmigiano", price: "14" },
      { name: "Gnocchi al gorgonzola", desc: "Patate fresche, gorgonzola DOP, noci", price: "11" },
      { name: "Tagliata di manzo", desc: "Filetto irlandese, rucola, grana, riduzione di balsamico", price: "22" },
    ],
  },
  {
    id: "dolci",
    title: "Dolci della casa",
    subtitle: "Fatti in casa, ogni giorno",
    items: [
      { name: "Tiramisù", desc: "Ricetta della nonna, mascarpone montato a mano", price: "6" },
      { name: "Panna cotta", desc: "Vaniglia bourbon, coulis di frutti rossi", price: "5" },
      { name: "Tortino al cioccolato", desc: "Cuore caldo fondente, gelato alla vaniglia", price: "7" },
    ],
  },
];

function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-32 md:pt-40 pb-16 md:pb-24 mx-auto max-w-7xl px-5 md:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">Il menu</p>
        <h1 className="text-display text-[clamp(3rem,9vw,7rem)] leading-[0.95] mb-8 max-w-5xl">
          Tutto cotto <span className="italic text-gradient-ember">a legna</span>,<br />
          tutto fatto a <span className="italic">mano</span>.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Un menu che racconta la nostra terra: pizze tradizionali, opzioni senza glutine
          dal forno dedicato, e i piatti caserecci che fanno tornare i nostri ospiti.
        </p>

        <div className="mt-10 inline-flex items-center gap-6 p-4 rounded-2xl border border-border bg-card/40">
          <div className="flex items-center gap-2 text-sm">
            <Flame className="w-4 h-4 text-accent" /> Forno a legna
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-2 text-sm">
            <Wheat className="w-4 h-4 text-accent" /> Disponibile gluten free
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 md:px-10 pb-32 space-y-24">
        {sections.map((s) => (
          <div key={s.id} id={s.id}>
            <div className="mb-10 pb-6 border-b border-border">
              <h2 className="text-display text-5xl md:text-6xl mb-2">{s.title}</h2>
              <p className="text-muted-foreground italic">{s.subtitle}</p>
            </div>

            <ul className="divide-y divide-border/60">
              {s.items.map((item) => (
                <li key={item.name} className="py-6 flex gap-6 items-start group">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="text-display text-2xl md:text-3xl text-foreground">
                        {item.name}
                      </h3>
                      {item.gf && (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] px-2 py-1 rounded-full bg-accent/15 text-accent">
                          <Wheat className="w-3 h-3" /> GF disponibile
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="text-display text-3xl text-gradient-ember shrink-0">
                    {item.price}€
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <p className="text-sm text-muted-foreground text-center pt-10 border-t border-border">
          I prezzi possono subire variazioni stagionali. Per intolleranze e allergie,
          chiedi al nostro personale.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
