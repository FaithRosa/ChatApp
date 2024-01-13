import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react"

export const Input = forwardRef<
HTMLInputElement, 
DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, 
HTMLInputElement>

>(({className, ...rest}, ref) => {
    return <input className = {'shadow py-1 px-2 border border-slate-300 focus:border-amber-800 outline-none rounded w-full'}{...rest} ref={ref} />
})