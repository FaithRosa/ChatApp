import { useRef } from "react"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    return (
    <>
    <h1 className ="text-3x1 font-bold mb-8 text-center">Sign up</h1>
    <form className = "grid grid-cols-[auto, 2fr] gap-x-3 gap-y-2 items-center">
        <label htmlFor="userName">Username</label>
        <Input id="userName" pattern ="\S" required ref={usernameRef} />
        <label htmlFor="userName">Name</label>
        <Input id="name" required ref={nameRef} />
        
        
        
    </form>
    </>
    )
}