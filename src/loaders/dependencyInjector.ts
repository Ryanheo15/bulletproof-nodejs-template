import { Container } from 'typedi';
import LoggerInstance from './logger';
import config from '@/config';

export default ({ mongoConnection, models }: { mongoConnection; models: { name: string; model: any }[] }) => {

  try {

    //Injecting all models
    models.forEach(m => {
      Container.set(m.name, m.model);
    });
    
    //Injecting logger object
    Container.set('logger', LoggerInstance);
  } catch (e) {
    LoggerInstance.error('🔥 Error on dependency injector loader: %o', e);
    throw e;
  }
};
