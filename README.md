# AI Content Generator(SaaS - Software as a Service)

AI Content Generator is a powerful AI-driven platform that helps users generate high-quality content effortlessly. From blog posts and social media captions to marketing copy and more, this tool streamlines content creation using artificial intelligence.

#🌟 Utility of AI Content Generator



* **Boost Productivity:** Reduce the time spent on content creation and focus on strategy.

* **Enhance Creativity:** Get AI-powered suggestions to improve your writing.

* **SEO Optimization:** Automatically generate content optimized for search engines.

* **Cost-Effective:** Save on hiring content writers with AI-generated text.

* **Scalability:** Generate bulk content efficiently for blogs, social media, and marketing.



# 🚀 Features

- **AI-Powered Writing**: Generate blog posts, social media captions, and marketing content.

- **SEO-Optimized Content**: Create content that ranks better on search engines.

- **Customizable Tones**: Adjust the style and tone of your content to match your brand.

- **Fast & Efficient**: Save time with instant AI-generated text.

- **Secure Authentication**: Uses Clerk for authentication to ensure data security.

📂 Folder Structure

```
📦 ai-content-generator
├── 📂 app
│   ├── 📂 dashboard (Protected by Clerk Authentication)
│   ├── 📂 history (User's generated content history)
│   ├── 📂 billing (Stripe-integrated payment system)
│   ├── 📂 components (Reusable UI components using ShadCN)
│   ├── 📄 layout.tsx (App layout)
│   ├── 📄 page.tsx (Landing page)
├── 📂 db (Drizzle ORM setup)
├── 📂 public (Static assets)
├── 📂 styles (Global styles and themes)
├── 📄 next.config.js (Next.js configuration)
├── 📄 package.json (Project dependencies and scripts)
└── 📄 README.md (Project documentation)
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js (>= 18.x)
- npm or yarn
- Clerk API Key (for authentication)
- Stripe API Key (for payments)
- Google Gemini API Key (for AI enhancements)
- PostgreSQL Database (via Drizzle ORM)

### Steps

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/DarshanCode2005/ai-content-generator.git
   cd ai-content-generator
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   ```
3. **Set Up Environment Variables:**
   Create a `.env.local` file and add the following:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
   CLERK_SECRET_KEY=<your_clerk_secret_key>
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY=<your_google_gemini_api_key>
   NEXT_PUBLIC_DRIZZLE_DB_URL=<your_drizzle_db_url>
   STRIPE_SECRET_KEY=<your_stripe_secret_key>
   ```

### 🔑 Generating API Keys & Setting Up Services

1. **Clerk Authentication Setup**

   - Sign up at [Clerk](https://clerk.dev/)
   - Create a new project and copy the **Publishable Key** & **Secret Key**
   - Add them to `.env.local` as `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`

2. **Stripe Payment Setup**

   - Sign up at [Stripe](https://stripe.com/)
   - Create an account and get the **Secret Key** from the Developer Dashboard
   - Add it to `.env.local` as `STRIPE_SECRET_KEY`

3. **Google Gemini API Setup**

   - Sign up at [Google AI Studio](https://ai.google.dev/)
   - Generate an API key and add it as `NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY`

4. **Drizzle ORM & Database Setup**

   - Create a PostgreSQL database (use services like [Supabase](https://supabase.com/) or [Neon](https://neon.tech/))
   - Get the database connection URL and add it as `NEXT_PUBLIC_DRIZZLE_DB_URL`

5. **Run Database Migrations:**

   ```sh
   npx drizzle-kit push
   ```

6. **Start the Development Server:**

   ```sh
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🖥️ Usage

### Landing Page

- Users can sign in or sign up via Clerk authentication.
- The page highlights AI-generated content features.

### Dashboard

- Users can generate content using AI models.
- Saved history of generated content.

### Billing

- Users can subscribe to premium plans using Stripe/Razorpay.

### Authentication

- Sign-in, sign-up, and logout functionalities managed via Clerk.
- Access to the dashboard is restricted to authenticated users.

## 💳 Payments (Stripe Integration)

- Users can choose between free (\$0) and premium (\$9.99) plans.
- One can add any payment gateway for the same.

## 📜 License

This project is licensed under the **MIT License**.

## 🤝 Contributing

Pull requests are welcome! If you find any issues, feel free to open an issue or contribute with a PR.

## 📬 Contact

For any queries, reach out to: **[your.email@example.com](mailto\:your.email@example.com)**

---

Happy Coding! 🚀

