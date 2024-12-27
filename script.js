/******************************
 *       GLOBAL VARIABLES     *
 ******************************/
let scores = {
    Red: 0,
    Blue: 0,
    Green: 0,
    Yellow: 0,
  };
  
  /******************************
   *    OPENING CEREMONY EVENT  *
   ******************************/
  function OpeningCeremony(score, callback) {
    console.log("Opening Ceremony: Let the games begin!");
    
    // Log the start message every second for 3 seconds:
    let count = 3;
    const intervalId = setInterval(() => {
      console.log(`The ceremony starts in ${count}...`);
      count--;
  
      if (count < 0) {
        clearInterval(intervalId);
        console.log("The ceremony has officially started!");
        
       
        score.Red = 0;
        score.Blue = 0;
        score.Green = 0;
        score.Yellow = 0;
        
        console.log("Scores initialized:", score);
        // Proceed to the next event after initialization
        callback(score);
      }
    }, 1000);
  }
  
  /******************************
   *       100M RACE EVENT      *
   ******************************/
  function Race100M(score, callback) {
    console.log("\n--- 100m Race is about to start! ---");
    console.log("Previous Scores:", score);
  
    // Simulate a 3-second delay before the race finishes
    setTimeout(() => {
      // Random times for each color
      let raceTimes = {
        Red: Math.random() * 5 + 10,    // Random time between 10 - 15 seconds
        Blue: Math.random() * 5 + 10,
        Green: Math.random() * 5 + 10,
        Yellow: Math.random() * 5 + 10,
      };
  
      // Sort the results by time (ascending)
      let sortedResults = Object.entries(raceTimes).sort((a, b) => a[1] - b[1]);
  
      // Winner gets 50 points, second place 25, rest get 0
      let [first, second] = sortedResults;
      score[first[0]] += 50;
      score[second[0]] += 25;
  
      console.log("Race Times (in seconds):", raceTimes);
      console.log(`1st Place: ${first[0]}, 2nd Place: ${second[0]}`);
      console.log("Updated Scores:", score);
  
      // Proceed to the next event
      callback(score);
    }, 3000);
  }
  
  /******************************
   *       LONG JUMP EVENT      *
   ******************************/
  function LongJump(score, callback) {
    console.log("\n--- Long Jump Event! ---");
    console.log("Previous Scores:", score);
  
    // Simulate a 2-second delay before the long jump result
    setTimeout(() => {
      // Randomly pick a color
      const colors = ["Red", "Blue", "Green", "Yellow"];
      const chosenColor = colors[Math.floor(Math.random() * colors.length)];
  
      // Award 150 points to the randomly chosen color
      score[chosenColor] += 150;
  
      console.log(`${chosenColor} has the best Long Jump!`);
      console.log("Updated Scores:", score);
  
      // Proceed to the next event
      callback(score);
    }, 2000);
  }
  
  /******************************
   *       HIGH JUMP EVENT      *
   ******************************/
  function HighJump(score, callback) {
    console.log("\n--- High Jump Event! ---");
    console.log("Previous Scores:", score);
  
    // Prompt the user to enter the color with the highest jump
    // Note: `prompt()` is typically only available in browser environments
    // Adjust accordingly if you’re running in Node or another environment
    const userInput = prompt("Which color secured the highest jump? (Red/Blue/Green/Yellow)");
  
    if (!userInput) {
      console.log("Event was cancelled or no input provided.");
    } else {
      const color = userInput.trim();
      if (scores.hasOwnProperty(color)) {
        scores[color] += 100;
        console.log(`${color} gets 100 points for the High Jump!`);
      } else {
        console.log("No valid color was entered. No points awarded.");
      }
    }
  
    console.log("Updated Scores:", score);
  
    // Proceed to the award ceremony
    callback(score);
  }
  
  /******************************
   *    AWARD CEREMONY EVENT    *
   ******************************/
  function AwardCeremony(score) {
    console.log("\n--- Award Ceremony ---");
    console.log("Final Scores:", score);
  
    // Sort the scores to determine the final ranking
    let finalRanking = Object.entries(score).sort((a, b) => b[1] - a[1]);
  
    // Announce the winners
    console.log(`1st Place: ${finalRanking[0][0]} with ${finalRanking[0][1]} points`);
    console.log(`2nd Place: ${finalRanking[1][0]} with ${finalRanking[1][1]} points`);
    console.log(`3rd Place: ${finalRanking[2][0]} with ${finalRanking[2][1]} points`);
    // If needed, 4th place can also be announced
    console.log("Congratulations to all participants!");
  }
  
  /******************************
   *       PROJECT EXECUTION    *
   ******************************/
  // Start the event sequence
  OpeningCeremony(scores, (updatedScore) => {
    Race100M(updatedScore, (updatedScore) => {
      LongJump(updatedScore, (updatedScore) => {
        HighJump(updatedScore, (updatedScore) => {
          AwardCeremony(updatedScore);
        });
      });
    });
  });
  