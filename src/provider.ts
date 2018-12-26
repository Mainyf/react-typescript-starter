import { IRootStore, rootStore } from './store';

export const store = rootStore;

export const PROVIDERS = [
    'store'
];

export interface IProviderProps {
    store?: IRootStore;
}