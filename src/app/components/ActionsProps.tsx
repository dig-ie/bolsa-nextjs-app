'use client';

import React from 'react';

type ActionsProps = {
  ActionName?: string;
  BalanceLabelText?: string;
  PriceWallet?: number[];
};

export const ActionsVariations: React.FC<ActionsProps> = ({ ActionName, BalanceLabelText, PriceWallet }) => {
  return (
    <div className='flex flex-row items-center justify-center gap-2'>
      {ActionName && <h1 className=''>Variação da ação {ActionName}</h1>}
      {BalanceLabelText && (
        <>
          <h1 className='text-2xl font-bold'>{BalanceLabelText}</h1>
          <p className='text-2xl font-bold text-primaryGreen'>
            <span className=''>R$</span> {PriceWallet && PriceWallet.length > 0 ? PriceWallet.join(', ') : 'N/A'}
          </p>
        </>
      )}
    </div>
  );
};

