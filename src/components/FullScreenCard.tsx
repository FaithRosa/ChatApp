import {ReactNode} from 'react'

type FullScreenCardProps = {
    children: ReactNode
}

export function FullScreenCard({ children }: FullScreenCardProps) {
 
 return <div className="flex justify-center items-center min-h-screen bg-grey-100">
 <div className="max-w-md w-full">{children}</div>

 </div>;
    
}

export namespace FullScreenCard {
    export const Body: React.FC<FullScreenCardProps> = ({ children }) => {
        return <div className='shadow bg-amber-300 p-6 rounded-lg'>{children}</div>;
    };

    export const BelowCard: React.FC<FullScreenCardProps> = ({ children }) => {
        return <div className="mt-2 justify-center flex gap-3">{children}</div>;
    };
}