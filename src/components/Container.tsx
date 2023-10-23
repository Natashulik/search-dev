//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

import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return <div className='container'>
    {children}
  </div>
}