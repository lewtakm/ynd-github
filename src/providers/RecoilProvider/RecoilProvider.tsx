'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

interface RecoilProviderProps {
  children: ReactNode;
}

export const RecoilProvider = ({ children }: RecoilProviderProps) => (
  <RecoilRoot>{children}</RecoilRoot>
);
