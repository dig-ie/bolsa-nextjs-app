import Image from "next/image";

export default function ActionsVariations() {
  return (
    <main className="p-4 bg-primaryGreen/50 rounded-xl">
        <div className=" opac-100">
      <Image src={"/images/actionsvariations.png"}  className="rounded-xl" alt="Actionsvarations" width={393} height={393}></Image>
        </div>

        <div className="flex items-center justify-center mt-2">
            <h1 className="font-bold text-black">Carteira Digital: <span className="font-bold text-white">R$ 12.000</span></h1>
        </div>
    </main>
  );
}
