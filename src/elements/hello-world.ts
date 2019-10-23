import {bindable} from 'aurelia-framework';
import { connectTo, Store } from 'aurelia-store';

const demoAction = async (state, frameworkName) => {
  const newState = Object.assign({}, state);
  newState.frameworks = [...newState.frameworks, frameworkName];
  return newState;
}

@connectTo()
export class HelloWorld {
  @bindable public message: string = '';
  state: any;

  constructor(protected store: Store<any>) {
    this.store.registerAction('DemoAction', demoAction);
  }

  attached() {
    this.store.dispatch(demoAction, 'Sheesh')
  }
}
