import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MessageCircle, Users, FileText, Heart, Brain, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          {/* Floating elements with entrance animations */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top left elements */}
            <div className="absolute top-8 left-16 text-5xl animate-[slideInLeft_1.5s_ease-out_0.5s_both] opacity-0">
              💖
            </div>
            <div className="absolute top-20 left-8 text-3xl animate-[slideInLeft_1.8s_ease-out_0.8s_both] opacity-0">
              ✨
            </div>
            <div className="absolute top-32 left-24 text-4xl animate-[slideInLeft_2s_ease-out_1s_both] opacity-0">
              🌟
            </div>
            
            {/* Top right elements */}
            <div className="absolute top-12 right-20 text-4xl animate-[slideInRight_1.6s_ease-out_0.6s_both] opacity-0">
              🧠
            </div>
            <div className="absolute top-28 right-12 text-3xl animate-[slideInRight_1.9s_ease-out_0.9s_both] opacity-0">
              💬
            </div>
            <div className="absolute top-6 right-32 text-5xl animate-[slideInRight_2.2s_ease-out_1.2s_both] opacity-0">
              🎯
            </div>
            
            {/* Bottom left elements */}
            <div className="absolute bottom-16 left-12 text-4xl animate-[slideInLeft_2.3s_ease-out_1.3s_both] opacity-0">
              🌈
            </div>
            <div className="absolute bottom-32 left-28 text-3xl animate-[slideInLeft_2.1s_ease-out_1.1s_both] opacity-0">
              ⭐
            </div>
            
            {/* Bottom right elements */}
            <div className="absolute bottom-20 right-16 text-4xl animate-[slideInRight_2.4s_ease-out_1.4s_both] opacity-0">
              🌸
            </div>
            <div className="absolute bottom-8 right-28 text-3xl animate-[slideInRight_2.6s_ease-out_1.6s_both] opacity-0">
              💫
            </div>
            
            {/* Additional scattered elements */}
            <div className="absolute top-40 left-1/4 text-2xl animate-[slideInTop_2.8s_ease-out_1.8s_both] opacity-0">
              🦋
            </div>
            <div className="absolute top-48 right-1/4 text-2xl animate-[slideInTop_3s_ease-out_2s_both] opacity-0">
              🌺
            </div>
            <div className="absolute bottom-40 left-1/3 text-2xl animate-[slideInBottom_2.5s_ease-out_1.5s_both] opacity-0">
              🎈
            </div>
            <div className="absolute bottom-48 right-1/3 text-2xl animate-[slideInBottom_2.7s_ease-out_1.7s_both] opacity-0">
              🌻
            </div>
          </div>

          {/* Central content */}
          <div className="relative z-10">
            {/* Girl image container */}
            <div className="mb-8 relative flex justify-center items-center">
              <div className="relative animate-[fadeInScale_1.2s_ease-out_0.3s_both] opacity-0">
                <img 
                  src="https://i.pinimg.com/736x/25/13/9d/25139df84da0c2370a81eec2626d0276.jpg" 
                  alt="Mental Health Support" 
                  className="w-80 h-96 object-cover rounded-3xl shadow-2xl"
                />
                {/* Glow effect around image */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400/20 to-blue-400/20 blur-xl -z-10 scale-110"></div>
              </div>
            </div>
            
            {/* Main heading */}
            <div className="animate-[slideInUp_1s_ease-out_0.8s_both] opacity-0">
              <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                Mental Health
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Awareness
                </span>
              </h1>
            </div>
          </div>
          
          {/* Encouraging message bubble */}
          <div className="relative z-10 animate-[bounceIn_1.2s_ease-out_1.5s_both] opacity-0">
            <div className="bg-purple-200/60 backdrop-blur-sm rounded-2xl p-4 mb-8 max-w-xs mx-auto border border-purple-300/30">
              <p className="text-gray-700 font-medium text-lg">You got this!</p>
            </div>
          </div>
          
          {/* Description */}
          <div className="animate-[slideInUp_1s_ease-out_1.8s_both] opacity-0">
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Your mental health journey matters. Find support, connect with others, and access resources designed to help you thrive.
            </p>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link to="/depression-test">
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/40 backdrop-blur-sm border-white/30 cursor-pointer group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Take a Test</h3>
                <p className="text-gray-600">Assess your mental health with our professional screening tools</p>
              </Card>
            </Link>

            <Link to="/chatbot">
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/40 backdrop-blur-sm border-white/30 cursor-pointer group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Talk to Someone</h3>
                <p className="text-gray-600">Chat with our AI companion for immediate support and guidance</p>
              </Card>
            </Link>

            <Link to="/community">
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/40 backdrop-blur-sm border-white/30 cursor-pointer group">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Read Stories</h3>
                <p className="text-gray-600">Share your journey and read inspiring stories from our community</p>
              </Card>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/find-therapists">
              <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/40 backdrop-blur-sm border-white/30 cursor-pointer group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Find Local Therapists</h3>
                </div>
                <p className="text-gray-600">Connect with licensed mental health professionals in your area</p>
              </Card>
            </Link>

            <Link to="/meet-people">
              <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/40 backdrop-blur-sm border-white/30 cursor-pointer group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Meet People Around You</h3>
                </div>
                <p className="text-gray-600">Join support groups and connect with others on similar journeys</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 pb-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl p-8 text-white">
            <Sparkles className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">You're Not Alone</h2>
            <p className="text-lg mb-6 opacity-90">Take the first step towards better mental health today.</p>
            <Link to="/depression-test">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
