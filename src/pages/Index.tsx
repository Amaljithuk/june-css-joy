
import { Heart, Calendar, Users, Flag, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100">
      {/* Hero Section with CSS Art */}
      <section className="relative overflow-hidden">
        {/* Animated Pride Flag Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="pride-flag-bg h-full animate-fade-in"></div>
        </div>
        
        {/* Floating Pride Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-32 right-20 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse opacity-50"></div>
        
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* CSS Art Pride Flag */}
            <div className="pride-flag mx-auto mb-8 animate-scale-in"></div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Pride
              </span>
              <span className="text-gray-800 ml-4">Month</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed animate-fade-in">
              Celebrating love, diversity, and the courage to be authentically yourself
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                <Heart className="mr-2 h-5 w-5" />
                Learn More
              </Button>
              <Button variant="outline" className="border-2 border-purple-400 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full text-lg transition-all duration-300">
                <Calendar className="mr-2 h-5 w-5" />
                Find Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              The History of <span className="text-purple-600">Pride</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="timeline-item">
                  <div className="timeline-marker bg-gradient-to-r from-red-400 to-pink-400"></div>
                  <div className="timeline-content">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">1969 - Stonewall Riots</h3>
                    <p className="text-gray-600">The catalyst for the modern LGBTQ+ rights movement began in Greenwich Village, New York.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-marker bg-gradient-to-r from-orange-400 to-yellow-400"></div>
                  <div className="timeline-content">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">1970 - First Pride March</h3>
                    <p className="text-gray-600">The first Pride marches took place in New York, Los Angeles, and Chicago.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-marker bg-gradient-to-r from-green-400 to-blue-400"></div>
                  <div className="timeline-content">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">1978 - Rainbow Flag</h3>
                    <p className="text-gray-600">Gilbert Baker created the iconic rainbow flag as a symbol of LGBTQ+ pride and diversity.</p>
                  </div>
                </div>
              </div>
              
              <div className="rainbow-art-container">
                <div className="rainbow-heart animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pride Colors Meaning */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Colors of <span className="text-purple-600">Pride</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {[
              { color: 'from-red-400 to-red-600', meaning: 'Life', icon: Heart },
              { color: 'from-orange-400 to-orange-600', meaning: 'Healing', icon: Sparkles },
              { color: 'from-yellow-400 to-yellow-600', meaning: 'Sunlight', icon: Flag },
              { color: 'from-green-400 to-green-600', meaning: 'Nature', icon: Users },
              { color: 'from-blue-400 to-blue-600', meaning: 'Harmony', icon: Heart },
              { color: 'from-purple-400 to-purple-600', meaning: 'Spirit', icon: Sparkles }
            ].map((item, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 cursor-pointer border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:animate-pulse`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.meaning}</h3>
                  <div className={`h-2 rounded-full bg-gradient-to-r ${item.color} opacity-60`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              Join the <span className="text-purple-600">Community</span>
            </h2>
            
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Pride Month is about celebrating diversity, promoting equality, and supporting the LGBTQ+ community. 
              Every person deserves to love and be loved, to be accepted for who they are, and to live authentically.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="group hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Love Wins</h3>
                  <p className="text-gray-600">Celebrating love in all its beautiful forms</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Unity</h3>
                  <p className="text-gray-600">Building bridges and fostering understanding</p>
                </CardContent>
              </Card>
              
              <Card className="group hover:scale-105 transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <Flag className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Pride</h3>
                  <p className="text-gray-600">Standing tall and proud of who you are</p>
                </CardContent>
              </Card>
            </div>
            
            <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-12 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span>Get Involved</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="pride-flag-small mx-auto mb-6"></div>
          <p className="text-lg mb-4">🏳️‍🌈 Love is Love 🏳️‍🌈</p>
          <p className="text-gray-400">Celebrating Pride Month with love, respect, and solidarity</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
