
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2, Plus, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Story {
  id: string;
  title: string;
  content: string;
  author: string;
  likes: number;
  comments: number;
  tags: string[];
  timestamp: Date;
  isLiked: boolean;
}

const initialStories: Story[] = [
  {
    id: "1",
    title: "Finding Hope After My Darkest Days",
    content: "Six months ago, I couldn't see any light at the end of the tunnel. Depression had consumed every aspect of my life. But with therapy, medication, and the support of this amazing community, I'm finally starting to feel like myself again. To anyone struggling: please don't give up. There is hope, and you are not alone.",
    author: "Sarah M.",
    likes: 42,
    comments: 8,
    tags: ["Recovery", "Hope", "Depression"],
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    isLiked: false
  },
  {
    id: "2",
    title: "The Power of Small Steps",
    content: "I used to think I needed to make huge changes to get better. But I've learned that mental health recovery is about small, consistent steps. Today I made my bed, took a shower, and called a friend. These might seem tiny to others, but they're huge victories for me.",
    author: "Mike R.",
    likes: 28,
    comments: 12,
    tags: ["Progress", "Self-care", "Motivation"],
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    isLiked: true
  },
  {
    id: "3",
    title: "Therapy Changed My Life",
    content: "For years, I was hesitant to seek professional help. I thought I should be able to handle everything on my own. Starting therapy was the best decision I ever made. My therapist gave me tools to manage my anxiety and helped me understand my thought patterns.",
    author: "Elena K.",
    likes: 35,
    comments: 6,
    tags: ["Therapy", "Anxiety", "Professional Help"],
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    isLiked: false
  }
];

const Community = () => {
  const [stories, setStories] = useState<Story[]>(initialStories);
  const [showForm, setShowForm] = useState(false);
  const [newStory, setNewStory] = useState({ title: "", content: "", tags: "" });

  const handleLike = (storyId: string) => {
    setStories(stories.map(story =>
      story.id === storyId
        ? {
            ...story,
            likes: story.isLiked ? story.likes - 1 : story.likes + 1,
            isLiked: !story.isLiked
          }
        : story
    ));
  };

  const handleSubmitStory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStory.title.trim() || !newStory.content.trim()) return;

    const story: Story = {
      id: Date.now().toString(),
      title: newStory.title,
      content: newStory.content,
      author: "Anonymous",
      likes: 0,
      comments: 0,
      tags: newStory.tags.split(",").map(tag => tag.trim()).filter(Boolean),
      timestamp: new Date(),
      isLiked: false
    };

    setStories([story, ...stories]);
    setNewStory({ title: "", content: "", tags: "" });
    setShowForm(false);
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} days ago`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
      <Navigation />
      <div className="pt-32 px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Community Stories</h1>
                <p className="text-gray-600">Share your journey and find inspiration from others in our supportive community.</p>
              </div>
              <Button
                onClick={() => setShowForm(!showForm)}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              >
                <Plus className="w-4 h-4 mr-2" />
                Share Your Story
              </Button>
            </div>
          </div>

          {showForm && (
            <Card className="p-6 mb-8 bg-white/60 backdrop-blur-sm border-white/30">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Share Your Story</h3>
              <form onSubmit={handleSubmitStory} className="space-y-4">
                <Input
                  placeholder="Story title..."
                  value={newStory.title}
                  onChange={(e) => setNewStory({ ...newStory, title: e.target.value })}
                  className="bg-white/80"
                />
                <Textarea
                  placeholder="Share your experience, insights, or words of encouragement..."
                  value={newStory.content}
                  onChange={(e) => setNewStory({ ...newStory, content: e.target.value })}
                  rows={5}
                  className="bg-white/80"
                />
                <Input
                  placeholder="Tags (comma-separated, e.g., recovery, hope, therapy)"
                  value={newStory.tags}
                  onChange={(e) => setNewStory({ ...newStory, tags: e.target.value })}
                  className="bg-white/80"
                />
                <div className="flex gap-2">
                  <Button type="submit" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    Share Story
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </Card>
          )}

          <div className="space-y-6">
            {stories.map((story) => (
              <Card key={story.id} className="p-6 bg-white/60 backdrop-blur-sm border-white/30 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400">
                    <AvatarFallback className="text-white font-semibold">
                      {story.author.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-800">{story.author}</h3>
                        <p className="text-sm text-gray-500">{formatTimeAgo(story.timestamp)}</p>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-800 mb-3">{story.title}</h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">{story.content}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {story.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-6 pt-4 border-t border-gray-200/50">
                      <button
                        onClick={() => handleLike(story.id)}
                        className={`flex items-center space-x-2 text-sm transition-colors duration-200 ${
                          story.isLiked ? "text-red-500" : "text-gray-500 hover:text-red-500"
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${story.isLiked ? "fill-current" : ""}`} />
                        <span>{story.likes}</span>
                      </button>
                      
                      <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-blue-500 transition-colors duration-200">
                        <MessageCircle className="w-4 h-4" />
                        <span>{story.comments}</span>
                      </button>
                      
                      <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-green-500 transition-colors duration-200">
                        <Share2 className="w-4 h-4" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
