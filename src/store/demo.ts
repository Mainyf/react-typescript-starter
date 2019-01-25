import { action, observable } from 'mobx';

class Demo {
    
    @observable
    message: string = 'demo message';

    @action.bound
    public setMessage(message: string) {
        this.message = message;
    }
}

export default new Demo();
