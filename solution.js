export function askSteve(understood) {
  if (understood >= 200) {
    return "Steve says you are doing an amazing job! Keep it up!";
  } else if (understood >= 100) {
    return "Steve says there's still a lot to learn, but you are heading in the right direction - well done!";
  } else {
    return "Steve says you've made a great start and he's here to help!";
  }
}
