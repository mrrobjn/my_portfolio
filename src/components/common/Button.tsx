"use client"

export const Button = ({ children }: { children : string }) => {
    return (
        <button 
            onClick={() => alert('Hello World')}
            className="bg-primary font-semibold text-sm text-white py-2 px-5 rounded-lg transition-all hover:opacity-80">
            {children}
        </button>
    )
}
