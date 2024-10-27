import { ReactNode, ButtonHTMLAttributes } from "react"

type Props = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, className = "", ...props }: Props) {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  return (
    <button
      className={`${baseStyles} bg-secondary text-secondary-foreground hover:bg-secondary/80  h-6 px-1.5 py-0.5 text-xs ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}