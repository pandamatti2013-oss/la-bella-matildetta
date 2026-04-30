import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Star } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-card/30 mt-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-display text-3xl mb-3">
            La Bella <span className="italic text-gradient-ember">Matil</span>
          </h3>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Pizzeria con forno a legna e forno dedicato senza glutine. Cucina casereccia
            come quella della nonna, nel cuore di Galliate.
          </p>
          <div className="flex items-center gap-2 mt-5 text-sm text-muted-foreground">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="text-foreground font-medium">4,6</span>
            <span>· 590 recensioni Google</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-accent mb-4">Trovaci</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Via Trieste 102, 28066 Galliate (NO)</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" /> <a href="tel:0321862363" className="hover:text-foreground">0321 862363</a></li>
            <li className="flex gap-2"><Clock className="w-4 h-4 mt-0.5 shrink-0" /> Aperto · Chiude alle 22:00</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-accent mb-4">Menu</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/menu" className="hover:text-foreground">Pizze & Cucina</Link></li>
            <li><Link to="/contatti" className="hover:text-foreground">Contatti</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} La Bella Matil · Pizzeria con forno a legna & senza glutine
      </div>
    </footer>
  );
}
