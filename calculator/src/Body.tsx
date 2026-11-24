import Button from './Button.tsx'

export default function Body() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white w-[500px] h-[500px]">

                <div className="bg-[#7e7b75] w-full h-[80px]">
                    <input type="text" className="w-full h-full" />
                </div>

                
                <div className="grid grid-cols-[400px_100px] h-[420px]">
                    <div className="grid grid-cols-3 gap-2">
                        <Button value={'AC'} />
                        <Button value={'+/-'} />
                        <Button value={'%'} />
                        <Button value={1} />
                        <Button value={2} />
                        <Button value={3} />
                        <Button value={4} />
                        <Button value={5} />
                        <Button value={6} />
                        <Button value={7} />
                        <Button value={8} />
                        <Button value={9} />
                        <Button value={0} />
                        <Button value={'.'} />
                    </div>

                    
                    <div className="bg-orange-500">
                    </div>

                </div>
            </div>
        </div>
    );
}