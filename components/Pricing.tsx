'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    description: 'Perfect for small teams getting started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$599',
    period: '/month',
    description: 'For growing organizations with advanced needs',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    popular: false,
  },
];

const features = [
  {
    name: 'Employee Surveys',
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    name: 'Culture Analytics Dashboard',
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    name: 'Team Engagement Scores',
    starter: true,
    professional: true,
    enterprise: true,
  },
  {
    name: 'Real-time Pulse Checks',
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    name: 'Predictive Attrition Alerts',
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    name: 'Custom Survey Builder',
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    name: 'Advanced AI Insights',
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    name: 'Unlimited Team Members',
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    name: 'Dedicated Success Manager',
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    name: 'API Access & Integrations',
    starter: false,
    professional: true,
    enterprise: true,
  },
  {
    name: 'SSO & Advanced Security',
    starter: false,
    professional: false,
    enterprise: true,
  },
  {
    name: 'Custom Reporting',
    starter: false,
    professional: false,
    enterprise: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Transparent pricing for every team
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            Choose the plan that scales with your organization. All plans include our core culture analytics platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left py-6 px-6 bg-slate-50 rounded-tl-2xl">
                  <span className="text-lg font-semibold text-slate-900">Compare Plans</span>
                </th>
                {plans.map((plan, index) => (
                  <th
                    key={plan.name}
                    className={`py-6 px-6 text-center bg-slate-50 ${
                      index === plans.length - 1 ? 'rounded-tr-2xl' : ''
                    } ${plan.popular ? 'relative' : ''}`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    )}
                    <div className="text-xl font-bold text-slate-900 mb-1">{plan.name}</div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-bold text-violet-600">{plan.price}</span>
                      <span className="text-slate-500">{plan.period}</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">{plan.description}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={feature.name}
                  className={`border-b border-slate-100 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                  }`}
                >
                  <td className="py-4 px-6 text-slate-700 font-medium">{feature.name}</td>
                  <td className="py-4 px-6 text-center">
                    {feature.starter ? (
                      <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-slate-300 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {feature.professional ? (
                      <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-slate-300 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {feature.enterprise ? (
                      <Check className="w-5 h-5 text-emerald-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-slate-300 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="py-8 px-6 bg-slate-50 rounded-bl-2xl"></td>
                <td className="py-8 px-6 text-center bg-slate-50">
                  <a
                    href="#contact"
                    className="inline-block border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white font-semibold rounded-xl px-6 py-3 transition-all duration-300"
                  >
                    Get Started
                  </a>
                </td>
                <td className="py-8 px-6 text-center bg-slate-50">
                  <a
                    href="#contact"
                    className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-6 py-3 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    Get Started
                  </a>
                </td>
                <td className="py-8 px-6 text-center bg-slate-50 rounded-br-2xl">
                  <a
                    href="#contact"
                    className="inline-block border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white font-semibold rounded-xl px-6 py-3 transition-all duration-300"
                  >
                    Contact Sales
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-slate-500 mt-12"
        >
          All plans include 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
