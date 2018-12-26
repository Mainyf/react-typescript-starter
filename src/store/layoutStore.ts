import { action, computed, observable, toJS } from 'mobx';
import { CSSProperties } from "react";

export interface ILayoutStore {
    style: CSSProperties;
    getStyle: CSSProperties;
    setStyles(style: CSSProperties): any;
    resetStyles(): any;
}

class LayoutStore implements ILayoutStore {
    
    @observable
    public style: CSSProperties = {};
    
    @computed
    get getStyle(): CSSProperties {
        return toJS(this.style);
    }
    
    @action.bound
    public setStyles(style: CSSProperties) {
        const keys = Object.keys(style);
        for(const key of keys) {
            this.style[key] = style[key];
        }
    }
    
    @action.bound
    public resetStyles() {
        this.style = {};
    }
    
}

export const layoutStore = new LayoutStore();