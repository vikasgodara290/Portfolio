"use client"

import { useState } from "react";

const subtitle = ["Fullstack Developer", "Tech Enthusiast"]

export default function Home() {
  const [typingState, setTypingState] = useState<string>('typing');

  return (
    <div className="">
        {
          subtitle.map(item => <TypeDeleteAnimation title={item}/>)
        }
    </div>
  );
}

interface TypeDeleteAnimationProps {
  title : string
}

function TypeDeleteAnimation({title} : TypeDeleteAnimationProps){

  return(
    <div className="">

    </div>
  )
}
