import Link from 'next/link';

// You can add global styles if you want a basic background, e.g., in src/app/globals.css
// or use Tailwind CSS utilities directly in the JSX.

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white flex flex-col items-center justify-center p-8 text-center font-sans">
      <h1 className="text-6xl font-extrabold mb-8 animate-pulse-slow text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        Agentify: Mission Briefing!
      </h1>

      <p className="text-2xl mb-12 max-w-3xl leading-relaxed">
        Alright, Agent team! We've got 15 working days to bring Agentify to life. The AI brain is stirring, but it needs *your* genius to truly shine. Each of you has a critical role in this epic quest!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {/* Aleena - Frontend */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300">
          <h2 className="text-3xl font-bold mb-3 text-pink-400">Aleena, The Pixel Perfect Sorceress (Frontend)</h2>
          <p className="text-lg leading-relaxed">
            Your mission, should you choose to accept it, is to craft the sleekest, most intuitive UI this side of the metaverse. Every button, every card, every animation—it's all on your magic fingers. Make it so beautiful, users will forget how hard coding problems are!
          </p>
        </div>

        {/* Javeria - Frontend */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300">
          <h2 className="text-3xl font-bold mb-3 text-sky-400">Javeria, The UX Architect (Frontend)</h2>
          <p className="text-lg leading-relaxed">
            From splash screen to profile, you're the master of the user journey. Every click, every flow, every delightful interaction is your domain. Design the path, build the bridges, and make Agentify so smooth, it feels like flying through code!
          </p>
        </div>

        {/* Babar - Backend */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-green-500/30 hover:shadow-green-500/50 transition-all duration-300">
          <h2 className="text-3xl font-bold mb-3 text-emerald-400">Babar, The Code Alchemist (Backend)</h2>
          <p className="text-lg leading-relaxed">
            Your quest involves crafting the robust APIs, secure authentication, and the very backbone of Agentify. The frontend's beauty rests on your unbreakable foundations. Remember, no bugs allowed in the kingdom you build!
          </p>
        </div>

        {/* Arsalan - Backend */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300">
          <h2 className="text-3xl font-bold mb-3 text-amber-400">Arsalan, The Data Guardian (Backend)</h2>
          <p className="text-lg leading-relaxed">
            From database schemas to payment integrations, you're the gatekeeper of all critical data. Security, speed, and seamless transactions are your watchwords. Ensure our premium playlists flow effortlessly, and every user's streak is meticulously recorded!
          </p>
        </div>

        {/* Gopi - Data Engineer/Collector */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-red-500/30 hover:shadow-red-500/50 transition-all duration-300">
          <h2 className="text-3xl font-bold mb-3 text-red-400">Gopi, The AI Whisperer (Data Engineer/Collector)</h2>
          <p className="text-lg leading-relaxed">
            You're the brains behind the *real* brains! Feed our AI the finest data, sculpt its algorithms, and ensure the personalized challenges are truly intelligent. The more data you gather, the smarter Agentify becomes! Don't let the AI go hungry!
          </p>
        </div>
      </div>

      <p className="text-xl mt-16 max-w-3xl leading-relaxed">
        Let's make Agentify not just a project, but a legend. **15 working days!** You've got this, team! 🚀
      </p>

      {/* Optional: Add a link to the dashboard once it's built */}
      {/* <Link href="/dashboard" className="mt-10 px-8 py-4 bg-green-500 hover:bg-green-600 text-white text-xl font-bold rounded-full shadow-lg transition-all duration-300">
        Start the Mission!
      </Link> */}
    </div>
  );
}

// Basic CSS for the pulse animation if you don't have it globally
// Add this to your src/app/globals.css file if you want the animation
/*
@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

.animate-pulse-slow {
  animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
*/