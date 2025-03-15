"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

const Slider = React.forwardRef(({ className, trackClassName, thumbClassName, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}>
    
    {/* Glossy Track with Gradient */}
    <SliderPrimitive.Track
      className={cn(
        "relative h-2 w-full grow overflow-hidden rounded-full shadow-lg",
        "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
        "before:content-[''] before:absolute before:inset-0 before:bg-white/10 before:blur-sm",
        trackClassName
      )}>
      <SliderPrimitive.Range 
        className="absolute h-full bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 transition-all duration-500"
      />
    </SliderPrimitive.Track>

    {/* Animated Glossy Thumb */}
    <SliderPrimitive.Thumb
      className={cn(
        "block h-6 w-6 rounded-full border-2 border-white shadow-xl transition-all duration-300",
        "bg-gradient-to-br from-yellow-400 via-red-500 to-purple-500",
        "hover:scale-110 focus-visible:ring-2 focus-visible:ring-purple-500",
        "animate-colorChange",
        thumbClassName
      )}
    />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }

/* Embedded CSS */
const styles = `
  @keyframes colorChange {
    0% { background: linear-gradient(45deg, #ff4b1f, #ff9068); }
    25% { background: linear-gradient(45deg, #f39c12, #f1c40f); }
    50% { background: linear-gradient(45deg, #1abc9c, #2ecc71); }
    75% { background: linear-gradient(45deg, #3498db, #9b59b6); }
    100% { background: linear-gradient(45deg, #ff4b1f, #ff9068); }
  }

  .animate-colorChange {
    animation: colorChange 4s infinite alternate ease-in-out;
  }
`

/* Injecting CSS into the document head */
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style")
  styleSheet.type = "text/css"
  styleSheet.innerText = styles
  document.head.appendChild(styleSheet)
}
