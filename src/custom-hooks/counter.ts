import { useState } from "react";

type CounterReturnType = [number, () => void, () => void];

const useCounter = (initialCount: number = 0): CounterReturnType => {
    const [count, setCount] = useState<number>(initialCount);

    const increment = () => {
        return setCount(prevState => prevState + 1);
    }

    const decrement = () => {
        return setCount(prevState => prevState - 1);
    }

    return [count, increment, decrement];
};

export default useCounter;
