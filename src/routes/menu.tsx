import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Flame, Wheat, Leaf } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — La Bella Matildetta · Pizze, taglieri e cucina casereccia" },
      {
        name: "description",
        content:
          "Il menu completo de La Bella Matildetta a Galliate: pizze classiche e speciali nel forno a legna, opzioni gluten free dal forno dedicato, antipasti, primi, secondi, dolci e cantina.",
      },
      { property: "og:title", content: "Menu · La Bella Matildetta" },
      { property: "og:description", content: "Pizze a legna, gluten free, cucina casereccia." },
    ],
  }),
  component: MenuPage,
});

type Item = {
  name: string;
  desc: string;
  price: string;
  gf?: boolean;
  veg?: boolean;
  spicy?: boolean;
};

type Section = {
  id: string;
  title: string;
  subtitle: string;
  note?: string;
  items: Item[];
};

const sections: Section[] = [
  {
    id: "antipasti",
    title: "Antipasti",
    subtitle: "Da condividere, per cominciare la serata",
    items: [
      { name: "Tagliere Matildetta", desc: "Salumi piemontesi, formaggi stagionati, mostarda, grissini stirati a mano", price: "18" },
      { name: "Tagliere di salumi", desc: "Crudo di Parma 24 mesi, salame di Cremona, bresaola della Valtellina", price: "14" },
      { name: "Tagliere di formaggi", desc: "Selezione di 5 formaggi con confetture e miele millefiori", price: "14" },
      { name: "Bruschetta classica", desc: "Pomodoro fresco, basilico, aglio, olio EVO", price: "6", veg: true },
      { name: "Bruschetta del contadino", desc: "Lardo di Colonnata, miele di castagno, pepe nero", price: "8" },
      { name: "Burrata pugliese", desc: "Con pomodorini confit e crudo di Parma", price: "12" },
      { name: "Caprese di bufala", desc: "Bufala campana DOP, pomodoro cuore di bue, basilico", price: "11", veg: true },
      { name: "Frittura di calamari", desc: "Croccante, limone, maionese al lime", price: "12" },
      { name: "Polpo alla griglia", desc: "Crema di patate, olive taggiasche, prezzemolo", price: "14" },
      { name: "Vitello tonnato", desc: "Ricetta piemontese, salsa tonnata classica, capperi", price: "13" },
      { name: "Carpaccio di manzo", desc: "Filetto di fassona, rucola, scaglie di parmigiano 30 mesi", price: "13" },
      { name: "Flan di zucca", desc: "Fonduta di taleggio, amaretto sbriciolato (stagionale)", price: "10", veg: true },
    ],
  },
  {
    id: "pizze-classiche",
    title: "Pizze Classiche",
    subtitle: "Dal nostro forno a legna · Lievitazione 48h",
    note: "Tutte le pizze sono disponibili nella versione gluten free dal nostro forno dedicato (+2€)",
    items: [
      { name: "Marinara", desc: "Pomodoro San Marzano, aglio, origano, olio EVO", price: "7", veg: true, gf: true },
      { name: "Margherita", desc: "Pomodoro San Marzano, fior di latte, basilico, EVO", price: "8", veg: true, gf: true },
      { name: "Margherita di bufala", desc: "Pomodoro, bufala campana DOP, basilico", price: "11", veg: true, gf: true },
      { name: "Napoli", desc: "Pomodoro, mozzarella, acciughe del Cantabrico, capperi, origano", price: "10", gf: true },
      { name: "Romana", desc: "Pomodoro, mozzarella, acciughe, capperi, olive nere", price: "10", gf: true },
      { name: "Diavola", desc: "Pomodoro, mozzarella, salame piccante calabrese", price: "10", spicy: true, gf: true },
      { name: "Capricciosa", desc: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofini, olive", price: "11", gf: true },
      { name: "Quattro stagioni", desc: "Pomodoro, mozzarella, cotto, funghi, carciofini, olive (a spicchi)", price: "11", gf: true },
      { name: "Quattro formaggi", desc: "Mozzarella, gorgonzola DOP, taleggio, parmigiano 24 mesi", price: "11", veg: true, gf: true },
      { name: "Prosciutto e funghi", desc: "Pomodoro, mozzarella, prosciutto cotto, funghi champignon", price: "10", gf: true },
      { name: "Tonno e cipolla", desc: "Pomodoro, mozzarella, tonno, cipolla rossa di Tropea", price: "10", gf: true },
      { name: "Wurstel e patatine", desc: "Pomodoro, mozzarella, wurstel, patatine fritte", price: "10", gf: true },
      { name: "Boscaiola", desc: "Pomodoro, mozzarella, funghi misti, salsiccia, scamorza affumicata", price: "12", gf: true },
      { name: "Vegetariana", desc: "Pomodoro, mozzarella, verdure di stagione grigliate", price: "11", veg: true, gf: true },
    ],
  },
  {
    id: "pizze-speciali",
    title: "Pizze Speciali della Casa",
    subtitle: "Le nostre creazioni firmate",
    items: [
      { name: "Matildetta", desc: "La firma della casa: 'nduja calabrese, stracciatella, pomodorini gialli, basilico", price: "14", spicy: true, gf: true },
      { name: "Galliate", desc: "Bufala, crudo di Parma 24 mesi, rucola selvatica, scaglie di grana", price: "14", gf: true },
      { name: "Tartufata", desc: "Mozzarella, funghi porcini, crema al tartufo nero, scaglie di tartufo", price: "16", veg: true, gf: true },
      { name: "Mortazza", desc: "Stracciatella di burrata, mortadella IGP, granella di pistacchio di Bronte", price: "14", gf: true },
      { name: "Salmone & burrata", desc: "Base bianca, burrata, salmone affumicato, lime, aneto", price: "15", gf: true },
      { name: "Norma", desc: "Pomodoro, mozzarella, melanzane fritte, ricotta salata, basilico", price: "12", veg: true, gf: true },
      { name: "Parmigiana", desc: "Mozzarella, melanzane, pomodoro, parmigiano, basilico", price: "12", veg: true, gf: true },
      { name: "Calabrese", desc: "Pomodoro, mozzarella, 'nduja, salsiccia, cipolla rossa", price: "13", spicy: true, gf: true },
      { name: "Quattro carni", desc: "Pomodoro, mozzarella, cotto, crudo, salame, salsiccia", price: "13", gf: true },
      { name: "Tirolese", desc: "Mozzarella, speck IGP, brie, noci, miele", price: "13", gf: true },
      { name: "Pera & gorgonzola", desc: "Base bianca, mozzarella, pera, gorgonzola DOP, noci", price: "12", veg: true, gf: true },
      { name: "Zucca & salsiccia", desc: "Crema di zucca, mozzarella, salsiccia, rosmarino (stagionale)", price: "13", gf: true },
      { name: "Mediterranea", desc: "Pomodoro, mozzarella, tonno, olive taggiasche, pomodorini, capperi", price: "12", gf: true },
      { name: "Greca", desc: "Pomodoro, feta, olive kalamata, cipolla, origano", price: "12", veg: true, gf: true },
    ],
  },
  {
    id: "calzoni",
    title: "Calzoni & Focacce",
    subtitle: "Dal forno, ripieni o farciti",
    items: [
      { name: "Calzone classico", desc: "Pomodoro, mozzarella, prosciutto cotto, funghi", price: "11", gf: true },
      { name: "Calzone Matildetta", desc: "Ricotta, salame piccante, scamorza, pomodorini", price: "13", spicy: true, gf: true },
      { name: "Calzone vegetariano", desc: "Ricotta, spinaci, mozzarella, pomodorini", price: "11", veg: true, gf: true },
      { name: "Focaccia al rosmarino", desc: "Olio EVO, sale grosso, rosmarino fresco", price: "5", veg: true, gf: true },
      { name: "Focaccia farcita", desc: "Crudo di Parma e stracciatella", price: "11", gf: true },
    ],
  },
  {
    id: "primi",
    title: "Primi Piatti",
    subtitle: "Pasta fresca fatta in casa",
    items: [
      { name: "Tagliatelle al ragù", desc: "Pasta fresca, ragù di manzo cotto 6 ore", price: "12" },
      { name: "Tagliatelle ai porcini", desc: "Pasta fresca, funghi porcini freschi, prezzemolo", price: "14", veg: true },
      { name: "Pappardelle al cinghiale", desc: "Ragù di cinghiale, vino rosso, bacche di ginepro", price: "14" },
      { name: "Risotto al barolo", desc: "Carnaroli, vino barolo, midollo, parmigiano 30 mesi", price: "14", veg: true },
      { name: "Risotto ai funghi porcini", desc: "Carnaroli, porcini freschi, prezzemolo", price: "15", veg: true },
      { name: "Gnocchi al gorgonzola", desc: "Patate fresche, gorgonzola DOP, noci", price: "11", veg: true },
      { name: "Gnocchi al pomodoro e basilico", desc: "Patate fresche, pomodoro San Marzano, basilico", price: "10", veg: true },
      { name: "Lasagna della casa", desc: "Ricetta tradizionale, ragù, besciamella, parmigiano", price: "12" },
      { name: "Spaghetti alla carbonara", desc: "Guanciale, tuorlo, pecorino romano, pepe", price: "12" },
      { name: "Spaghetti alle vongole", desc: "Vongole veraci, aglio, prezzemolo, vino bianco", price: "15" },
    ],
  },
  {
    id: "secondi",
    title: "Secondi Piatti",
    subtitle: "Carne e pesce, dalla griglia e dalla cucina",
    items: [
      { name: "Tagliata di manzo", desc: "Filetto irlandese, rucola, grana, riduzione di balsamico", price: "22" },
      { name: "Filetto al pepe verde", desc: "Filetto di manzo, salsa al pepe verde, patate al forno", price: "26" },
      { name: "Brasato al barolo", desc: "Cotto lentamente nel barolo, polenta morbida", price: "20" },
      { name: "Costata di manzo (500g)", desc: "Alla griglia, sale Maldon, rosmarino", price: "28" },
      { name: "Cotoletta alla milanese", desc: "Vitello, burro chiarificato, limone, patate", price: "18" },
      { name: "Grigliata mista", desc: "Salsiccia, costina, pollo, verdure grigliate", price: "20" },
      { name: "Branzino al sale", desc: "Cotto in crosta di sale, patate al forno (per 2 persone, su prenotazione)", price: "38" },
      { name: "Salmone alla griglia", desc: "Filetto di salmone, verdure di stagione", price: "18" },
    ],
  },
  {
    id: "contorni",
    title: "Contorni",
    subtitle: "Da abbinare ai secondi",
    items: [
      { name: "Patate al forno", desc: "Con rosmarino e aglio", price: "5", veg: true },
      { name: "Patatine fritte", desc: "Croccanti, sale Maldon", price: "5", veg: true },
      { name: "Verdure grigliate", desc: "Zucchine, melanzane, peperoni", price: "6", veg: true },
      { name: "Insalata mista", desc: "Insalata di stagione, pomodoro, carote", price: "5", veg: true },
      { name: "Insalata Matildetta", desc: "Insalate, noci, mela verde, scaglie di grana", price: "8", veg: true },
      { name: "Spinaci al burro", desc: "Burro e parmigiano", price: "5", veg: true },
    ],
  },
  {
    id: "dolci",
    title: "Dolci della Casa",
    subtitle: "Fatti in casa, ogni giorno",
    items: [
      { name: "Tiramisù", desc: "Ricetta della nonna, mascarpone montato a mano", price: "6" },
      { name: "Panna cotta", desc: "Vaniglia bourbon, coulis di frutti rossi", price: "5", veg: true },
      { name: "Tortino al cioccolato", desc: "Cuore caldo fondente, gelato alla vaniglia", price: "7", veg: true },
      { name: "Cheesecake ai frutti rossi", desc: "Base biscotto, formaggio fresco, coulis", price: "6", veg: true },
      { name: "Cannolo siciliano", desc: "Ricotta fresca, gocce di cioccolato, pistacchio", price: "6", veg: true },
      { name: "Torta della nonna", desc: "Pasta frolla, crema pasticcera, pinoli", price: "6", veg: true },
      { name: "Sorbetto al limone", desc: "Limoni di Sicilia", price: "5", veg: true, gf: true },
      { name: "Affogato al caffè", desc: "Gelato alla vaniglia, espresso caldo", price: "6", veg: true },
      { name: "Selezione di gelati", desc: "Tre gusti a scelta", price: "6", veg: true },
    ],
  },
  {
    id: "bevande",
    title: "Bevande",
    subtitle: "Acqua, bibite, birre alla spina e in bottiglia",
    items: [
      { name: "Acqua naturale / frizzante 75cl", desc: "", price: "3" },
      { name: "Coca Cola / Fanta / Sprite", desc: "33cl in bottiglia di vetro", price: "4" },
      { name: "Tè freddo", desc: "Pesca o limone", price: "4" },
      { name: "Succo di frutta", desc: "Pera, pesca, ananas, ace", price: "4" },
      { name: "Birra alla spina piccola", desc: "Moretti 0,2L", price: "3" },
      { name: "Birra alla spina media", desc: "Moretti 0,4L", price: "5" },
      { name: "Birra artigianale", desc: "Selezione del mese, chiedi al personale", price: "7" },
      { name: "Birra senza glutine", desc: "Daura Damm 33cl", price: "5", gf: true },
      { name: "Caffè espresso", desc: "Miscela 100% arabica", price: "1.50" },
      { name: "Cappuccino", desc: "", price: "2" },
      { name: "Amari e digestivi", desc: "Selezione di amari italiani", price: "4" },
      { name: "Grappa", desc: "Selezione di grappe piemontesi", price: "5" },
    ],
  },
  {
    id: "vini",
    title: "Cantina",
    subtitle: "Una selezione di etichette del territorio",
    note: "Carta dei vini completa disponibile al tavolo",
    items: [
      { name: "Vino della casa rosso/bianco 1L", desc: "Selezione del produttore locale", price: "10" },
      { name: "Vino della casa rosso/bianco 0,5L", desc: "", price: "6" },
      { name: "Calice di vino della casa", desc: "Rosso o bianco", price: "3" },
      { name: "Barbera d'Asti DOCG", desc: "Bottiglia 75cl", price: "20" },
      { name: "Nebbiolo Langhe DOC", desc: "Bottiglia 75cl", price: "24" },
      { name: "Barolo DOCG", desc: "Bottiglia 75cl", price: "38" },
      { name: "Gavi DOCG", desc: "Bianco fermo, 75cl", price: "22" },
      { name: "Prosecco di Valdobbiadene DOCG", desc: "Bottiglia 75cl", price: "20" },
      { name: "Franciacorta Brut", desc: "Bottiglia 75cl", price: "32" },
    ],
  },
];

const legend = [
  { icon: Flame, label: "Forno a legna" },
  { icon: Wheat, label: "Disponibile gluten free dal forno dedicato" },
  { icon: Leaf, label: "Vegetariano" },
];

function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-32 md:pt-40 pb-12 md:pb-16 mx-auto max-w-7xl px-5 md:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">Il menu completo</p>
        <h1 className="text-display text-[clamp(3rem,9vw,7rem)] leading-[0.95] mb-8 max-w-5xl">
          Tutto cotto <span className="italic text-gradient-ember">a legna</span>,<br />
          tutto fatto a <span className="italic">mano</span>.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Un menu che racconta la nostra terra: pizze tradizionali e speciali, opzioni senza
          glutine dal forno dedicato, primi e secondi caserecci, dolci della casa e una cantina
          con il meglio del territorio piemontese.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 p-4 rounded-2xl border border-border bg-card/40">
          {legend.map((l) => (
            <div key={l.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <l.icon className="w-4 h-4 text-accent" /> {l.label}
            </div>
          ))}
        </div>
      </section>

      {/* Quick nav */}
      <nav className="sticky top-16 z-30 bg-background/85 backdrop-blur border-y border-border">
        <div className="mx-auto max-w-7xl px-5 md:px-10 py-3 flex gap-x-5 gap-y-2 overflow-x-auto whitespace-nowrap text-sm">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-5 md:px-10 py-20 md:py-24 space-y-24">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-32">
            <div className="mb-10 pb-6 border-b border-border">
              <h2 className="text-display text-5xl md:text-6xl mb-2">{s.title}</h2>
              <p className="text-muted-foreground italic">{s.subtitle}</p>
              {s.note && (
                <p className="mt-4 text-sm text-accent/90 inline-flex items-center gap-2">
                  <Wheat className="w-4 h-4" /> {s.note}
                </p>
              )}
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
                          <Wheat className="w-3 h-3" /> GF
                        </span>
                      )}
                      {item.veg && (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-400">
                          <Leaf className="w-3 h-3" /> Veg
                        </span>
                      )}
                      {item.spicy && (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] px-2 py-1 rounded-full bg-red-500/15 text-red-400">
                          🌶 Piccante
                        </span>
                      )}
                    </div>
                    {item.desc && (
                      <p className="text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                    )}
                  </div>
                  <div className="text-display text-3xl text-gradient-ember shrink-0">
                    {item.price}€
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="pt-10 border-t border-border space-y-3 text-sm text-muted-foreground text-center">
          <p>
            I prezzi possono subire variazioni stagionali. Per intolleranze e allergie,
            chiedi sempre al nostro personale: il nostro <strong>forno gluten free dedicato</strong> è
            completamente separato per evitare contaminazioni.
          </p>
          <p>
            Coperto: 2€ a persona · Pagamenti: contanti, bancomat, carte di credito, ticket restaurant.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
