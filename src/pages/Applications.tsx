import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserPlus, FileText, MessageSquare, CheckCircle, Clock, Users, Hammer, Heart } from "lucide-react";

const Applications = () => {
  const openPositions = [
    {
      role: "Helper",
      icon: Heart,
      color: "text-accent",
      bgColor: "bg-accent/20",
      status: "Aperte",
      description: "Aiuta i nuovi giocatori e fornisci supporto generale",
      requirements: [
        "Età minima: 16 anni",
        "Conoscenza approfondita delle regole",
        "Almeno 20 ore di gioco sul server",
        "Capacità di comunicazione in italiano",
        "Disponibilità di almeno 10 ore settimanali"
      ],
      responsibilities: [
        "Assistenza ai nuovi giocatori",
        "Risposta a domande in chat",
        "Segnalazione di problemi allo staff senior",
        "Moderazione chat quando necessario"
      ]
    },
    {
      role: "Builder",
      icon: Hammer,
      color: "text-green-400",
      bgColor: "bg-green-400/20",
      status: "Aperte",
      description: "Crea strutture e mappe incredibili per il server",
      requirements: [
        "Età minima: 15 anni",
        "Portfolio di costruzioni dimostrabili",
        "Creatività e attenzione ai dettagli",
        "Conoscenza di WorldEdit/VoxelSniper (preferibile)",
        "Disponibilità per progetti a lungo termine"
      ],
      responsibilities: [
        "Costruzione di spawn e hub",
        "Creazione di arene PvP",
        "Design di mappe per eventi",
        "Mantenimento strutture esistenti"
      ]
    },
    {
      role: "Moderator",
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/20",
      status: "Al momento chiuse",
      description: "Modera la community e mantieni l'ordine",
      requirements: [
        "Età minima: 18 anni",
        "Esperienza precedente come Helper",
        "Eccellenti capacità di problem-solving",
        "Maturità e imparzialità nelle decisioni",
        "Disponibilità di almeno 15 ore settimanali"
      ],
      responsibilities: [
        "Moderazione avanzata della chat",
        "Gestione di dispute tra giocatori",
        "Applicazione delle sanzioni",
        "Formazione dei nuovi Helper"
      ]
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Candidatura Scritta",
      description: "Compila il modulo di candidatura con le tue informazioni",
      icon: FileText,
      details: [
        "Informazioni personali e di contatto",
        "Motivazione per entrare nello staff",
        "Esperienza precedente (se presente)",
        "Disponibilità oraria settimanale"
      ]
    },
    {
      step: 2,
      title: "Revisione Iniziale",
      description: "Il nostro team esamina la tua candidatura",
      icon: Clock,
      details: [
        "Verifica dei requisiti minimi",
        "Controllo del comportamento in game",
        "Valutazione della motivazione",
        "Tempi di risposta: 3-7 giorni"
      ]
    },
    {
      step: 3,
      title: "Colloquio Discord",
      description: "Incontro vocale con membri senior dello staff",
      icon: MessageSquare,
      details: [
        "Discussione sulla tua candidatura",
        "Domande su situazioni ipotetiche",
        "Valutazione delle capacità comunicative",
        "Durata: 30-45 minuti circa"
      ]
    },
    {
      step: 4,
      title: "Periodo di Prova",
      description: "Se accettato, inizierai un periodo di formazione",
      icon: CheckCircle,
      details: [
        "Training con staff esperto",
        "Apprendimento di procedure specifiche",
        "Valutazione continua delle performance",
        "Durata: 2-4 settimane"
      ]
    }
  ];

  const tips = [
    "Sii onesto e autentico nella tua candidatura",
    "Dimostra la tua conoscenza del server e delle regole",
    "Mostra esempi concreti della tua esperienza",
    "Mantieni un comportamento esemplare mentre la candidatura è in valutazione",
    "Non pressare lo staff per avere risposte più velocemente",
    "Preparati bene per il colloquio pensando a situazioni di moderazione"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <UserPlus className="w-12 h-12 inline mr-4 text-primary" />
              Candidature <span className="text-primary">Staff</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Unisciti al team PearlMC e aiutaci a creare la migliore esperienza Minecraft per la nostra community italiana
            </p>
          </div>

          {/* Requirements Overview */}
          <Card className="mb-12 bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Requisiti Generali</CardTitle>
              <CardDescription className="text-center">
                Qualità che cerchiamo in tutti i candidati staff
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Passione</h3>
                  <p className="text-sm text-muted-foreground">Amore genuino per Minecraft e la community</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Comunicazione</h3>
                  <p className="text-sm text-muted-foreground">Eccellenti capacità di comunicazione scritta e verbale</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Tempo</h3>
                  <p className="text-sm text-muted-foreground">Disponibilità regolare e affidabile</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Affidabilità</h3>
                  <p className="text-sm text-muted-foreground">Maturità e capacità di prendere decisioni ponderate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="positions" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="positions">Posizioni Aperte</TabsTrigger>
              <TabsTrigger value="process">Processo di Selezione</TabsTrigger>
              <TabsTrigger value="tips">Consigli Utili</TabsTrigger>
            </TabsList>

            {/* Open Positions */}
            <TabsContent value="positions" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Posizioni Attualmente Disponibili</h2>
                <p className="text-muted-foreground">Candidature sempre aperte per Helper e Builder, altre posizioni quando necessario</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {openPositions.map((position, index) => (
                  <Card key={index} className={`bg-gradient-card border-border hover:shadow-elegant transition-all duration-300 ${position.status === "Al momento chiuse" ? "opacity-75" : ""}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 ${position.bgColor} rounded-lg flex items-center justify-center`}>
                            <position.icon className={`w-6 h-6 ${position.color}`} />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{position.role}</CardTitle>
                          </div>
                        </div>
                        <Badge variant={position.status === "Aperte" ? "default" : "secondary"}>
                          {position.status}
                        </Badge>
                      </div>
                      <CardDescription className="mt-4">{position.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Requisiti:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Responsabilità:</h4>
                        <ul className="space-y-2">
                          {position.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button 
                        className="w-full" 
                        variant={position.status === "Aperte" ? "hero" : "outline"}
                        disabled={position.status !== "Aperte"}
                        asChild={position.status === "Aperte"}
                      >
                        {position.status === "Aperte" ? (
                          <a href="https://discord.pearlmc.it" target="_blank" rel="noopener noreferrer">
                            Candidati per {position.role}
                          </a>
                        ) : (
                          "Candidature Chiuse"
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Application Process */}
            <TabsContent value="process" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Come Funziona il Processo</h2>
                <p className="text-muted-foreground">Ecco cosa aspettarti durante la procedura di candidatura</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {applicationProcess.map((step, index) => (
                  <Card key={index} className="bg-gradient-card border-border">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">
                            Fase {step.step}: {step.title}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {step.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Tips */}
            <TabsContent value="tips" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Consigli per una Candidatura di Successo</h2>
                <p className="text-muted-foreground">Suggerimenti dal nostro team per aumentare le tue possibilità</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tips.map((tip, index) => (
                  <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-accent font-semibold text-sm">{index + 1}</span>
                        </div>
                        <p className="text-muted-foreground">{tip}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-accent/10 border-accent">
                <CardHeader>
                  <CardTitle className="text-accent">Importante da Ricordare</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Le candidature vengono valutate con attenzione e potrebbero richiedere tempo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Non tutti i candidati vengono accettati, ma apprezziamo sempre l'interesse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Anche se non vieni accettato subito, puoi sempre riprovare in futuro</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Essere parte della community è già un contributo prezioso!</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <Card className="mt-16 bg-gradient-hero relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
            <CardContent className="relative p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Pronto a Unirti al Team?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Se pensi di avere quello che serve per aiutare la community PearlMC a crescere, 
                siamo entusiasti di conoscerti!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="glass" size="lg" asChild>
                  <a href="https://discord.pearlmc.it" target="_blank" rel="noopener noreferrer">
                    <UserPlus className="w-5 h-5 mr-2" />
                    Invia la Tua Candidatura
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/20" asChild>
                  <a href="/staff">
                    Scopri di Più sullo Staff
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Applications;