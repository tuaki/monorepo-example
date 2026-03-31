import type { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    onClick?: () => void;
};

export function Button({ children, onClick }: ButtonProps) {
    return (
        <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer' onClick={onClick}>
            {children}
        </button>
    );
}
