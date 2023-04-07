/* Kata: Should I ask Steve? - A logical if else level 8 kata focusing on conditional statements

Steve is a developer (an AI expert, in fact) and enjoys helping others improve their coding skills. People often come to him with questions.

Write a function that takes a single integer argument.  This argument represents the number of things the person understands. The function should return a string with an encouraging message based on the following conditions:

If the person understands 200 things or more, return "Steve says you are doing an amazing job! Keep it up!"
If the person understands 100 things or more but less than 200, return "Steve says there's still a lot to learn, but you are heading in the right direction - well done!"
Otherwise, return "Steve says you've made a great start and he's here to help!"*/

//👉 Write your kata here! 🍏

export function askSteve(understood) {
  // let notUnderstood = understood * 5;
  if (understood >= 200) {
    return "Steve says you are doing an amazing job! Keep it up!";
  } else if (understood >= 100) {
    return "Steve says there's still a lot to learn, but you are heading in the right direction - well done!";
  } else {
    return "Steve says you've made a great start and he's here to help!";
  }
}

// 👉 Write the function your CodeWarriors will start with below here: 🍏

function askSteve(understood) {
  //   Your code here
  return;
}
