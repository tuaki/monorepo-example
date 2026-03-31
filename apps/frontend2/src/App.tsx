import { useState } from 'react';
import { Button } from ':components/button';

export function App() {
    const [ counter, setCounter ] = useState(0);

    return (
        <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
            <h1>App 2</h1>

            <div>
                Counter: {counter}
            </div>

            <Button onClick={() => setCounter(counter + 1)}>
                Increment
            </Button>
        </div>
    );
}
