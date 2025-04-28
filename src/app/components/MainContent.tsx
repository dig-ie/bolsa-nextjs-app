export default function MainContent({ title = "Invista sem medo. Aprenda simulando de verdade.", description = "Simule operações na bolsa com dados reais e sem riscos.", buttonTitle = "Comece agora gratuitamente" }) {
    return (
        <main>
            <div className="flex flex-col items-center gap-10 p-10">
                <div>
                    <h1 className="text-4xl font-bold">{title}</h1>
                </div>

                <div>
                    <h2 className="text-xl font-bold">{description}</h2>
                </div>
                <button className="border  border-black text-xl font-bold rounded-xl w-[320px] h-[58px]">{buttonTitle}</button>
            </div>
        </main>
    )
}