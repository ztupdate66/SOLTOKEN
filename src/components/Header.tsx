import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Facebook } from "lucide-react";
import solanaLogo from "@/assets/solana-logo.svg";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={solanaLogo} alt="Solana" className="w-8 h-8" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              SOL Tokens
            </span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-card/50"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-card/50"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-card/50"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <button className="connect">Connect</button>
              Claim Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="connect" size="sm" classNam="connect">
              Claim Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
