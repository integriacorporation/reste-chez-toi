import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ChefHat, Utensils, Users, Star, Sparkles } from "lucide-react";

export default function CommentCaMarche() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Comment ça marche</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Réserver votre chef à domicile en quelques étapes simples
            </p>
          </div>
        </section>

        {/* Étapes */}
        <section className="py-20 bg-background">
          <div className="container max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-center">
              {/* Étape 1 */}
              <Card className="relative rounded-2xl shadow-lg border-2 border-border bg-card md:translate-y-0">
                <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  1
                </div>
                <CardContent className="p-8 pt-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-foreground">Réservez une date</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Choisissez le jour qui vous convient et le nombre de convives. Notre système flexible s'adapte à votre planning.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Sélectionnez votre date préférée</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                      <span className="text-sm text-muted-foreground">Indiquez l'heure souhaitée</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Précisez le nombre d'invités</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Colonne centrale avec 2A et 2B empilées */}
              <div className="space-y-8">
                {/* Étape 2A */}
                <Card className="relative rounded-2xl shadow-lg border-2 border-border bg-card">
                  <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    2A
                  </div>
                  <CardContent className="p-8 pt-10">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                      <ChefHat className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-foreground">Co-créez votre menu</h3>
                    <p className="text-muted-foreground text-center mb-6">
                      Travaillez avec votre chef pour créer un menu personnalisé selon vos goûts, allergies et préférences culinaires.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                        <span className="text-sm text-muted-foreground">Échangez directement avec le chef</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span className="text-sm text-muted-foreground">Adaptez les plats à vos préférences</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <span className="text-sm text-muted-foreground">Signalez allergies et restrictions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Étape 2B */}
                <Card className="relative rounded-2xl shadow-lg border-2 border-border bg-card">
                  <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    2B
                  </div>
                  <CardContent className="p-8 pt-10">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                      <Utensils className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center text-foreground">Choisissez un menu</h3>
                    <p className="text-muted-foreground text-center mb-6">
                      Ou sélectionnez directement l'un de nos menus prédéfinis. Possibilité de l'ajuster selon vos préférences.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Utensils className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">Menu Découverte, Classique ou Haut de Gamme</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                        <span className="text-sm text-muted-foreground">Personnalisation possible</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                        <span className="text-sm text-muted-foreground">Options végétariennes disponibles</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Étape 3 */}
              <Card className="relative rounded-2xl shadow-lg border-2 border-border bg-card md:translate-y-0">
                <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  3
                </div>
                <CardContent className="p-8 pt-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <Utensils className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-foreground">Profitez de votre repas</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Détendez-vous pendant que votre chef prépare un repas bistronomique dans le confort de votre maison.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <ChefHat className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Le chef cuisine chez vous</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Service professionnel et discret</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Nettoyage complet inclus</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

