import { Link } from "wouter";
import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <Link href="/">
              <a className="flex items-center space-x-2 mb-4">
                <img src="/logo.webp" alt="Reste Chez Toi" className="h-10 w-10 rounded-lg" />
                <span className="font-bold text-xl">Reste Chez Toi</span>
              </a>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              L'expérience bistronomique à domicile qui transforme vos moments en souvenirs inoubliables.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/comment-ca-marche">
                  <a className="text-muted-foreground hover:text-foreground transition-colors">
                    Comment ça marche
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/nos-menus">
                  <a className="text-muted-foreground hover:text-foreground transition-colors">
                    Nos Menus
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/a-propos">
                  <a className="text-muted-foreground hover:text-foreground transition-colors">
                    À propos
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:contact@restecheztoi.com"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  contact@restecheztoi.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/restecheztoi.m/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  @restecheztoi.m
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <p>&copy; {new Date().getFullYear()} Reste Chez Toi. Tous droits réservés.</p>
            <span className="hidden sm:inline">•</span>
            <div className="flex space-x-4">
              <Link href="/confidentialite">
                <a className="hover:text-foreground transition-colors">Confidentialité</a>
              </Link>
              <Link href="/mentions-legales">
                <a className="hover:text-foreground transition-colors">Mentions légales</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

