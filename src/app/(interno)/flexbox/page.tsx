import Caixa from "@/components/caixa";

export default function Page() {
    return (
            <div className="h-96 w-[900px]"> 
                <h1>Flexbox</h1>
                <div className="
                    flex 
                    justify-around 
                    h-full 
                    items-start
                    bg-zinc-700 
                    gap-5
                ">
                    <Caixa texto='#1' className='w-24'></Caixa>
                    <Caixa texto='#2' className="flex-grow"></Caixa>
                    <Caixa texto='#3' className='w-20'></Caixa>
                </div>
            </div>
    )
}