import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Calendar, ChefHat, Utensils, Star, Users, Award, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/20 via-background to-accent/10">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Chef à domicile : vivez l'expérience{" "}
                <span className="text-primary">bistronomique</span>{" "}
                sans quitter votre chez-vous
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Reste Chez Toi est né d'une conviction simple : l'expérience bistronomique ne devrait pas être réservée aux restaurants étoilés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/reservation">
                  <Button size="lg" className="rounded-full px-8 text-lg">
                    Réserver un chef
                  </Button>
                </Link>
                <Link href="/nos-menus">
                  <Button size="lg" variant="outline" className="rounded-full px-8 text-lg">
                    Découvrir
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold mb-2">Simple et efficace</p>
              <h2 className="text-4xl md:text-5xl font-bold">Comment ça marche</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Étape 1 */}
              <Card className="relative rounded-3xl shadow-lg border-2 border-primary/10">
                <div className="absolute -top-4 left-6 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <CardContent className="p-8 pt-12">
                  <Calendar className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Réservez une date</h3>
                  <p className="text-muted-foreground">
                    Choisissez le jour qui vous convient et le nombre de convives. Notre système flexible s'adapte à votre planning.
                  </p>
                </CardContent>
              </Card>

              {/* Étape 2A */}
              <Card className="relative rounded-3xl shadow-lg border-2 border-accent/10">
                <div className="absolute -top-4 left-6 bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  2A
                </div>
                <CardContent className="p-8 pt-12">
                  <ChefHat className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">Co-créez votre menu</h3>
                  <p className="text-muted-foreground">
                    Travaillez avec votre chef pour créer un menu personnalisé selon vos goûts, allergies et préférences culinaires.
                  </p>
                </CardContent>
              </Card>

              {/* Étape 2B */}
              <Card className="relative rounded-3xl shadow-lg border-2 border-accent/10">
                <div className="absolute -top-4 left-6 bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  2B
                </div>
                <CardContent className="p-8 pt-12">
                  <Utensils className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">Choisissez un menu</h3>
                  <p className="text-muted-foreground">
                    Ou sélectionnez directement l'un de nos menus prédéfinis. Possibilité de l'ajuster selon vos préférences.
                  </p>
                </CardContent>
              </Card>

              {/* Étape 3 */}
              <Card className="relative rounded-3xl shadow-lg border-2 border-primary/10">
                <div className="absolute -top-4 left-6 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <CardContent className="p-8 pt-12">
                  <Sparkles className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Profitez de votre repas</h3>
                  <p className="text-muted-foreground">
                    Détendez-vous pendant que votre chef prépare un repas bistronomique dans le confort de votre maison.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Le Chef */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold mb-2">L'excellence à votre service</p>
              <h2 className="text-4xl md:text-5xl font-bold">Le chef</h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <Card className="rounded-3xl shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-96 md:h-auto bg-muted/20">
                      <img 
                        src="/chef-malik.jpg" 
                        alt="Chef Malik Horchani" 
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-12">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <ChefHat className="h-10 w-10 text-primary" />
                        </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Malik Horchani</h3>
                      <p className="text-lg text-primary font-semibold">Cuisine bistronomique & créativité sans frontière</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">247 avis</span>
                      </div>
                    </div>
                  </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Un chef passionné par la cuisine traditionnelle française, qui sait faire parler sa créativité pour franchir les frontières du monde. 
                        Chaque plat devient une passerelle entre les terroirs d'ici et les saveurs d'ailleurs, mêlant authenticité, modernité et curiosité culinaire.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Nos Menus */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold mb-2">Simple et efficace</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Découvrez nos menus</h2>
              <p className="text-xl text-muted-foreground">Trois expériences culinaires à savourer chez vous</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Menu Découverte */}
              <Card className="rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Menu Découverte</h3>
                  <p className="text-muted-foreground mb-4">L'entrée en matière parfaite</p>
                  <p className="text-sm text-muted-foreground mb-6">Pour découvrir sans vous ruiner</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">130 CHF</span>
                  </div>
                  <Link href="/menu-decouverte">
                    <Button className="w-full rounded-full">Découvrir</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Menu Classique */}
              <Card className="rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border-2 border-primary">
                <div className="h-2 bg-gradient-to-r from-accent to-primary"></div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold">Menu Classique</h3>
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-4">Notre signature</p>
                  <p className="text-sm text-muted-foreground mb-6">Qualité et raffinement garantis</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">200 CHF</span>
                  </div>
                  <Link href="/menu-classique">
                    <Button className="w-full rounded-full">Découvrir</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Menu Haut de Gamme */}
              <Card className="rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-2 bg-gradient-to-r from-secondary to-primary"></div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Menu Haut de Gamme</h3>
                  <p className="text-muted-foreground mb-4">L'expérience ultime</p>
                  <p className="text-sm text-muted-foreground mb-6">Quand on sort le grand jeu</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">280 CHF</span>
                  </div>
                  <Link href="/menu-hautdegamme">
                    <Button className="w-full rounded-full">Découvrir</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-muted-foreground mt-12 max-w-3xl mx-auto">
              Tous nos menus sont personnalisables selon vos préférences, allergies et restrictions alimentaires. Options végétariennes disponibles.
            </p>
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold mb-2">Notre passion</p>
              <h2 className="text-4xl md:text-5xl font-bold">Notre histoire</h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Reste Chez Toi est né d'une idée simple : offrir l'excellence culinaire sans quitter le confort de son foyer.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Derrière cette aventure, il y a Malik, un chef passionné qui a appris à cuisiner dès son plus jeune âge. 
                  Amoureux de la cuisine traditionnelle française, il aime repousser les frontières des saveurs pour créer des plats 
                  qui voyagent entre les terroirs d'ici et les inspirations du monde.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Chaque menu qu'il conçoit est une invitation à la découverte : l'authenticité d'une recette française rencontre 
                  la modernité d'une touche d'ailleurs. Malik cuisine avec générosité, curiosité et créativité, en s'appuyant sur 
                  des produits locaux et de saison pour composer des assiettes aussi sincères que surprenantes.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Reste Chez Toi, c'est la bistronomie à domicile : l'alliance entre le savoir-faire d'un grand chef et 
                  l'intimité chaleureuse de votre maison.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Clients satisfaits</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1</div>
                  <p className="text-muted-foreground">Chef expert</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">4.9</div>
                  <p className="text-muted-foreground">Note moyenne</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="container">
            <div className="text-center mb-16">
              <p className="text-primary font-semibold mb-2">Produits locaux</p>
              <h2 className="text-4xl md:text-5xl font-bold">Témoignages</h2>
              <p className="text-xl text-muted-foreground mt-4">Ce que nos clients disent de nous</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="rounded-3xl shadow-xl">
                <CardContent className="p-12">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-muted-foreground leading-relaxed mb-6">
                    "Une expérience culinaire absolument exceptionnelle. Le chef a su créer un moment magique pour notre anniversaire de mariage."
                  </blockquote>
                  <p className="font-bold">SOPHIE & MARC L.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-primary font-semibold mb-2">Une question ? Un projet ?</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Prêt à Vivre l'Expérience ?</h2>
              <Link href="/reservation">
                <Button size="lg" className="rounded-full px-12 text-lg">
                  Réserver une Date
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

