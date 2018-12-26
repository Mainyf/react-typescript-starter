import { ILayoutStore, layoutStore } from './layoutStore';

export interface IRootStore {
    layoutStore: ILayoutStore;
}

class RootStore implements IRootStore {
    
    public layoutStore: ILayoutStore = layoutStore;
    
}

export const rootStore = new RootStore();