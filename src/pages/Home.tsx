import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import GameModeCard from "@/components/GameModeCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Play, Users, Zap, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-pearlmc.jpg";
import survivalImage from "@/assets/survival-mode.jpg";
import kitpvpImage from "@/assets/kitpvp-mode.jpg";
import tycoonImage from "@/assets/tycoon-mode.jpg";

const Home = () => {
  const { toast } = useToast();

  const copyIP = (ip: string) => {
    navigator.clipboard.writeText(ip);
    toast({
      title: "IP copiato!",
      description: `${ip} è stato copiato negli appunti`,
    });
  };

  const gameModes = [
    {
      title: "Survival",
      description: "Modalità vanilla con economia e community attiva",
      image: survivalImage,
      features: [
        "Economia bilanciata e realistica",
        "Protezioni terreni avanzate",
        "Community italiana attiva",
        "Eventi settimanali organizzati"
      ]
    },
    {
      title: "KitPvP",
      description: "Combattimenti rapidi e competitivi",
      image: kitpvpImage,
      features: [
        "Kit bilanciati per tutti i livelli",
        "Arene PvP personalizzate",
        "Classifiche competitive",
        "Tornei regolari con premi"
      ]
    },
    {
      title: "Tycoon",
      description: "Gestione e crescita economica innovativa",
      image: tycoonImage,
      features: [
        "Sistema economico avanzato",
        "Automation e produzione",
        "Trading tra giocatori",
        "Progressione rewarding"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-float">
              Benvenuto su{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                PearlMC
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Il network Minecraft italiano che offre esperienze uniche con Survival, KitPvP, Tycoon e molto altro in arrivo!
            </p>
            
            {/* Server IPs */}
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              <Card className="bg-card/80 backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Java Edition</p>
                    <p className="font-mono text-lg text-primary font-semibold">play.pearlmc.it</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyIP("play.pearlmc.it")}
                    className="hover:bg-primary/20"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-card/80 backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Bedrock Edition</p>
                    <p className="font-mono text-lg text-primary font-semibold">bedrock.pearlmc.it:19132</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyIP("bedrock.pearlmc.it:19132")}
                    className="hover:bg-primary/20"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Button variant="hero" size="lg" className="text-lg px-8 py-4 animate-glow">
              <Play className="w-5 h-5 mr-2" />
              Unisciti ora e inizia la tua avventura
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Community Attiva</h3>
              <p className="text-muted-foreground">Una community italiana accogliente e sempre pronta ad aiutare</p>
            </div>
            
            <div className="group">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Server Performanti</h3>
              <p className="text-muted-foreground">Hardware di ultima generazione per un'esperienza fluida</p>
            </div>
            
            <div className="group">
              <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Modalità Uniche</h3>
              <p className="text-muted-foreground">Gameplay innovativo con modalità esclusive e coinvolgenti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Modes Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Le Nostre <span className="text-primary">Modalità</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scopri le diverse esperienze che PearlMC ha da offrire, ognuna progettata per offrire divertimento unico
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gameModes.map((mode, index) => (
              <GameModeCard
                key={index}
                title={mode.title}
                description={mode.description}
                image={mode.image}
                features={mode.features}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">
              E questo è solo l'inizio! Stiamo lavorando su nuove modalità innovative.
            </p>
            <Button variant="outline" size="lg">
              Resta aggiornato sul nostro Discord
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        <div className="relative container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto per l'Avventura?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Unisciti alla community PearlMC oggi stesso e scopri un mondo di possibilità infinite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" className="text-lg px-8 py-4">
              <Play className="w-5 h-5 mr-2" />
              Inizia a Giocare
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/20" asChild>
              <a href="https://discord.pearlmc.it" target="_blank" rel="noopener noreferrer">
                Unisciti al Discord
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;