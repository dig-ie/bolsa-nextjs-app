"use client";

import React from "react";
import Header from "../components/Header";
import StartButton from "../components/StartButton";
import { ActionValueVariation } from "../components/ActionValueVariation";
import ActionsGraph from "../components/ActionsGraph";

export default function MainPage() {


  //Valores mockados para teste
  const stockLast7DaysValues = [
    { dayOfWeek: 'Monday', soldValue: 10.2, forecastValue: 80 },
    { dayOfWeek: 'Tuesday', soldValue: 20.4, forecastValue: 90 },
    { dayOfWeek: 'Wednesday', soldValue: 30.5, forecastValue: 40 },
    { dayOfWeek: 'Thursday', soldValue: 40.1, forecastValue: 10 },
    { dayOfWeek: 'Friday', soldValue: 80, forecastValue: 40 },
  ];

  return (
    <main>
      <Header title="Valorim" buttonText="Entrar" />
      <div className="flex flex-col items-center gap-10 p-10">
        <div>
          <h1 className="text-4xl font-bold">
            Invista sem medo. Aprenda simulando de verdade
          </h1>
        </div>

        <div>
          <h2 className="text-xl font-bold">
            Simule operações na bolsa com dados reais e sem riscos
          </h2>
        </div>

        <StartButton title="Comece agora gratuitamente" />
      </div>
      <ActionValueVariation actionName="X Y Z" />
      {/* passando os dados do array pelo data, e passando para a view do grafico */}
      <ActionsGraph data={stockLast7DaysValues} />
      <ActionValueVariation balanceLabelText="Carteira Digital:" priceWallet={[2000]} />
      {/* <HowWorks /> */}

    </main>
  );
}
