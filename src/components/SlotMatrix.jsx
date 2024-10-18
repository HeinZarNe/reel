export default function SlotMatrix({ wonPaylines }) {
  const renderSlotRow = (rowIndex) => {
    return (
      <div className="flex flex-row gap-0" key={rowIndex}>
        {Array(5)
          .fill(0)
          .map((_, colIndex) => renderSlot(rowIndex, colIndex))}
      </div>
    );
  };
  const renderSlot = (rowIndex, colIndex) => {
    const slotIndex = rowIndex * 5 + colIndex;
    const isInWinningPayline = wonPaylines?.some((payline) =>
      payline.includes(slotIndex)
    );
    return (
      <div
        key={colIndex}
        className={`w-[82px] h-[114px]  ${
          isInWinningPayline ? "twinkle-border" : "border-transparent"
        }`}
      ></div>
    );
  };
  return (
    <div className="absolute top-[-2px] left-0 w-full h-full  flex flex-col">
      {Array(3)
        .fill(0)
        .map((_, rowIndex) => renderSlotRow(rowIndex))}
    </div>
  );
}
