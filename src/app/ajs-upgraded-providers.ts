export class StateService {
  href: any;
}

export function stateServiceFactory(i: any) {
  return i.get('$state');
}

export const stateServiceProvider = {
  provide: StateService,
  useFactory: stateServiceFactory,
  deps: ['$injector']
};
