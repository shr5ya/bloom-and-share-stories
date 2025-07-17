
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Phone, Star, Clock, DollarSign, Search, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Therapist {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  rating: number;
  reviewCount: number;
  distance: string;
  phone: string;
  price: string;
  availability: string;
  bio: string;
  acceptsInsurance: boolean;
}

const therapists: Therapist[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    title: "Licensed Clinical Psychologist",
    specialties: ["Depression", "Anxiety", "Trauma", "CBT"],
    rating: 4.9,
    reviewCount: 127,
    distance: "0.8 miles away",
    phone: "(555) 123-4567",
    price: "$150/session",
    availability: "Available this week",
    bio: "Dr. Johnson specializes in cognitive behavioral therapy and has over 10 years of experience helping clients overcome depression and anxiety disorders.",
    acceptsInsurance: true
  },
  {
    id: "2",
    name: "Michael Chen, LMFT",
    title: "Licensed Marriage & Family Therapist",
    specialties: ["Couples Therapy", "Family Therapy", "Communication", "Relationship Issues"],
    rating: 4.8,
    reviewCount: 89,
    distance: "1.2 miles away",
    phone: "(555) 234-5678",
    price: "$120/session",
    availability: "Next available: Monday",
    bio: "Michael focuses on helping couples and families improve communication and build stronger relationships through evidence-based therapeutic approaches.",
    acceptsInsurance: true
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    title: "Psychiatrist",
    specialties: ["Medication Management", "Bipolar Disorder", "ADHD", "Depression"],
    rating: 4.7,
    reviewCount: 203,
    distance: "2.1 miles away",
    phone: "(555) 345-6789",
    price: "$200/session",
    availability: "Available next week",
    bio: "Dr. Rodriguez is a board-certified psychiatrist who takes a holistic approach to mental health, combining medication management with therapeutic support.",
    acceptsInsurance: false
  },
  {
    id: "4",
    name: "Lisa Thompson, LCSW",
    title: "Licensed Clinical Social Worker",
    specialties: ["Trauma", "PTSD", "Grief Counseling", "EMDR"],
    rating: 4.9,
    reviewCount: 156,
    distance: "1.7 miles away",
    phone: "(555) 456-7890",
    price: "$110/session",
    availability: "Available tomorrow",
    bio: "Lisa specializes in trauma-informed care and uses EMDR therapy to help clients process traumatic experiences and develop healthy coping mechanisms.",
    acceptsInsurance: true
  }
];

const FindTherapists = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTherapists, setFilteredTherapists] = useState(therapists);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (!term.trim()) {
      setFilteredTherapists(therapists);
      return;
    }

    const filtered = therapists.filter(therapist =>
      therapist.name.toLowerCase().includes(term.toLowerCase()) ||
      therapist.title.toLowerCase().includes(term.toLowerCase()) ||
      therapist.specialties.some(specialty => 
        specialty.toLowerCase().includes(term.toLowerCase())
      )
    );
    setFilteredTherapists(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
      <Navigation />
      <div className="pt-32 px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Find Local Therapists</h1>
            <p className="text-gray-600">Connect with licensed mental health professionals in your area.</p>
          </div>

          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search by name, specialty, or type..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 bg-white/80"
              />
            </div>
          </div>

          <div className="grid gap-6">
            {filteredTherapists.map((therapist) => (
              <Card key={therapist.id} className="p-6 bg-white/60 backdrop-blur-sm border-white/30 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <Avatar className="w-20 h-20 bg-gradient-to-r from-purple-400 to-blue-400">
                      <AvatarFallback className="text-white font-semibold text-lg">
                        {therapist.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-1">{therapist.name}</h2>
                        <p className="text-gray-600 mb-2">{therapist.title}</p>
                        <div className="flex items-center mb-3">
                          <div className="flex items-center mr-4">
                            <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                            <span className="text-sm font-medium">{therapist.rating}</span>
                            <span className="text-sm text-gray-500 ml-1">({therapist.reviewCount} reviews)</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="w-4 h-4 mr-1" />
                            {therapist.distance}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-800 mb-1">{therapist.price}</div>
                        <div className="text-sm text-green-600 font-medium mb-2">{therapist.availability}</div>
                        {therapist.acceptsInsurance && (
                          <Badge className="bg-green-100 text-green-700">Accepts Insurance</Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {therapist.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-700">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{therapist.bio}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        Contact Now
                      </Button>
                      <Button variant="outline" className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Book Appointment
                      </Button>
                      <Button variant="ghost" className="text-gray-600 hover:text-gray-800">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredTherapists.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-4">No therapists found matching your search.</div>
              <Button onClick={() => handleSearch("")} variant="outline">
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindTherapists;
