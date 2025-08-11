
import React, { useState } from "react";
import { getTop3Services} from "./utilis";
import type { Service } from "./utilis";
import { Trophy, Sparkles, Zap, Heart } from "lucide-react";

const defaultServices: Service[] = [
  { name: "Tutoring", rating: 4.6 },
  { name: "Food Delivery", rating: 4.9 },
  { name: "Tech Support", rating: 4.3 },
  { name: "Child Care", rating: 4.8 },
];

const Task: React.FC = () => {
  const [services, setServices] = useState<Service[]>(defaultServices);
  const [newService, setNewService] = useState<Service>({
    name: "",
    rating: 4.5,
  });
  const [isShaking, setIsShaking] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);
  const [revealStep, setRevealStep] = useState(0);

  // Core logic: get top 3 using utility function
  const results = getTop3Services(services);

  // Add a new service if name is not empty
  const addService = () => {
    if (newService.name.trim()) {
      setServices([...services, newService]);
      setNewService({ name: "", rating: 4.5 });
      // Fun shake animation on button
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 600);
    }
  };

  // Dramatic countdown reveal of winners
  const revealWinners = async () => {
    setIsRevealing(true);
    setShowResults(false);
    setRevealStep(0);

    for (let i = 3; i >= 1; i--) {
      setRevealStep(i);
      await new Promise((r) => setTimeout(r, 1000));
    }

    setRevealStep(0);
    await new Promise((r) => setTimeout(r, 500));
    setShowResults(true);
    setIsRevealing(false);
  };

  // Reset services and hide results
  const clearAll = () => {
    setServices(defaultServices);
    setShowResults(false);
    setIsRevealing(false);
    setRevealStep(0);
  };

  // Reset results display
  const resetResults = () => {
    setShowResults(false);
    setIsRevealing(false);
    setRevealStep(0);
  };

  // Generate a random rating between 3.0 and 5.0
  const getRandomRating = () => {
    const randomRating = (Math.random() * 2 + 3).toFixed(1);
    setNewService({ ...newService, rating: parseFloat(randomRating) });
  };

  // Medal emojis for top 3
  const getMedal = (index: number) => {
    const medals = ["🥇", "🥈", "🥉"];
    return medals[index] || "🏅";
  };

  // Stars representation of rating, with sparkle for .5+
  const getStars = (rating: number) => {
    return "⭐".repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? "✨" : "");
  };

  // Fun vibe colors and emojis based on rating
  const getVibes = (rating: number) => {
    if (rating >= 4.8)
      return { bg: "bg-yellow-400", text: "Amazing!", emoji: "🔥" };
    if (rating >= 4.5)
      return { bg: "bg-green-400", text: "Great!", emoji: "👌" };
    if (rating >= 4.0) return { bg: "bg-blue-400", text: "Good", emoji: "👍" };
    return { bg: "bg-gray-400", text: "Meh", emoji: "😐" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-black text-white mb-4 drop-shadow-lg">
            🏆 TOP 3 FINDER 🏆
          </h1>
          <p className="text-xl text-white/90 font-medium">
            Find the best services with style! ✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Add services + current services */}

          <div className="space-y-6">
            {/* Add Service */}

            <div className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Sparkles className="text-pink-500" />
                Add Your Service
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Service name (e.g., Pizza Delivery)"
                  value={newService.name}
                  onChange={(e) =>
                    setNewService({ ...newService, name: e.target.value })
                  }
                  className="w-full p-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 text-lg font-medium"
                />

                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Rating: {newService.rating} {getStars(newService.rating)}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      step="0.1"
                      value={newService.rating}
                      onChange={(e) =>
                        setNewService({
                          ...newService,
                          rating: parseFloat(e.target.value),
                        })
                      }
                      className="w-full h-3 bg-purple-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                  <button
                    onClick={getRandomRating}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-xl transition-all transform hover:scale-105"
                  >
                    🎲 Random
                  </button>
                </div>

                <button
                  onClick={addService}
                  className={`w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg ${
                    isShaking ? "animate-shake" : ""
                  }`}
                >
                  Add Service! 🚀
                </button>
              </div>
            </div>

            {/* Current Services */}
            <div className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Heart className="text-red-500" />
                  Your Services ({services.length})
                </h2>
                <button
                  onClick={clearAll}
                  className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors"
                >
                  Reset
                </button>
              </div>

              <div className="space-y-3 max-h-80 overflow-y-auto">
                {services.map((service, index) => {
                  const vibe = getVibes(service.rating);
                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div>
                        <span className="font-bold text-gray-800">
                          {service.name}
                        </span>
                        <div className="text-sm text-gray-600">
                          {getStars(service.rating)}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold">
                          {service.rating}
                        </span>
                        <span className="text-lg">{vibe.emoji}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Results and reveal */}
          <div className="space-y-6">
            {!showResults && !isRevealing && (
              <div className="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-2xl text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Ready to see the winners? 🎭
                </h2>
                <p className="text-gray-600 mb-6">
                  Click the button below for a dramatic reveal!
                </p>
                <button
                  onClick={revealWinners}
                  disabled={services.length === 0}
                  className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 hover:from-red-600 hover:via-yellow-600 hover:to-green-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-black py-4 px-8 rounded-full text-xl transition-all transform hover:scale-110 shadow-2xl disabled:cursor-not-allowed"
                >
                  🎪 REVEAL THE TOP 3! 🎪
                </button>
              </div>
            )}

            {isRevealing && (
              <div className="bg-black text-white rounded-2xl p-12 shadow-2xl text-center">
                {revealStep > 0 ? (
                  <div className="animate-pulse">
                    <h2 className="text-6xl font-black mb-4">⏰</h2>
                    <div className="text-8xl font-black text-yellow-400 mb-4 animate-bounce">
                      {revealStep}
                    </div>
                    <p className="text-2xl font-bold">Getting ready...</p>
                  </div>
                ) : (
                  <div className="animate-spin">
                    <div className="text-6xl mb-4">🎪</div>
                    <p className="text-3xl font-bold text-yellow-400">
                      ✨ DRUMROLL PLEASE... ✨
                    </p>
                  </div>
                )}
              </div>
            )}

            {showResults && (
              <div className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-2xl animate-fadeIn">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                    <Trophy className="text-yellow-500" />
                    🏆 TOP 3 WINNERS! 🏆
                  </h2>
                  <button
                    onClick={resetResults}
                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors"
                  >
                    Hide Results
                  </button>
                </div>

                <div className="space-y-4">
                  {results.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl border-2 border-yellow-300 shadow-md hover:shadow-lg transition-all animate-slideIn"
                      style={{ animationDelay: `${index * 300}ms` }}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className="text-4xl animate-bounce"
                          style={{ animationDelay: `${index * 150}ms` }}
                        >
                          {getMedal(index)}
                        </span>
                        <div>
                          <div className="font-bold text-xl text-gray-800">
                            {service.name}
                          </div>
                          <div className="text-yellow-600 font-medium">
                            Rank #{index + 1}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-black text-gray-800">
                          {service.rating}
                        </div>
                        <div className="text-lg">
                          {getStars(service.rating)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-6">
                  <div className="text-4xl animate-pulse">🎉 🎊 🎉 🎊 🎉</div>
                  <p className="text-lg font-bold text-gray-700 mt-2">
                    Congratulations to our winners!
                  </p>
                </div>
              </div>
            )}

            {/* Expected JSON output */}
            {showResults && (
              <div className="bg-gray-900 text-green-400 rounded-2xl p-6 shadow-2xl animate-fadeIn">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Zap className="text-yellow-400" />
                  Expected JSON Output:
                </h3>
                <pre className="text-sm overflow-x-auto bg-black/50 p-4 rounded-lg">
                  {JSON.stringify(results, null, 2)}
                </pre>
              </div>
            )}

            {/* Fun Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-500 text-white p-4 rounded-xl text-center shadow-lg">
                <div className="text-2xl font-bold">
                  {(
                    services.reduce((sum, s) => sum + s.rating, 0) /
                    services.length
                  ).toFixed(1)}
                </div>
                <div className="text-sm font-medium">Avg Rating</div>
              </div>
              <div className="bg-green-500 text-white p-4 rounded-xl text-center shadow-lg">
                <div className="text-2xl font-bold">
                  {services.filter((s) => s.rating >= 4.5).length}
                </div>
                <div className="text-sm font-medium">Premium (4.5+)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-white/80 text-lg font-medium">
            🎉 Keep adding services to see the magic! 🎉
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
