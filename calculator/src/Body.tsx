
import Button from './Button.tsx';
import Operation from './Operation.tsx';
import React, { useState } from 'react';

export default function Body() {
    const [input, setInput] = useState<string>("");

    const handleButtonClick = (value: string) => {
        setInput((prevInput) => prevInput + value);
    };

    const handleClear = () => {
        setInput("");
    };

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput("Error");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white w-[500px] h-[500px]">

                
                <div className="bg-[#7e7b75] w-full h-[80px] flex items-center justify-end px-4 text-3xl">
                    {input}
                </div>

                <div className="grid grid-cols-[400px_100px] h-[420px]">

                    
                    <div className="grid grid-cols-3 gap-2">

                        <Button onClick={handleClear} value="AC" />
                        <Button value="+/-" />
                        <Button
                            onClick={() => handleButtonClick("%")}
                            value="%"
                        />

                        <Button onClick={() => handleButtonClick("1")} value={1} />
                        <Button onClick={() => handleButtonClick("2")} value={2} />
                        <Button onClick={() => handleButtonClick("3")} value={3} />

                        <Button onClick={() => handleButtonClick("4")} value={4} />
                        <Button onClick={() => handleButtonClick("5")} value={5} />
                        <Button onClick={() => handleButtonClick("6")} value={6} />

                        <Button onClick={() => handleButtonClick("7")} value={7} />
                        <Button onClick={() => handleButtonClick("8")} value={8} />
                        <Button onClick={() => handleButtonClick("9")} value={9} />

                        <Button onClick={() => handleButtonClick("0")} value={0} />
                        <Button onClick={() => handleButtonClick(".")} value="." />

                    </div>

                
                    <div className="bg-orange-500 flex flex-col gap-2">

                        <Operation sign="+" onClick={() => handleButtonClick("+")} />
                        <Operation sign="-" onClick={() => handleButtonClick("-")} />
                        <Operation sign="X" onClick={() => handleButtonClick("*")} />
                        <Operation sign="/" onClick={() => handleButtonClick("/")} />
                        <Operation sign="=" onClick={handleCalculate} />

                    </div>

                </div>
            </div>
        </div>
    );
}
