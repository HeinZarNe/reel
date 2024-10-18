# Slot Machine Game Documentation

## Overview

This project is a slot machine game built using React, with additional functionalities from [React Slot Counter](https://www.npmjs.com/package/react-slot-counter) and a custom lever component from [Uiverse](https://uiverse.io/). The game features a 3x5 slot reel, random symbols, winning paylines, and a dynamic confetti effect upon winning. Users can interact with the lever to spin the reels and check if they win.

## Features

- **3x5 Slot Reel Layout**: Three rows and five columns of symbols are displayed on each spin.
- **Winning Paylines**: Multiple paylines that check for matching symbols.
- **Confetti Animation**: A confetti effect when the user wins.
- **Funny Loser Messages**: A random message is displayed if the user loses.
- **Lever Interaction**: A custom-built lever to trigger the spin action.

## Technologies Used

- **React**: For the frontend of the application.
- **react-slot-counter**: To animate the slot reel.
- **react-confetti**: For displaying a confetti effect when the player wins.
- **Tailwind CSS**: For styling the application.

## How to Run the Project

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-repo/slot-machine-game.git
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the project**:

   ```bash
   npm start
   ```

4. Open `http://localhost:5173` in your browser to view the slot machine game.

## Code Structure

### `App.jsx`

This is the main component that manages the game state, including the current slot values, winning condition checks, and animations.

#### Key Logic:

- **getRandomSlot()**: Generates random slot symbols from predefined reels.
- **checkWin()**: Determines if the player has won based on predefined paylines.
- **handleSpin()**: Initiates the slot spin, updates the slot values, and displays the result.

### `Lever.jsx`

This component is a ready-made lever design, allowing users to spin the slot machine by interacting with it.

### `SlotMatrix.jsx`

This component renders the slot reel's matrix and highlights winning paylines.

### `SlotReel.jsx`

This component uses `react-slot-counter` to animate the symbols on the slot reel.

### `constants.js`

Defines the symbols on the reels, paylines, and funny loser messages.

```javascript
export const reels = [
  ["🍒", "🧠", "🍇", "🎱", "🍀", "🍉", "🌟", "🎱", "🍒", "🍇"],
  // More reel symbols...
];

export const dummyCharacters = [...new Set(reels.flat())];

export const loserMessages = [
  "Oops! Was that your lucky charm?",
  "Congrats! You're a pro at losing!",
  // More funny messages...
];

export const paylines = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  // More paylines...
];
```

## How It Works

- **Spinning the Reels**: When the lever is pulled (clicked), the slot reels start spinning. The game generates random symbols from a predefined reel set.
- **Winning Conditions**: The game checks for winning combinations based on the paylines. If a payline is hit, the player wins and a confetti animation is triggered. If not, a funny loser message is displayed.
- **User Interaction**: The player can spin the reels by pulling the lever. The lever component is animated to visually enhance the interaction.

## Acknowledgments

- **react-slot-counter**: For providing a smooth animation of slot reels.
- **Confetti**: To celebrate winning with a confetti effect.

## Future Enhancements

- Add more symbols and paylines for a complex game experience.
- Implement variable bets and payouts for different paylines.
- Create more engaging animations for spinning reels and win highlights.

---
