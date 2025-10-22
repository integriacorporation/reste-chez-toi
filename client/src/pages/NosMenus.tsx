import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Award, Crown, Sparkles } from "lucide-react";

export default function NosMenus() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nos Menus</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trois expériences culinaires conçues pour transformer vos moments en souvenirs inoubliables
            </p>
          </div>
        </section>

        {/* Menus */}
        <section className="py-20">
          <div className="container max-w-6xl">
            <div className="space-y-16">
              {/* Menu Découverte */}
              <Card className="rounded-3xl shadow-2xl overflow-hidden">
                <div className="h-4 bg-gradient-to-r from-primary to-accent"></div>
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <img 
                        src="/ImageDecouverte.png" 
                        alt="Menu Découverte" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-12">
                      <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="h-10 w-10 text-primary" />
                        <h2 className="text-4xl font-bold">Menu Découverte</h2>
                      </div>
                      <p className="text-xl text-muted-foreground mb-6">
                        L'entrée en matière parfaite pour découvrir notre cuisine sans vous ruiner
                      </p>
                      <div className="mb-6">
                        <span className="text-5xl font-bold text-primary">130 CHF</span>
                        <span className="text-xl text-muted-foreground ml-3">• 3 plats</span>
                      </div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-muted-foreground">Entrée raffinée</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-muted-foreground">Plat principal généreux</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-muted-foreground">Dessert gourmand</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-muted-foreground">Option végétarienne disponible</span>
                        </li>
                      </ul>
                      <Link href="/menu-decouverte">
                        <Button size="lg" className="rounded-full px-8">
                          Voir les menus
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Menu Classique */}
              <Card className="rounded-3xl shadow-2xl overflow-hidden border-2 border-primary">
                <div className="h-4 bg-gradient-to-r from-accent to-primary"></div>
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="p-12 order-2 md:order-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Award className="h-10 w-10 text-primary" />
                        <h2 className="text-4xl font-bold">Menu Classique</h2>
                      </div>
                      <p className="text-xl text-muted-foreground mb-2">
                        Notre signature
                      </p>
                      <p className="text-lg text-muted-foreground mb-6">
                        L'équilibre parfait entre tradition et créativité, qualité et raffinement garantis
                      </p>
                      <div className="mb-6">
                        <span className="text-5xl font-bold text-primary">200 CHF</span>
                        <span className="text-xl text-muted-foreground ml-3">• 5 services</span>
                      </div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-muted-foreground">Amuse-bouche</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-muted-foreground">Deux entrées créatives</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-muted-foreground">Plat principal d'exception</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-muted-foreground">Dessert signature</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-muted-foreground">Option végétarienne disponible</span>
                        </li>
                      </ul>
                      <Link href="/menu-classique">
                        <Button size="lg" className="rounded-full px-8">
                          Voir les menus
                        </Button>
                      </Link>
                    </div>
                    <div className="relative h-64 md:h-auto order-1 md:order-2">
                      <img 
                        src="/ImageClassique.png" 
                        alt="Menu Classique" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Menu Haut de Gamme */}
              <Card className="rounded-3xl shadow-2xl overflow-hidden">
                <div className="h-4 bg-gradient-to-r from-secondary via-primary to-accent"></div>
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <img 
                        src="/ImageHG.png" 
                        alt="Menu Haut de Gamme" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-12">
                      <div className="flex items-center gap-3 mb-4">
                        <Crown className="h-10 w-10 text-primary" />
                        <h2 className="text-4xl font-bold">Menu Haut de Gamme</h2>
                      </div>
                      <p className="text-xl text-muted-foreground mb-2">
                        L'expérience ultime
                      </p>
                      <p className="text-lg text-muted-foreground mb-6">
                        Le summum de l'art culinaire, quand on sort le grand jeu
                      </p>
                      <div className="mb-6">
                        <span className="text-5xl font-bold text-primary">280 CHF</span>
                        <span className="text-xl text-muted-foreground ml-3">• 7 services</span>
                      </div>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-muted-foreground">Deux amuse-bouches raffinés</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-muted-foreground">Deux entrées gastronomiques</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-muted-foreground">Deux plats d'exception</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-muted-foreground">Dessert signature</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-muted-foreground">Produits d'exception</span>
                        </li>
                      </ul>
                      <Link href="/menu-hautdegamme">
                        <Button size="lg" className="rounded-full px-8">
                          Voir les menus
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Note personnalisation */}
        <section className="py-16 bg-muted/30">
          <div className="container text-center max-w-3xl">
            <h3 className="text-2xl font-bold mb-4">Personnalisation complète</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tous nos menus sont entièrement personnalisables selon vos préférences, allergies et restrictions alimentaires. 
              Options végétariennes et véganes disponibles sur demande. N'hésitez pas à nous contacter pour créer ensemble 
              le menu parfait pour votre événement.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container text-center">
            <h3 className="text-3xl font-bold mb-6">Prêt à réserver ?</h3>
            <Link href="/reservation">
              <Button size="lg" className="rounded-full px-12">
                Réserver maintenant
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

