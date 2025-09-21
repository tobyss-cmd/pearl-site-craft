import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Book, Command, Coins, Gift, Users, Lightbulb } from "lucide-react";

const Wiki = () => {
  const commands = {
    survival: [
      { command: "/sethome [nome]", description: "Imposta una casa con un nome specifico" },
      { command: "/home [nome]", description: "Teletrasportati alla casa specificata" },
      { command: "/delhome [nome]", description: "Elimina una casa" },
      { command: "/tpa [giocatore]", description: "Richiedi di teletrasportarti da un giocatore" },
      { command: "/tpaccept", description: "Accetta una richiesta di teletrasporto" },
      { command: "/tpdeny", description: "Rifiuta una richiesta di teletrasporto" },
      { command: "/warp [nome]", description: "Teletrasportati a un warp pubblico" },
      { command: "/warps", description: "Visualizza tutti i warp disponibili" },
      { command: "/ah", description: "Apri l'auction house per vendere/comprare" },
      { command: "/shop", description: "Accedi al negozio del server" },
      { command: "/bal", description: "Controlla il tuo saldo" },
      { command: "/pay [giocatore] [importo]", description: "Invia denaro a un altro giocatore" }
    ],
    kitpvp: [
      { command: "/kit [nome]", description: "Ottieni un kit specifico" },
      { command: "/kits", description: "Visualizza tutti i kit disponibili" },
      { command: "/stats", description: "Controlla le tue statistiche PvP" },
      { command: "/leaderboard", description: "Visualizza la classifica dei migliori giocatori" },
      { command: "/arena [nome]", description: "Entra in un'arena specifica" },
      { command: "/spawn", description: "Torna alla spawn dell'arena" }
    ],
    tycoon: [
      { command: "/company create [nome]", description: "Crea la tua azienda" },
      { command: "/company info", description: "Informazioni sulla tua azienda" },
      { command: "/market", description: "Accedi al mercato globale" },
      { command: "/invest [azienda] [importo]", description: "Investi in un'azienda" },
      { command: "/portfolio", description: "Visualizza i tuoi investimenti" },
      { command: "/factory", description: "Gestisci le tue fabbriche" }
    ],
    general: [
      { command: "/help", description: "Mostra tutti i comandi disponibili" },
      { command: "/rules", description: "Leggi le regole del server" },
      { command: "/discord", description: "Ottieni il link al nostro Discord" },
      { command: "/vote", description: "Ottieni i link per votare il server" },
      { command: "/online", description: "Visualizza i giocatori online" },
      { command: "/msg [giocatore] [messaggio]", description: "Invia un messaggio privato" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Wiki <span className="text-primary">PearlMC</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tutto quello che devi sapere per iniziare la tua avventura su PearlMC
            </p>
          </div>

          {/* Quick Start Guide */}
          <Card className="mb-12 bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-accent" />
                Guida Rapida per Iniziare
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Connettiti</h3>
                  <p className="text-sm text-muted-foreground">Usa l'IP play.pearlmc.it per Java o bedrock.pearlmc.it:19132 per Bedrock</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Scegli Modalità</h3>
                  <p className="text-sm text-muted-foreground">Usa il menu principale per selezionare Survival, KitPvP o Tycoon</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Inizia a Giocare</h3>
                  <p className="text-sm text-muted-foreground">Leggi le regole, usa /help per i comandi e divertiti!</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="commands" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="commands">Comandi</TabsTrigger>
              <TabsTrigger value="economy">Economia</TabsTrigger>
              <TabsTrigger value="rewards">Premi</TabsTrigger>
              <TabsTrigger value="teams">Team</TabsTrigger>
              <TabsTrigger value="guides">Guide</TabsTrigger>
            </TabsList>

            {/* Commands Tab */}
            <TabsContent value="commands" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  <Command className="w-8 h-8 inline mr-3 text-primary" />
                  Comandi Utili
                </h2>
                <p className="text-muted-foreground">Lista completa dei comandi per ogni modalità di gioco</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {Object.entries(commands).map(([category, cmdList]) => (
                  <Card key={category} className="bg-gradient-card">
                    <CardHeader>
                      <CardTitle className="capitalize">
                        {category === "general" ? "Comandi Generali" : 
                         category === "survival" ? "Survival" :
                         category === "kitpvp" ? "KitPvP" : "Tycoon"}
                      </CardTitle>
                      <CardDescription>
                        {category === "general" ? "Comandi disponibili su tutto il network" : 
                         category === "survival" ? "Comandi specifici per la modalità Survival" :
                         category === "kitpvp" ? "Comandi per il PvP competitivo" : 
                         "Comandi per la gestione economica"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {cmdList.map((cmd, index) => (
                          <div key={index} className="flex flex-col space-y-1">
                            <code className="text-primary font-mono text-sm bg-muted px-2 py-1 rounded">
                              {cmd.command}
                            </code>
                            <p className="text-muted-foreground text-xs ml-2">{cmd.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Economy Tab */}
            <TabsContent value="economy" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  <Coins className="w-8 h-8 inline mr-3 text-primary" />
                  Sistema Economico
                </h2>
                <p className="text-muted-foreground">Come funziona l'economia di PearlMC</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-gradient-card">
                  <CardHeader>
                    <CardTitle>Valute del Server</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">PearlCoins</span>
                      <Badge variant="secondary">Valuta Principale</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      La valuta principale del server, ottienibile vendendo oggetti, completando missioni o votando
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">Gemme</span>
                      <Badge variant="outline">Valuta Premium</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Valuta premium ottenibile tramite acquisti nello store o eventi speciali
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card">
                  <CardHeader>
                    <CardTitle>Auction House</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Usa /ah per aprire l'auction house</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Vendi oggetti ad altri giocatori</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Commissione del 5% su ogni vendita</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Gli oggetti scadono dopo 7 giorni</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card">
                  <CardHeader>
                    <CardTitle>Shop del Server</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      Il shop del server offre oggetti base e risorse essenziali a prezzi fissi
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Blocchi da costruzione base</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Cibo e risorse essenziali</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Strumenti e armi base</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card">
                  <CardHeader>
                    <CardTitle>Trading tra Giocatori</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      Scambia oggetti direttamente con altri giocatori in sicurezza
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Usa /trade [giocatore] per iniziare</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Sistema sicuro anti-truffa</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Conferma richiesta da entrambe le parti</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Rewards Tab */}
            <TabsContent value="rewards" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  <Gift className="w-8 h-8 inline mr-3 text-primary" />
                  Sistema Premi
                </h2>
                <p className="text-muted-foreground">Scopri come ottenere ricompense esclusive</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-gradient-card">
                  <CardHeader>
                    <CardTitle>Crate System</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      Apri casse per ottenere ricompense rare e esclusive
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li><Badge variant="outline" className="mr-2">Comune</Badge> Oggetti base e risorse</li>
                      <li><Badge variant="secondary" className="mr-2">Rara</Badge> Strumenti incantati</li>
                      <li><Badge className="mr-2">Epica</Badge> Oggetti cosmetici unici</li>
                      <li><Badge variant="destructive" className="mr-2">Leggendaria</Badge> Ricompense esclusive</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card">
                  <CardHeader>
                    <CardTitle>BattlePass</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      Completa sfide per sbloccare ricompense progressive
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Sfide settimanali e mensili</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Ricompense esclusive per ogni livello</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Versione gratuita e premium</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card">
                  <CardHeader>
                    <CardTitle>Premi Giornalieri</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      Accedi ogni giorno per ricevere ricompense incrementali
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Ricompense giornaliere crescenti</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Bonus speciali nel weekend</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Streak bonus per login consecutivi</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Teams Tab */}
            <TabsContent value="teams" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  <Users className="w-8 h-8 inline mr-3 text-primary" />
                  Team e Gilde
                </h2>
                <p className="text-muted-foreground">Collabora con altri giocatori per raggiungere obiettivi comuni</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-gradient-card">
                  <CardHeader>
                    <CardTitle>Sistema Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      Crea o unisciti a un team per collaborare con altri giocatori
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Massimo 10 membri per team</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Chat dedicata per il team</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Territorio condiviso e protetto</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Sistema di ruoli e permessi</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card">
                  <CardHeader>
                    <CardTitle>Comandi Team</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <code className="text-primary font-mono text-sm bg-muted px-2 py-1 rounded">/team create [nome]</code>
                        <p className="text-muted-foreground text-xs ml-2 mt-1">Crea un nuovo team</p>
                      </div>
                      <div>
                        <code className="text-primary font-mono text-sm bg-muted px-2 py-1 rounded">/team invite [giocatore]</code>
                        <p className="text-muted-foreground text-xs ml-2 mt-1">Invita un giocatore nel team</p>
                      </div>
                      <div>
                        <code className="text-primary font-mono text-sm bg-muted px-2 py-1 rounded">/team accept</code>
                        <p className="text-muted-foreground text-xs ml-2 mt-1">Accetta un invito al team</p>
                      </div>
                      <div>
                        <code className="text-primary font-mono text-sm bg-muted px-2 py-1 rounded">/team chat [messaggio]</code>
                        <p className="text-muted-foreground text-xs ml-2 mt-1">Invia un messaggio nella chat del team</p>
                      </div>
                      <div>
                        <code className="text-primary font-mono text-sm bg-muted px-2 py-1 rounded">/team claim</code>
                        <p className="text-muted-foreground text-xs ml-2 mt-1">Rivendica territorio per il team</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Guides Tab */}
            <TabsContent value="guides" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  <Book className="w-8 h-8 inline mr-3 text-primary" />
                  Guide Dettagliate
                </h2>
                <p className="text-muted-foreground">Guide approfondite per ogni modalità di gioco</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-gradient-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Guida Survival</CardTitle>
                    <CardDescription>Come iniziare nella modalità Survival</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Trova un posto sicuro per costruire</li>
                      <li>• Usa /sethome per impostare la tua base</li>
                      <li>• Raccogli risorse e costruisci protezioni</li>
                      <li>• Commercia con altri giocatori</li>
                      <li>• Unisciti a un team per collaborare</li>
                      <li>• Partecipa agli eventi del server</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Guida KitPvP</CardTitle>
                    <CardDescription>Diventa un guerriero leggendario</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Scegli il kit più adatto al tuo stile</li>
                      <li>• Pratica nelle arene per principianti</li>
                      <li>• Impara le tecniche di combattimento</li>
                      <li>• Partecipa ai tornei settimanali</li>
                      <li>• Scala la classifica globale</li>
                      <li>• Ottieni ricompense esclusive</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <CardTitle>Guida Tycoon</CardTitle>
                    <CardDescription>Costruisci il tuo impero economico</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Crea la tua prima azienda</li>
                      <li>• Imposta linee di produzione efficienti</li>
                      <li>• Investi in altre aziende</li>
                      <li>• Ottimizza i profitti e costi</li>
                      <li>• Espandi verso nuovi mercati</li>
                      <li>• Diventa il magnate del server</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wiki;