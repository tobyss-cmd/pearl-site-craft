import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="text-xl font-bold text-foreground">PearlMC</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Il network Minecraft italiano che offre modalità innovative e una community accogliente. 
              Unisciti a noi per vivere avventure incredibili!
            </p>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <p>Java: <span className="text-primary font-semibold">play.pearlmc.it</span></p>
              <p>Bedrock: <span className="text-primary font-semibold">bedrock.pearlmc.it:19132</span></p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Link Utili</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://discord.pearlmc.it" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Discord <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://store.pearlmc.it" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  Store <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Game Modes */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Modalità</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Survival</li>
              <li>KitPvP</li>
              <li>Tycoon</li>
              <li>Altre in arrivo...</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-2">
            PearlMC non è affiliato a Mojang Studios. Tutti i diritti dei contenuti di Minecraft sono di Mojang Studios.
          </p>
          <p>&copy; 2024 PearlMC. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;