import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Crown, Shield, Users, Hammer, Briefcase, Heart } from "lucide-react";

const Staff = () => {
  const staffRoles = [
    {
      role: "Owner",
      icon: Crown,
      color: "text-purple-400",
      bgColor: "bg-purple-400/20",
      description: "Proprietario e fondatore del server",
      responsibilities: [
        "Gestione generale del server",
        "Decisioni strategiche e sviluppo",
        "Supervisione di tutto lo staff",
        "Comunicazione con la community"
      ]
    },
    {
      role: "Admin",
      icon: Shield,
      color: "text-red-400",
      bgColor: "bg-red-400/20",
      description: "Amministratori senior del server",
      responsibilities: [
        "Gestione dello staff e delle operazioni",
        "Configurazione e manutenzione del server",
        "Risoluzione di problemi complessi",
        "Gestione di eventi e progetti speciali"
      ]
    },
    {
      role: "Moderator",
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/20",
      description: "Moderatori esperti della community",
      responsibilities: [
        "Moderazione chat e comportamenti",
        "Gestione di dispute tra giocatori",
        "Applicazione delle regole del server",
        "Supporto ai Helper e formazione"
      ]
    },
    {
      role: "Helper",
      icon: Heart,
      color: "text-accent",
      bgColor: "bg-accent/20",
      description: "Assistenti della community",
      responsibilities: [
        "Aiuto e supporto ai nuovi giocatori",
        "Risposta a domande generali",
        "Segnalazione di problemi allo staff senior",
        "Accoglienza e orientamento giocatori"
      ]
    },
    {
      role: "Builder",
      icon: Hammer,
      color: "text-green-400",
      bgColor: "bg-green-400/20",
      description: "Costruttori creativi del server",
      responsibilities: [
        "Costruzione di mappe e strutture",
        "Design di arene e ambienti di gioco",
        "Creazione di contenuti visivi",
        "Manutenzione e aggiornamento mappe"
      ]
    },
    {
      role: "Developer",
      icon: Briefcase,
      color: "text-blue-400",
      bgColor: "bg-blue-400/20",
      description: "Sviluppatori di plugin e funzionalità",
      responsibilities: [
        "Sviluppo di plugin personalizzati",
        "Manutenzione codice del server",
        "Implementazione di nuove funzionalità",
        "Ottimizzazione e bug fixing"
      ]
    }
  ];

  const currentStaff = [
    { name: "PearlMaster", role: "Owner", status: "online" },
    { name: "CrystalGuard", role: "Admin", status: "online" },
    { name: "EmeraldMod", role: "Moderator", status: "away" },
    { name: "DiamondHelper", role: "Helper", status: "online" },
    { name: "SapphireBuilder", role: "Builder", status: "offline" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "away": return "bg-yellow-500";
      case "offline": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "online": return "Online";
      case "away": return "Assente";
      case "offline": return "Offline";
      default: return "Sconosciuto";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Staff <span className="text-primary">PearlMC</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Incontra il team dedicato che mantiene PearlMC un posto sicuro e divertente per tutti
            </p>
          </div>

          {/* Mission Statement */}
          <Card className="mb-16 bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-center text-2xl">La Nostra Missione</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                Il nostro staff è composto da giocatori appassionati che dedicano il loro tempo per garantire 
                che PearlMC sia sempre un ambiente accogliente, equo e divertente. Siamo qui per aiutarti, 
                ascoltare i tuoi feedback e far crescere insieme la nostra community.
              </p>
            </CardContent>
          </Card>

          {/* Staff Roles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Ruoli del Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staffRoles.map((staff, index) => (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-12 h-12 ${staff.bgColor} rounded-lg flex items-center justify-center`}>
                        <staff.icon className={`w-6 h-6 ${staff.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{staff.role}</CardTitle>
                        <Badge variant="outline" className={staff.color}>
                          {staff.role === "Owner" ? "Proprietario" :
                           staff.role === "Admin" ? "Amministratore" :
                           staff.role === "Moderator" ? "Moderatore" :
                           staff.role === "Helper" ? "Assistente" :
                           staff.role === "Builder" ? "Costruttore" :
                           "Sviluppatore"}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription>{staff.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-foreground mb-3">Responsabilità:</h4>
                    <ul className="space-y-2">
                      {staff.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Current Staff */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Team Attuale
            </h2>
            <Card className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle>Staff Online e Status</CardTitle>
                <CardDescription>
                  Ecco alcuni membri del nostro team attualmente attivi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentStaff.map((member, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                            <span className="text-primary font-semibold">
                              {member.name.charAt(0)}
                            </span>
                          </div>
                          <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(member.status)} rounded-full border-2 border-background`} />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{member.name}</p>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {getStatusText(member.status)}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Join the Team */}
          <Card className="bg-gradient-hero relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
            <CardContent className="relative p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Vuoi Unirti al Nostro Team?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Siamo sempre alla ricerca di persone motivate e appassionate che vogliano 
                contribuire alla crescita di PearlMC e aiutare la community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="glass" size="lg" asChild>
                  <a href="/candidature">
                    Fai Candidatura
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/20" asChild>
                  <a href="https://discord.pearlmc.it" target="_blank" rel="noopener noreferrer">
                    Contattaci su Discord
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="mt-12 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-center">Come Contattare lo Staff</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">In Game</h3>
                  <p className="text-sm text-muted-foreground">
                    Usa /staff per vedere chi è online<br />
                    Scrivi in chat o usa /msg [staff]
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Discord</h3>
                  <p className="text-sm text-muted-foreground">
                    Canale #supporto per assistenza<br />
                    Messaggi privati per questioni private
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Forum</h3>
                  <p className="text-sm text-muted-foreground">
                    Apri un ticket di supporto<br />
                    Segnala problemi o bug
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Staff;