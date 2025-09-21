import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, MessageCircle, Home, Swords, TrendingUp, Settings } from "lucide-react";

const Rules = () => {
  const rulesSections = [
    {
      icon: Shield,
      title: "Regole Generali",
      description: "Comportamenti richiesti su tutto il network",
      rules: [
        "È vietato l'uso di qualsiasi tipo di cheat, hack o modifiche illegali",
        "Non è permesso fare spam in chat o nei comandi",
        "Rispetta sempre gli altri giocatori e lo staff",
        "Non è consentito pubblicizzare altri server",
        "È vietato il trading di oggetti virtuali con denaro reale",
        "Evita discussioni controverse (politica, religione, ecc.)",
        "Segnala sempre comportamenti scorretti allo staff"
      ]
    },
    {
      icon: MessageCircle,
      title: "Regole Chat",
      description: "Comportamento in chat e comunicazione",
      rules: [
        "Mantieni un linguaggio rispettoso e appropriato",
        "Non insultare, offendere o minacciare altri giocatori",
        "Evita l'uso eccessivo di MAIUSCOLE",
        "Non fare spam di messaggi o simboli",
        "È vietata la pubblicità di qualsiasi tipo",
        "Rispetta la privacy degli altri giocatori",
        "Usa i canali Discord appropriati per ogni discussione"
      ]
    },
    {
      icon: Home,
      title: "Regole Survival",
      description: "Norme specifiche per la modalità Survival",
      rules: [
        "È vietato il griefing: non distruggere costruzioni altrui",
        "Rispetta le proprietà private e le protezioni",
        "Non abusare di bug o glitch del gioco",
        "Limite massimo di 2 account alternativi per giocatore",
        "Non costruire troppo vicino ad altri giocatori senza permesso",
        "Mantieni le costruzioni appropriate e non offensive",
        "Collabora in modo costruttivo con la community"
      ]
    },
    {
      icon: Swords,
      title: "Regole KitPvP",
      description: "Norme per i combattimenti PvP",
      rules: [
        "Vietato l'uso di hack PvP (killaura, criticals, ecc.)",
        "Non sono ammesse modifiche che danno vantaggi sleali",
        "Rispetta gli avversari: niente insulti durante i combattimenti",
        "Non fare team contro altri giocatori se non consentito",
        "Segnala immediatamente eventuali cheater",
        "Usa solo i kit forniti dal server",
        "Rispetta le regole specifiche di ogni arena"
      ]
    },
    {
      icon: TrendingUp,
      title: "Regole Tycoon",
      description: "Norme per la modalità economica",
      rules: [
        "Non sfruttare bug economici o exploit",
        "È vietato il farming AFK eccessivo o automatizzato",
        "Commercia in modo onesto e trasparente",
        "Non manipolare i prezzi di mercato artificialmente",
        "Rispetta gli accordi commerciali con altri giocatori",
        "Non creare account multipli per vantaggi economici",
        "Segnala immediatamente exploit o problemi economici"
      ]
    },
    {
      icon: Settings,
      title: "Client e Modifiche",
      description: "Software e modifiche consentite",
      rules: [
        "Client vanilla Minecraft (Java/Bedrock)",
        "Optifine e mod per le performance (Sodium, Lithium)",
        "Minimap senza radar giocatori",
        "Mod estetiche (shaders, texture pack)",
        "JEI/REI per ricette (solo visualizzazione)",
        "VIETATI: X-Ray, Killaura, Speed, Fly, Duplication glitches",
        "VIETATI: Autoclick, macro, e qualsiasi forma di automazione"
      ]
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
              Regole del <span className="text-primary">Server</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Per garantire un'esperienza di gioco positiva per tutti, ti chiediamo di rispettare queste semplici regole
            </p>
          </div>

          {/* Important Notice */}
          <Card className="mb-12 border-accent bg-accent/10">
            <CardHeader>
              <CardTitle className="text-accent flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Importante
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">
                La violazione di queste regole può comportare punizioni che vanno dal warning temporaneo al ban permanente, 
                a seconda della gravità dell'infrazione. Lo staff si riserva il diritto di applicare sanzioni anche per 
                comportamenti non esplicitamente elencati ma che disturbano la community.
              </p>
            </CardContent>
          </Card>

          {/* Rules Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {rulesSections.map((section, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg bg-primary/20">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    {section.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Info */}
          <Card className="mt-12 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-center">Hai domande sulle regole?</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Se hai dubbi su qualche regola o vuoi chiarimenti, non esitare a contattare il nostro staff
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://discord.pearlmc.it" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Unisciti al nostro Discord
                </a>
                <Separator orientation="vertical" className="hidden sm:block h-6" />
                <span className="text-muted-foreground">Oppure contatta uno staff in game</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rules;