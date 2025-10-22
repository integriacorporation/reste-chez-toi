import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function NosMenus() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container text-center">
            <p className="text-primary text-xl font-medium mb-3">Simple et efficace</p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-5">Découvrez nos menus</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trois expériences culinaires à savourer chez vous
            </p>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
              <Card className="border-2 border-border shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Menu Découverte</h3>
                  <p className="text-lg text-muted-foreground mb-4">L'entrée en matière parfaite</p>
                  <p className="text-base text-muted-foreground mb-5">Pour découvrir sans vous ruiner</p>
                  <div className="mb-5">
                    <span className="text-4xl font-bold text-primary">130 CHF</span>
                  </div>
                  <Link href="/menu-decouverte">
                    <Button className="w-full rounded-full text-lg h-12">Découvrir</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Menu Classique</h3>
                  <p className="text-lg text-muted-foreground mb-4">Notre signature</p>
                  <p className="text-base text-muted-foreground mb-5">Qualité et raffinement garantis</p>
                  <div className="mb-5">
                    <span className="text-4xl font-bold text-primary">200 CHF</span>
                  </div>
                  <Link href="/menu-classique">
                    <Button className="w-full rounded-full text-lg h-12">Découvrir</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 border-border shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Menu Haut de Gamme</h3>
                  <p className="text-lg text-muted-foreground mb-4">L'expérience ultime</p>
                  <p className="text-base text-muted-foreground mb-5">Quand on sort le grand jeu</p>
                  <div className="mb-5">
                    <span className="text-4xl font-bold text-primary">280 CHF</span>
                  </div>
                  <Link href="/menu-hautdegamme">
                    <Button className="w-full rounded-full text-lg h-12">Découvrir</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-base text-muted-foreground max-w-4xl mx-auto">
              Tous nos menus sont personnalisables selon vos préférences, allergies et restrictions alimentaires. Options végétariennes disponibles.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Prêt à réserver ?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Choisissez votre menu et réservez dès maintenant votre chef à domicile.
            </p>
            <Link href="/reservation">
              <Button size="lg" className="rounded-full px-10 text-lg h-14">Réserver maintenant</Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
