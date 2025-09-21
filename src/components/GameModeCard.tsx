import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface GameModeCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  status?: "available" | "coming_soon";
}

const GameModeCard = ({ title, description, image, features, status = "available" }: GameModeCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 overflow-hidden bg-gradient-card border-border">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {status === "coming_soon" && (
          <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
            In Arrivo
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Button 
          variant={status === "available" ? "default" : "outline"} 
          className="w-full"
          disabled={status === "coming_soon"}
        >
          {status === "available" ? "Gioca Ora" : "Presto Disponibile"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default GameModeCard;