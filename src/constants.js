export const reels = [
  ["🍒", "🧠", "🍇", "🎱", "🍀", "🍉", "🌟", "🎱", "🍒", "🍇"],
  ["🍇", "🌟", "🌟", "🍒", "🧠", "🎱", "🍎", "🍀", "🍉", "🎱"],
  ["🍀", "🍒", "🎱", "🧠", "🍇", "🌟", "🍉", "🌟", "🍒", "🎱"],
  ["🍉", "🍀", "🍎", "🍒", "🧠", "🎱", "🍇", "🌟", "🍉", "🌟"],
  ["🌟", "🍒", "🍉", "🧠", "🍀", "🎱", "🍇", "🌟", "🍉", "🍇"],
];
// TO check winning ui
// const reels = [
//   ["🎱", "🎱", "🎱", "🎱", "🍀", "🎱", "🌟", "🎱", "🎱", "🎱"],
//   ["🎱", "🌟", "🌟", "🎱", "🎱", "🎱", "🍎", "🍀", "🎱", "🎱"],
//   ["🍀", "🎱", "🎱", "🎱", "🎱", "🌟", "🎱", "🌟", "🎱", "🎱"],
//   ["🎱", "🍀", "🍎", "🎱", "🎱", "🎱", "🎱", "🌟", "🎱", "🌟"],
//   ["🌟", "🎱", "🎱", "🎱", "🍀", "🎱", "🎱", "🌟", "🎱", "🎱"],
// ];
export const dummyCharacters = [...new Set(reels.flat())];
export const loserMessages = [
  "Oops! Was that your lucky charm?",
  "Congrats! You're a pro at losing!",
  "Well, that was... something.",
  "You win some, you lose most!",
  "Your wallet just called. It's crying.",
  "Lost again? At least you're consistent!",
  "I've seen better luck in a broken mirror.",
  "That's a lot of losing for one spin!",
  "The jackpot? Not even close.",
  "Maybe try turning the machine off and on again.",
];
export const paylines = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [0, 5, 10],
  [1, 6, 11],
  [2, 7, 12],
  [3, 8, 13],
  [4, 9, 14],
  [0, 6, 12, 8, 4],
  [10, 6, 2, 8, 14],
];
