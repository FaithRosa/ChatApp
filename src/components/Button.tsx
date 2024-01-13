import { DetailedHTMLProps, ButtonHTMLAttributes, forwardRef } from "react"

export const Button = forwardRef<
HTMLButtonElement, 
DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, 
HTMLButtonElement>

>(({className, children,  ...rest}, ref) => {
    return <Button className = {'border-2 border-amber-800 bg-yellow-500 rounded p-2 w-full text-white font-bold hover:bg-orange-700 focus:bg-slate-100 transition diabled bg-pink-300'}{...rest} ref={ref} >
    {children}
    </Button>
})