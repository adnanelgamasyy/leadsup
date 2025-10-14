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
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-bold text-primary-orange uppercase tracking-wide mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-3 text-charcoal leading-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-base text-gray-600">Choose the plan that fits your business needs</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl p-6 border-2 transition-all duration-300 relative bg-white ${
                plan.highlighted 
                  ? 'border-primary-orange shadow-2xl scale-105' 
                  : 'border-gray-200 shadow-lg hover:shadow-xl hover:border-primary-orange/50'
              }`}
            >
              {/* Most Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-primary-orange text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-charcoal mb-1">{plan.name}</h3>
                <p className="text-xs text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-black text-charcoal">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 mb-1 text-base">{plan.period}</span>}
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full mb-6 py-5 text-sm font-bold rounded-lg transition-all duration-300 ${
                  plan.highlighted 
                    ? 'bg-primary-orange hover:bg-primary-orange-dark text-white shadow-lg hover:shadow-xl hover:scale-105' 
                    : 'bg-gray-100 hover:bg-primary-orange hover:text-white text-charcoal'
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              {/* Features List */}
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'bg-primary-orange' : 'bg-primary-orange/10'
                    }`}>
                      <Check className={`h-2.5 w-2.5 ${plan.highlighted ? 'text-white' : 'text-primary-orange'}`} />
                    </div>
                    <span className="text-xs text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Signal Below Pricing */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-xs font-medium">
            All plans include: <span className="text-green-600 font-bold">✓</span> No contracts <span className="text-green-600 font-bold">✓</span> No setup fees <span className="text-green-600 font-bold">✓</span> Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}