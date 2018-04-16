export class LoggerService {
  error: any;
}

export function loggerServiceFactory(i: any) {
  return i.get('logger');
}

export const loggerServiceProvider = {
  provide: LoggerService,
  useFactory: loggerServiceFactory,
  deps: ['$injector']
};
