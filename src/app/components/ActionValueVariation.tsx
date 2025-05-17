// ActionValueVariation.tsx

'use client';
import React from 'react';
import { ActionValueVariationsProps } from './ActionValueVariationProps';

export const ActionValueVariation: React.FC<ActionValueVariationsProps> = ({
  actionName,
  balanceLabelText,
  priceWallet
}) => {
  return (
    <div className='flex flex-row items-center justify-center gap-2'>
      {actionName && <h1>Variação da ação: {actionName}</h1>}
      {balanceLabelText && (
        <>
          <h1 className='text-2xl font-bold'>{balanceLabelText}</h1>
          <p className='text-2xl font-bold text-primaryGreen'>
            <span>R$</span> {priceWallet && priceWallet.length > 0 ? priceWallet.join(', ') : 'N/A'}
          </p>
        </>
      )}
    </div>
  );
};
