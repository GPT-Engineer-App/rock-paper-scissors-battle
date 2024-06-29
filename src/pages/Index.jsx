import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const choices = ["rock", "paper", "scissors"];

const getRandomChoice = () => choices[Math.floor(Math.random() * choices.length)];

const getResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return "draw";
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  }
  return "lose";
};

const Index = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const handleChoice = (choice) => {
    const computerChoice = getRandomChoice();
    const result = getResult(choice, computerChoice);

    setUserChoice(choice);
    setComputerChoice(computerChoice);
    setResult(result);

    if (result === "win") {
      setUserScore(userScore + 1);
    } else if (result === "lose") {
      setComputerScore(computerScore + 1);
    }
  };

  const resetScores = () => {
    setUserScore(0);
    setComputerScore(0);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-center">Rock Paper Scissors</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            {choices.map((choice) => (
              <Button key={choice} onClick={() => handleChoice(choice)}>
                {choice.charAt(0).toUpperCase() + choice.slice(1)}
              </Button>
            ))}
          </div>
          <Separator />
          {result && (
            <div className="text-center">
              <p>
                You chose: <strong>{userChoice}</strong>
              </p>
              <p>
                Computer chose: <strong>{computerChoice}</strong>
              </p>
              <p>
                Result: <strong>{result.charAt(0).toUpperCase() + result.slice(1)}</strong>
              </p>
            </div>
          )}
          <Separator />
          <div className="text-center">
            <p>
              Your Score: <strong>{userScore}</strong>
            </p>
            <p>
              Computer Score: <strong>{computerScore}</strong>
            </p>
          </div>
          <Button variant="outline" onClick={resetScores}>
            Reset Scores
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;