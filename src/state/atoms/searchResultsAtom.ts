import { atom } from 'recoil';

export interface Users {
  login: string;
}

export const searchResultsAtom = atom<Array<Users>>({
  key: 'searchResultsAtom',
  default: [],
});
