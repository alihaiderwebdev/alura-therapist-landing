export const pricingData = {
  header: "Plan & Subscription",
  title: {
    line1: "Find the Plan",
    line2: "That Fits Your Workflow"
  },
  description: "Choose from flexible subscription options designed for solo practitioners, group practices, and recovery programs.",
  billingOptions: {
    monthly: "Monthly",
    yearly: "Yearly"
  },
  plans: [
    {
      name: "Reset Starter",
      price: "Free",
      period: "Trial for 7 days",
      features: [
        "Up to 10 active clients",
        "Client dashboard & insights",
        "Safety plan tools",
        "Limited CBT module library",
        "Mobile companion app access",
        "Email support"
      ],
      buttonText: "Get Plus Exclusive",
      isPopular: false
    },
    {
      name: "Reset Plus",
      price: "$299",
      period: "Annual Subscription",
      features: [
        "All Starter features, plus:",
        "Up to 50 active clients",
        "In-app Alura for clin. referrals",
        "Assignment management",
        "Advanced progress reports",
        "In-app secure messaging"
      ],
      buttonText: "Get Plus Exclusive",
      isPopular: true
    },
    {
      name: "Reset Pro",
      price: "$799",
      period: "Annual Subscription",
      features: [
        "Unlimited clients",
        "Multi-therapist dashboard",
        "Custom branding",
        "Integration with EHR + case mgr",
        "Priority support",
        "Dedicated account manager"
      ],
      buttonText: "Get Plus Exclusive",
      isPopular: false
    }
  ]
};
