"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const pricingPlans = [
  {
    title: "Free Plan",
    price: "$0",
    description: "For individuals getting started with AI.",
    features: ["Basic AI Responses", "Limited Requests", "Community Support"],
    stripePriceId: null,
  },
  {
    title: "Pro Plan",
    price: "$9.99",
    description: "For professionals who need unlimited access.",
    features: ["Unlimited AI Responses", "Priority Support", "Exclusive Templates", "Early Feature Access"],
    stripePriceId: "price_123456789", // Replace with real Stripe price ID
    isPopular: true,
  },
];

const handlePayment = async (priceId) => {
  if (!priceId) {
    alert("You have chosen the Free plan!");
    return;
  }

  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ priceId }),
  });

  const data = await response.json();
  if (data.url) {
    window.location.href = data.url; // Redirect to Stripe
  } else {
    alert("Payment failed!");
  }
};

export default function Billing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-6">Choose Your Plan</h2>
      <p className="text-gray-500 mb-6">Find the best plan that suits your needs.</p>
      <div className="flex flex-col sm:flex-row gap-6">
        {pricingPlans.map((plan) => (
          <Card key={plan.title} className="w-80 text-center shadow-md border flex flex-col justify-between">
            <div className="flex flex-col h-full">
              <CardHeader>
                {plan.isPopular && <Badge className="absolute -top-3 right-3 bg-green-500">Most Popular</Badge>}
                <CardTitle className="text-xl">{plan.title}</CardTitle>
                <p className="text-gray-500">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-3xl font-bold">{plan.price} / month</p>
                <ul className="mt-4 space-y-2 text-left text-gray-700">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={() => handlePayment(plan.stripePriceId)}>
                  {plan.stripePriceId ? "Upgrade to Pro" : "Get Started"}
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
