import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  gradient?: string;
}

const StatCard = ({ title, value, subtitle, gradient = "bg-gradient-blue" }: StatCardProps) => {
  return (
    <Card className="bg-gradient-card border border-border/50 p-6 text-center shadow-card hover:shadow-glow-primary/20 transition-all duration-300 hover:scale-105">
      <div className="space-y-2">
        <h3 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {value}
        </h3>
        <p className="text-muted-foreground text-sm font-medium">{subtitle}</p>
      </div>
    </Card>
  );
};

export const Stats = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard
            title="Total Airdrop"
            value="100M SOL"
            subtitle="Total Airdrop"
            gradient="from-blue-400 to-blue-600"
          />
          <StatCard
            title="Claimed"
            value="67.3M"
            subtitle="Claimed"
            gradient="from-blue-400 to-blue-600"
          />
          <StatCard
            title="Eligible Wallets"
            value="45K+"
            subtitle="Eligible Wallets"
            gradient="from-blue-400 to-blue-600"
          />
          <StatCard
            title="Time Remaining"
            value="15 Days"
            subtitle="Time Remaining"
            gradient="from-blue-400 to-blue-600"
          />
        </div>
      </div>
    </section>
  );
};