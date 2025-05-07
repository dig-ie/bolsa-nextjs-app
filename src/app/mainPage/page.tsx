"use client";

import React from "react";
import Header from "../components/Header";
import ButtonWeb from "../components/ButtonWeb";
import ButtonStart from "../components/ButtonStart";

type MainPageProps = {
  title?: string;
  description?: string;
};

const MainPage: React.FC<MainPageProps> = ({
  title = "Invista sem medo. Aprenda simulando de verdade.",
  description = "Simule operações na bolsa com dados reais e sem riscos.",
}) => {
  return (
    //declarar o header
    <main>
      <Header />
      {/* <ButtonWeb
        title="teste"
        buttonImage="https://imgs.search.brave.com/bOAelAw4j16D9IT3S1ypEqZUZlNzN2Ef6eATH9MhdGI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzEzLzk4LzU1/LzM2MF9GXzcxMzk4/NTUwMF9WUElzZHRa/WHNMTDN5YVZuSjZS/MTBpSjJ3WmkwRjVX/TS5qcGc"
        onClick={() => {}}
      /> */}
      <div className="flex flex-col items-center gap-10 p-10">
        <div>
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>

        <div>
          <h2 className="text-xl font-bold">{description}</h2>
        </div>

        <ButtonStart title="Comece agora mesmo" />
      </div>
    </main>
  );
};

export default MainPage;

//Todo converte todos os componentes para componentes funcionais
