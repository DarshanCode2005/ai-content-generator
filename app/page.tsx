"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Sparkles, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SignInButton, SignUpButton, useUser, SignOutButton } from "@clerk/nextjs";

export default function LandingPage() {
  const router = useRouter();
  const { isSignedIn } = useUser();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
      <header className="w-full max-w-5xl flex justify-between items-center py-6">
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Sparkles className="text-yellow-400 w-8 h-8" /> AI Content Generator
        </h1>
        <div className="flex gap-4">
          {isSignedIn ? (
            <SignOutButton>
              <Button variant="destructive">Log Out</Button>
            </SignOutButton>
          ) : (
            <>
              <SignInButton mode="modal">
                <Button variant="outline" className="text-black">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button>Sign Up</Button>
              </SignUpButton>
            </>
          )}
        </div>
      </header>

      <main className="text-center max-w-3xl mt-12">
        <h2 className="text-5xl font-extrabold leading-tight">
          Generate High-Quality AI Content Instantly
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Transform your workflow with AI-powered content generation. From blogs to captions, get creative effortlessly.
        </p>
        <Button className="mt-6 px-6 py-3 text-lg" onClick={() => router.push("/dashboard")}>Get Started</Button>
      </main>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {features.map((feature, index) => (
          <Card key={index} className="bg-gray-800 text-white border border-gray-700">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-300 mt-2">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}

const features = [
  { title: "AI-Powered Writing", description: "Create blog posts, social media captions, and more with AI." },
  { title: "SEO Optimized Content", description: "Generate content that ranks higher on search engines." },
  { title: "Customizable Tones", description: "Adjust tone and style to match your brand's voice." },
  { title: "Fast & Efficient", description: "Save hours of work with AI-generated content in seconds." },
];
