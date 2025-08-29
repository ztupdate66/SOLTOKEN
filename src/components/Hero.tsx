import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Wallet } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-bg flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center space-y-8">
        {/* Announcement Badge */}
        <div className="flex justify-center animate-float">
          <Badge 
            variant="secondary" 
            className="bg-card/50 backdrop-blur-sm border border-primary/20 px-4 py-2 text-sm font-medium"
          >
            ⚡ Limited Time Airdrop - 67.3M/100M SOL Claimed
          </Badge>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-foreground">Claim Your Free</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow">
              SOL Tokens
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get up to{" "}
            <span className="text-accent font-semibold">2,500 SOL tokens</span>{" "}
            absolutely free! Connect your Solana wallet to check eligibility and claim your share of the{" "}
            <span className="text-primary font-semibold">100M SOL airdrop</span>.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button variant="cta" size="lg" className="group connect">
            <Wallet className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Connect Wallet to Claim
          </Button>
          <Button variant="outline" size="lg" className="group">
            <CheckCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Check Eligibility
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 pt-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Verified Smart Contract</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Audited by CertiK</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span>45K+ Participants</span>
          </div>
        </div>
      </div>
    </section>
  );
};