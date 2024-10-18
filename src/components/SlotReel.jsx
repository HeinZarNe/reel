import React, { forwardRef } from "react";
import SlotCounter from "react-slot-counter";

const SlotReel = forwardRef(({ value, dummyCharacters }, ref) => (
  <SlotCounter
    ref={ref}
    separatorClassName="border border-black"
    autoAnimationStart={false}
    direction="top-down"
    containerClassName="text-6xl leading-[114px] mt-[-13px] "
    charClassName="w-[81px]"
    dummyCharacters={dummyCharacters}
    duration={3}
    animateUnchanged
    value={value}
  />
));

export default SlotReel;
