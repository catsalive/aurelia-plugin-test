import { Store } from 'aurelia-store';
export declare class HelloWorld {
    protected store: Store<any>;
    message: string;
    state: any;
    constructor(store: Store<any>);
    attached(): void;
}
