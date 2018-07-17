import bunyan from 'bunyan';

declare global {
    namespace NodeJS {
        interface Global {
            log: bunyan;
        }
    }
}  