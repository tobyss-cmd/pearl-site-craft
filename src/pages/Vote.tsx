import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Vote as VoteIcon, Gift, Zap, Crown, ExternalLink } from "lucide-react";

const Vote = () => {
  const voteRewards = [
    {
      icon: Gift,
      title: "Chiavi Crate",
      description: "Ricevi chiavi per aprire casse con ricompense esclusive",
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Boost Esperienza",
      description: "Ottieni bonus XP per progredire più velocemente",
      color: "text-primary"
    },
    {
      icon: Crown,
      title: "Cosmetici Esclusivi",
      description: "Sblocca skin, particelle e effetti unici",
      color: "text-purple-400"
    }
  ];

  const voteSites = [
    {
      name: "Minecraft Italia",
      url: "https://minecraft-italia.it/servers/pearlmc",
      description: "Il sito di server listing più popolare d'Italia",
      reward: "1 Chiave Comune + 50 PearlCoins"
    },
    {
      name: "MinecraftServers.org",
      url: "https://minecraftservers.org/server/645729",
      description: "Server listing internazionale con grande visibilità",
      reward: "1 Chiave Rara + 100 PearlCoins"
    },
    {
      name: "TopG",
      url: "https://topg.org/minecraft-servers/server-645729",
      description: "Piattaforma di voting con sistema classifiche",
      reward: "2 Chiavi Comuni + 75 PearlCoins"
    },
    {
      name: "Planet Minecraft",
      url: "https://planetminecraft.com/server/pearlmc",
      description: "Community globale di Minecraft",
      reward: "1 Chiave Epica + 200 PearlCoins"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <VoteIcon className="w-12 h-12 inline mr-4 text-primary" />
              Vota <span className="text-primary">PearlMC</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Supporta PearlMC votando sui siti di server listing. Ogni voto ci aiuta a crescere e tu ricevi fantastiche ricompense!
            </p>
          </div>

          {/* How it Works */}
          <Card className="mb-12 bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Come Funziona il Voting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-lg">1</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Vota</h3>
                  <p className="text-sm text-muted-foreground">Clicca sui link qui sotto per votare sui vari siti</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-lg">2</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Conferma</h3>
                  <p className="text-sm text-muted-foreground">Inserisci il tuo username esatto del server</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-lg">3</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Attendi</h3>
                  <p className="text-sm text-muted-foreground">I premi vengono assegnati automaticamente entro 5 minuti</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold text-lg">4</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Godi</h3>
                  <p className="text-sm text-muted-foreground">Usa le tue ricompense in game e aiuta il server a crescere!</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rewards Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Ricompense per il Voting
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {voteRewards.map((reward, index) => (
                <Card key={index} className="text-center bg-gradient-card border-border hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className={`w-16 h-16 ${reward.color.replace('text-', 'bg-')}/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <reward.icon className={`w-8 h-8 ${reward.color}`} />
                    </div>
                    <CardTitle>{reward.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{reward.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Vote Sites */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Siti di Voting
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {voteSites.map((site, index) => (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{site.name}</CardTitle>
                        <CardDescription className="mt-2">{site.description}</CardDescription>
                      </div>
                      <Badge variant="secondary" className="ml-4">
                        24h cooldown
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <p className="text-sm font-medium text-foreground mb-1">Ricompensa:</p>
                        <p className="text-sm text-primary font-semibold">{site.reward}</p>
                      </div>
                      <Button 
                        className="w-full" 
                        variant="hero"
                        asChild
                      >
                        <a href={site.url} target="_blank" rel="noopener noreferrer">
                          <VoteIcon className="w-4 h-4 mr-2" />
                          Vota su {site.name}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Bonus Info */}
          <Card className="bg-accent/10 border-accent">
            <CardHeader>
              <CardTitle className="text-accent flex items-center gap-2">
                <Crown className="w-6 h-6" />
                Bonus Settimanali
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Vote Streak</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Vota per 3 giorni consecutivi: <span className="text-primary font-semibold">Bonus 50 PearlCoins</span></li>
                    <li>• Vota per 7 giorni consecutivi: <span className="text-primary font-semibold">1 Chiave Epica Extra</span></li>
                    <li>• Vota per 30 giorni consecutivi: <span className="text-primary font-semibold">1 Chiave Leggendaria</span></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Top Voter del Mese</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 1° Posto: <span className="text-primary font-semibold">Rango VIP per 1 mese</span></li>
                    <li>• 2° Posto: <span className="text-primary font-semibold">5 Chiavi Leggendarie</span></li>
                    <li>• 3° Posto: <span className="text-primary font-semibold">3 Chiavi Leggendarie</span></li>
                    <li>• Top 10: <span className="text-primary font-semibold">1 Chiave Leggendaria</span></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Perché Votare è Importante?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Ogni voto aiuta PearlMC a salire nelle classifiche dei server Minecraft, 
              attirando nuovi giocatori e facendo crescere la nostra community. 
              <br />
              <span className="text-primary font-semibold">Più voti = Più giocatori = Più divertimento per tutti!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <VoteIcon className="w-5 h-5 mr-2" />
                Inizia a Votare Ora
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://discord.pearlmc.it" target="_blank" rel="noopener noreferrer">
                  Unisciti al Discord per Aggiornamenti
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Vote;