
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Users, Calendar, MessageCircle, Heart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface SupportGroup {
  id: string;
  name: string;
  description: string;
  type: "online" | "in-person";
  location: string;
  schedule: string;
  memberCount: number;
  category: string;
  moderator: string;
  nextMeeting: string;
  isJoined: boolean;
}

interface Person {
  id: string;
  name: string;
  age: number;
  interests: string[];
  bio: string;
  distance: string;
  isOnline: boolean;
  lookingFor: string[];
}

const supportGroups: SupportGroup[] = [
  {
    id: "1",
    name: "Anxiety Support Circle",
    description: "A safe space for those dealing with anxiety disorders to share experiences and coping strategies.",
    type: "in-person",
    location: "Community Center, Downtown",
    schedule: "Tuesdays 7:00 PM",
    memberCount: 24,
    category: "Anxiety",
    moderator: "Dr. Sarah Kim",
    nextMeeting: "Today at 7:00 PM",
    isJoined: false
  },
  {
    id: "2",
    name: "Depression Warriors",
    description: "Online support group for individuals battling depression. We meet weekly for virtual check-ins and mutual support.",
    type: "online",
    location: "Virtual (Zoom)",
    schedule: "Thursdays 6:00 PM",
    memberCount: 47,
    category: "Depression",
    moderator: "Mike Rodriguez, LCSW",
    nextMeeting: "Tomorrow at 6:00 PM",
    isJoined: true
  },
  {
    id: "3",
    name: "Young Adults Mental Health",
    description: "For people aged 18-30 navigating mental health challenges while building their careers and relationships.",
    type: "in-person",
    location: "Library Conference Room",
    schedule: "Saturdays 2:00 PM",
    memberCount: 18,
    category: "Young Adults",
    moderator: "Emma Thompson",
    nextMeeting: "This Saturday at 2:00 PM",
    isJoined: false
  },
  {
    id: "4",
    name: "Mindfulness & Meditation",
    description: "Learn and practice mindfulness techniques together. Suitable for all levels, from beginners to experienced practitioners.",
    type: "online",
    location: "Virtual (Discord)",
    schedule: "Daily 8:00 AM",
    memberCount: 156,
    category: "Mindfulness",
    moderator: "Dr. James Chen",
    nextMeeting: "Tomorrow at 8:00 AM",
    isJoined: true
  }
];

const people: Person[] = [
  {
    id: "1",
    name: "Alex M.",
    age: 28,
    interests: ["Reading", "Hiking", "Cooking", "Mental Health Advocacy"],
    bio: "Looking to connect with others who understand the journey. Love discussing books and trying new recipes!",
    distance: "2.3 miles away",
    isOnline: true,
    lookingFor: ["Friendship", "Study Buddy", "Workout Partner"]
  },
  {
    id: "2",
    name: "Jordan K.",
    age: 24,
    interests: ["Art", "Music", "Yoga", "Photography"],
    bio: "Artist dealing with anxiety. Would love to find creative friends to collaborate and support each other.",
    distance: "1.8 miles away",
    isOnline: false,
    lookingFor: ["Creative Partner", "Friendship", "Art Buddy"]
  },
  {
    id: "3",
    name: "Sam R.",
    age: 32,
    interests: ["Gaming", "Tech", "Meditation", "Board Games"],
    bio: "Software developer who's learning to balance work and mental health. Always up for a good board game session!",
    distance: "3.1 miles away",
    isOnline: true,
    lookingFor: ["Gaming Buddy", "Friendship", "Study Group"]
  }
];

const MeetPeople = () => {
  const [activeTab, setActiveTab] = useState<"groups" | "people">("groups");
  const [groups, setGroups] = useState(supportGroups);

  const handleJoinGroup = (groupId: string) => {
    setGroups(groups.map(group =>
      group.id === groupId
        ? { ...group, isJoined: !group.isJoined, memberCount: group.isJoined ? group.memberCount - 1 : group.memberCount + 1 }
        : group
    ));
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
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Meet People & Join Groups</h1>
            <p className="text-gray-600">Connect with others on similar journeys and join supportive communities.</p>
          </div>

          <div className="mb-8">
            <div className="flex space-x-1 bg-white/40 backdrop-blur-sm p-1 rounded-lg border border-white/30 w-fit">
              <button
                onClick={() => setActiveTab("groups")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === "groups"
                    ? "bg-white text-gray-800 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Support Groups
              </button>
              <button
                onClick={() => setActiveTab("people")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === "people"
                    ? "bg-white text-gray-800 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Meet People
              </button>
            </div>
          </div>

          {activeTab === "groups" && (
            <div className="grid gap-6">
              {groups.map((group) => (
                <Card key={group.id} className="p-6 bg-white/60 backdrop-blur-sm border-white/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col lg:flex-row justify-between">
                    <div className="flex-1 mb-4 lg:mb-0">
                      <div className="flex items-center mb-3">
                        <h2 className="text-xl font-bold text-gray-800 mr-3">{group.name}</h2>
                        <Badge className={group.type === "online" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}>
                          {group.type === "online" ? "Online" : "In-Person"}
                        </Badge>
                        {group.isJoined && (
                          <Badge className="bg-purple-100 text-purple-700 ml-2">Joined</Badge>
                        )}
                      </div>
                      
                      <p className="text-gray-700 mb-4">{group.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          {group.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          {group.schedule}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          {group.memberCount} members
                        </div>
                        <div className="text-sm text-gray-600">
                          <strong>Next:</strong> {group.nextMeeting}
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600">
                        <strong>Moderated by:</strong> {group.moderator}
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-between lg:ml-6">
                      <Badge variant="secondary" className="mb-4 w-fit">
                        {group.category}
                      </Badge>
                      <Button
                        onClick={() => handleJoinGroup(group.id)}
                        className={group.isJoined 
                          ? "bg-gray-500 hover:bg-gray-600" 
                          : "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                        }
                      >
                        {group.isJoined ? "Leave Group" : "Join Group"}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {activeTab === "people" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {people.map((person) => (
                <Card key={person.id} className="p-6 bg-white/60 backdrop-blur-sm border-white/30 hover:shadow-lg transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="relative mb-3">
                      <Avatar className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-400 to-blue-400">
                        <AvatarFallback className="text-white font-semibold text-lg">
                          {person.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      {person.isOnline && (
                        <div className="absolute bottom-0 right-1/2 transform translate-x-6 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{person.name}</h3>
                    <p className="text-sm text-gray-600">{person.age} years old</p>
                    <div className="flex items-center justify-center text-sm text-gray-500 mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {person.distance}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-4 text-center">{person.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Interests:</h4>
                    <div className="flex flex-wrap gap-1">
                      {person.interests.map((interest, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-purple-100 text-purple-700">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Looking for:</h4>
                    <div className="flex flex-wrap gap-1">
                      {person.lookingFor.map((item, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      Message
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Heart className="w-3 h-3 mr-1" />
                      Connect
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeetPeople;
