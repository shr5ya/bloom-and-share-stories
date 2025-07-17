
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const questions = [
  "Over the past two weeks, how often have you felt down, depressed, or hopeless?",
  "How often have you had little interest or pleasure in doing things?",
  "How often have you had trouble falling or staying asleep, or sleeping too much?",
  "How often have you felt tired or had little energy?",
  "How often have you had poor appetite or been overeating?",
  "How often have you felt bad about yourself or that you are a failure?",
  "How often have you had trouble concentrating on things?",
  "How often have you moved or spoken so slowly that others noticed?",
  "How often have you had thoughts that you would be better off dead?"
];

const options = [
  { value: "0", label: "Not at all" },
  { value: "1", label: "Several days" },
  { value: "2", label: "More than half the days" },
  { value: "3", label: "Nearly every day" }
];

const DepressionTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(""));
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return answers.reduce((sum, answer) => sum + parseInt(answer || "0"), 0);
  };

  const getResultMessage = (score: number) => {
    if (score <= 4) return { level: "Minimal", message: "You show minimal signs of depression. Keep taking care of yourself!", color: "text-green-600" };
    if (score <= 9) return { level: "Mild", message: "You may be experiencing mild depression. Consider talking to someone.", color: "text-yellow-600" };
    if (score <= 14) return { level: "Moderate", message: "You may be experiencing moderate depression. We recommend seeking professional help.", color: "text-orange-600" };
    if (score <= 19) return { level: "Moderately Severe", message: "You may be experiencing moderately severe depression. Please consider professional support.", color: "text-red-500" };
    return { level: "Severe", message: "You may be experiencing severe depression. Please seek professional help immediately.", color: "text-red-700" };
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const score = calculateScore();
    const result = getResultMessage(score);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
        <Navigation />
        <div className="pt-32 px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-white/60 backdrop-blur-sm border-white/30">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Results</h1>
                <div className="text-6xl font-bold mb-4">
                  <span className={result.color}>{score}</span>
                  <span className="text-gray-400 text-2xl">/27</span>
                </div>
                <div className={`text-xl font-semibold mb-2 ${result.color}`}>
                  {result.level} Depression
                </div>
                <p className="text-gray-600 mb-8">{result.message}</p>
              </div>
              
              <div className="space-y-4">
                <Link to="/find-therapists">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    Find Professional Help
                  </Button>
                </Link>
                <Link to="/chatbot">
                  <Button variant="outline" className="w-full">
                    Talk to Our Support Bot
                  </Button>
                </Link>
                <Link to="/community">
                  <Button variant="outline" className="w-full">
                    Join Our Community
                  </Button>
                </Link>
              </div>
              
              <p className="text-sm text-gray-500 mt-6 text-center">
                *This is a screening tool, not a diagnostic instrument. Please consult with a healthcare professional for proper diagnosis and treatment.
              </p>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100">
      <Navigation />
      <div className="pt-32 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Depression Screening Test</h1>
            <p className="text-gray-600">This questionnaire will help assess your mental health over the past two weeks.</p>
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="p-8 bg-white/60 backdrop-blur-sm border-white/30 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {questions[currentQuestion]}
            </h2>

            <RadioGroup value={answers[currentQuestion]} onValueChange={handleAnswer}>
              <div className="space-y-4">
                {options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors duration-200">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="text-gray-700 cursor-pointer flex-1">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </Card>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <Button
              onClick={nextQuestion}
              disabled={!answers[currentQuestion]}
              className="flex items-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
            >
              {currentQuestion === questions.length - 1 ? "Get Results" : "Next"}
              {currentQuestion < questions.length - 1 && <ArrowRight className="w-4 h-4 ml-2" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepressionTest;
