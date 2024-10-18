import { useRef, useState } from "react";
import SlotReel from "./components/SlotReel";
import Lever from "./components/Lever";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import SlotMatrix from "./components/SlotMatrix";
import { loserMessages, dummyCharacters, paylines, reels } from "./constants";
function App() {
  const [text, setText] = useState("Hello, let's play some game.");
  const [isSpinning, setIsSpinning] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [wonPayline, setWonPayline] = useState(null);
  const [slotValues, setSlotValues] = useState([
    ["❓", "❓", "❓", "❓", "❓"],
    ["❓", "❓", "❓", "❓", "❓"],
    ["❓", "❓", "❓", "❓", "❓"],
  ]);
  const counterRefs = [useRef(null), useRef(null), useRef(null)];
  const { width, height } = useWindowSize();
  const getRandomSlot = () =>
    reels.map((reel) => reel[Math.floor(Math.random() * reel.length)]);
  const checkWin = (values) => {
    const flatValues = values.flat();
    const winningLines = paylines.filter((payline) =>
      payline.every((index) => flatValues[payline[0]] === flatValues[index])
    );
    if (winningLines.length > 0) {
      setIsWon(true);
      setWonPayline(winningLines);
      setTimeout(() => {
        setIsWon(false);
      }, 4000);
      return true;
    } else {
      setIsWon(false);
      setWonPayline([]);
      return false;
    }
  };
  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setWonPayline([]);
    const newValues = [];
    for (let i = 0; i < 3; i++) {
      let random = getRandomSlot();
      while (
        random[0] === slotValues[i][0] ||
        random[1] === slotValues[i][1] ||
        random[2] === slotValues[i][2] ||
        random[3] === slotValues[i][3] ||
        random[4] === slotValues[i][4]
      ) {
        random = getRandomSlot();
      }
      newValues.push(random);
    }
    setSlotValues(newValues);
    counterRefs.forEach((ref, i) =>
      ref.current?.startAnimation({
        direction: "top-down",
        value: newValues[i],
      })
    );
    setTimeout(() => {
      setText(
        checkWin(newValues)
          ? "You Won!"
          : loserMessages[Math.floor(Math.random() * loserMessages.length)]
      );
      setIsSpinning(false); // Stop spinning after 3.5 seconds
    }, 3500);
  };
  return (
    <div className="relative w-screen h-screen flex items-center justify-center flex-col gap-5">
      {isWon ? <Confetti width={width} height={height} /> : <></>}
      <p className="text text-center">{isSpinning ? "Spinning" : text}</p>
      <div className="flex flex-row  items-center border-[6px] border-black rounded-sm ">
        <div className=" relative bg-slate-100 border-r-[6px] border-black">
          <SlotMatrix wonPaylines={wonPayline} />
          {counterRefs.map((ref, i) => (
            <div className="flex flex-col " key={i}>
              <SlotReel
                ref={ref}
                value={slotValues[i]}
                dummyCharacters={dummyCharacters}
              />
              <hr className="bg-red-50" />
            </div>
          ))}
        </div>
        <div className="rotate-[90deg]">
          <Lever onClick={handleSpin} isSpinning={isSpinning} />
        </div>
      </div>
    </div>
  );
}

export default App;
