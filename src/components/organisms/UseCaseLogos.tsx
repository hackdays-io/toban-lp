'use client';

import React from 'react';

export default function UseCaseLogos() {
  const useCases = [
    { name: "Comoris", logoPath: "/logo/comoris-logo.png" },
    { name: "塩尻DAO", logoPath: "/logo/shiojiridao-kogo.webp" },
    { name: "ento", logoPath: "/logo/ETHTokyoLogoBlack.png" },
    { name: "ETH Tokyo", logoPath: "/logo/ETHTokyoLogoBlack.png" },
    { name: "Fracton", logoPath: "/logo/fracton-logo.png" },
    { name: "Localcoop", logoPath: "/logo/localcoop-logo.png" },
  ];

  // 2セット作成でシームレスループ
  const marqueeItems = [...useCases, ...useCases];

  return (
    <div className="usecase-marquee" aria-label="use cases">
      <div className="usecase-track">
        {marqueeItems.map((useCase, index) => (
          <div className="usecase-item" key={index}>
            <span className="usecase-name" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              {useCase.name}
            </span>
            {useCase.logoPath && (
              <img
                src={useCase.logoPath} 
                alt={`${useCase.name} logo`}
                width={useCase.name === 'Localcoop' ? 120 : 60}
                height={useCase.name === 'Localcoop' ? 40 : 60}
                className="usecase-logo-img"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}