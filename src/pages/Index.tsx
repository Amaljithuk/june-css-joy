import { Heart, Calendar, Users, Flag, Sparkles, ArrowRight, Rainbow, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [showFireworks, setShowFireworks] = useState(false);

  const handleFlagClick = () => {
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 3000); // Remove fireworks after 3 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 relative overflow-hidden">
      {/* Fireworks Container */}
      {showFireworks && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {/* Multiple firework bursts */}
          <div className="firework firework-1"></div>
          <div className="firework firework-2"></div>
          <div className="firework firework-3"></div>
          <div className="firework firework-4"></div>
          <div className="firework firework-5"></div>
          <div className="firework firework-6"></div>
          
          {/* Sparkle effects */}
          <div className="sparkle sparkle-1"></div>
          <div className="sparkle sparkle-2"></div>
          <div className="sparkle sparkle-3"></div>
          <div className="sparkle sparkle-4"></div>
          <div className="sparkle sparkle-5"></div>
          <div className="sparkle sparkle-6"></div>
          <div className="sparkle sparkle-7"></div>
          <div className="sparkle sparkle-8"></div>
        </div>
      )}

      {/* Floating Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-pulse opacity-70" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-r from-red-400 to-pink-500 rounded-full animate-bounce opacity-65" style={{animationDelay: '0.5s'}}></div>
        
        {/* Floating Hearts */}
        <div className="absolute top-20 left-1/2 text-pink-400 animate-bounce opacity-60" style={{animationDelay: '1.5s'}}>
          <Heart className="w-8 h-8" fill="currentColor" />
        </div>
        <div className="absolute bottom-32 right-1/4 text-purple-400 animate-pulse opacity-70" style={{animationDelay: '3s'}}>
          <Star className="w-6 h-6" fill="currentColor" />
        </div>
        <div className="absolute top-1/3 left-20 text-blue-400 animate-bounce opacity-50" style={{animationDelay: '2.5s'}}>
          <Sparkles className="w-10 h-10" />
        </div>
      </div>

      {/* Hero Section with Enhanced CSS Art */}
      <section className="relative overflow-hidden">
        {/* Enhanced Animated Pride Flag Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="pride-flag-bg h-full animate-fade-in"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Enhanced CSS Art Pride Flag with hover effects and click handler */}
            <div 
              className="pride-flag mx-auto mb-8 animate-scale-in hover:scale-110 transition-transform duration-500 cursor-pointer shadow-2xl" 
              onClick={handleFlagClick}
            ></div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent hover:from-red-500 hover:via-yellow-500 hover:to-green-500 transition-all duration-1000 cursor-pointer">
                Pride
              </span>
              <span className="text-gray-800 ml-4 hover:text-purple-600 transition-colors duration-500">Month</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed animate-fade-in hover:text-gray-900 transition-colors duration-300">
              Celebrating love, diversity, and the courage to be authentically yourself ✨
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-500 transform hover:scale-110 hover:shadow-xl animate-pulse">
                <Heart className="mr-2 h-5 w-5" />
                Learn More
              </Button>
              <Button variant="outline" className="border-2 border-purple-400 text-purple-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent px-8 py-3 rounded-full text-lg transition-all duration-500 hover:scale-105 hover:shadow-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Find Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced History Section */}
      <section className="py-20 bg-gradient-to-r from-white/80 via-pink-50/80 to-purple-50/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text hover:text-transparent transition-all duration-500 cursor-pointer">
              The History of <span className="text-purple-600">Pride</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="timeline-item group">
                  <div className="timeline-marker bg-gradient-to-r from-red-400 to-pink-400 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="timeline-content group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300 bg-gradient-to-br from-white to-red-50">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-red-600 transition-colors duration-300">1969 - Stonewall Riots</h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">The catalyst for the modern LGBTQ+ rights movement began in Greenwich Village, New York.</p>
                  </div>
                </div>
                
                <div className="timeline-item group">
                  <div className="timeline-marker bg-gradient-to-r from-orange-400 to-yellow-400 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="timeline-content group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300 bg-gradient-to-br from-white to-yellow-50">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">1970 - First Pride March</h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">The first Pride marches took place in New York, Los Angeles, and Chicago.</p>
                  </div>
                </div>
                
                <div className="timeline-item group">
                  <div className="timeline-marker bg-gradient-to-r from-green-400 to-blue-400 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="timeline-content group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300 bg-gradient-to-br from-white to-blue-50">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">1978 - Rainbow Flag</h3>
                    <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Gilbert Baker created the iconic rainbow flag as a symbol of LGBTQ+ pride and diversity.</p>
                  </div>
                </div>
              </div>
              
              <div className="rainbow-art-container">
                <div className="rainbow-heart animate-pulse hover:scale-110 transition-transform duration-500 cursor-pointer"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Pride Colors Meaning */}
      <section className="py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 hover:animate-bounce cursor-pointer">
            Colors of <span className="text-purple-600 hover:bg-gradient-to-r hover:from-red-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-500">Pride</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {[
              { color: 'from-red-400 to-red-600', meaning: 'Life', icon: Heart, hoverColor: 'hover:from-red-500 hover:to-red-700' },
              { color: 'from-orange-400 to-orange-600', meaning: 'Healing', icon: Sparkles, hoverColor: 'hover:from-orange-500 hover:to-orange-700' },
              { color: 'from-yellow-400 to-yellow-600', meaning: 'Sunlight', icon: Flag, hoverColor: 'hover:from-yellow-500 hover:to-yellow-700' },
              { color: 'from-green-400 to-green-600', meaning: 'Nature', icon: Users, hoverColor: 'hover:from-green-500 hover:to-green-700' },
              { color: 'from-blue-400 to-blue-600', meaning: 'Harmony', icon: Rainbow, hoverColor: 'hover:from-blue-500 hover:to-blue-700' },
              { color: 'from-purple-400 to-purple-600', meaning: 'Spirit', icon: Sparkles, hoverColor: 'hover:from-purple-500 hover:to-purple-700' }
            ].map((item, index) => (
              <Card key={index} className="group hover:scale-110 transition-all duration-500 cursor-pointer border-0 shadow-lg hover:shadow-2xl hover:rotate-3">
                <CardContent className="p-6 text-center bg-gradient-to-br from-white to-gray-50 group-hover:from-white group-hover:to-purple-50">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.color} ${item.hoverColor} flex items-center justify-center group-hover:animate-spin transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">{item.meaning}</h3>
                  <div className={`h-2 rounded-full bg-gradient-to-r ${item.color} ${item.hoverColor} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Community Section */}
      <section className="py-20 bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800 hover:animate-pulse cursor-pointer">
              Join the <span className="text-purple-600 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-500">Community</span>
            </h2>
            
            <p className="text-xl text-gray-700 mb-12 leading-relaxed hover:text-gray-900 transition-colors duration-300">
              Pride Month is about celebrating diversity, promoting equality, and supporting the LGBTQ+ community. 
              Every person deserves to love and be loved, to be accepted for who they are, and to live authentically. 🏳️‍🌈
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="group hover:scale-110 transition-all duration-500 bg-gradient-to-br from-white/90 to-pink-50/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl hover:-rotate-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:from-pink-500 group-hover:to-purple-500 rounded-full flex items-center justify-center group-hover:animate-bounce shadow-lg">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors duration-300">Love Wins</h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Celebrating love in all its beautiful forms</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:scale-110 transition-all duration-500 bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:from-blue-500 group-hover:to-cyan-500 rounded-full flex items-center justify-center group-hover:animate-pulse shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Unity</h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Building bridges and fostering understanding</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:scale-110 transition-all duration-500 bg-gradient-to-br from-white/90 to-yellow-50/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl hover:rotate-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:from-yellow-500 group-hover:to-orange-500 rounded-full flex items-center justify-center group-hover:animate-spin shadow-lg">
                    <Flag className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">Pride</h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Standing tall and proud of who you are</p>
                </CardContent>
              </Card>
            </div>
            
            <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 hover:shadow-2xl text-white px-12 py-4 rounded-full text-lg transition-all duration-500 transform hover:scale-110 shadow-lg animate-pulse hover:animate-bounce">
              <span>Get Involved</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-purple-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="pride-flag-small mx-auto mb-6 hover:scale-125 transition-transform duration-300 cursor-pointer"></div>
          <p className="text-lg mb-4 hover:text-pink-300 transition-colors duration-300 cursor-pointer">🏳️‍🌈 Love is Love 🏳️‍🌈</p>
          <p className="text-gray-400 hover:text-gray-200 transition-colors duration-300">Celebrating Pride Month with love, respect, and solidarity</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
