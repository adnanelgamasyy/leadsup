import { Button } from '@/components/ui/button'
import { Check, ArrowRight } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "For Individuals & Small Teams",
      price: "$1,497",
      period: "/month",
      features: [
        "1 Dedicated Agent",
        "80 Calling Hours",
        "Premium Skip Tracing",
        "Standard CRM Integration",
        "Bi-Weekly Reporting"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Pro",
      description: "For Growing Businesses",
      price: "$2,997",
      period: "/month",
      badge: "Most Popular",
      features: [
        "2 Dedicated Agents",
        "160 Calling Hours",
        "Premium Skip Tracing",
        "Advanced CRM Integration",
        "Weekly Reporting",
        "Dedicated Account Manager"
      ],
      cta: "Get Started",
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "For Scaling Operations",
      price: "Let's Talk",
      period: "",
      features: [
        "4+ Dedicated Agents",
        "Custom Calling Hours",
        "Premium Skip Tracing",
        "Custom API Integration",
        "Real-Time Dashboard",
        "Dedicated Account Manager"
      ],
      cta: "Book a Call",
      highlighted: false
    }
  ]

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">PRICING</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Simple, Transparent Pricing to Fuel Your Growth
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 border-2 transition-all duration-300 relative ${
                plan.highlighted 
                  ? 'border-primary shadow-premium-xl bg-card scale-105 lg:scale-110' 
                  : 'border-border shadow-premium bg-card hover:shadow-premium-lg hover:border-primary/50'
              }`}
            >
              {/* Most Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-2">{plan.period}</span>}
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full mb-8 py-6 text-base font-semibold rounded-xl transition-all duration-300 ${
                  plan.highlighted 
                    ? 'bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:scale-105' 
                    : 'bg-secondary hover:bg-primary hover:text-white'
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              {/* Features List */}
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'bg-primary' : 'bg-primary/10'
                    }`}>
                      <Check className={`h-3 w-3 ${plan.highlighted ? 'text-white' : 'text-primary'}`} />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Signal Below Pricing */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            All plans include: ✓ No contracts ✓ No setup fees ✓ Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}