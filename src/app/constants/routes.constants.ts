export interface RouteItem {
  path: string;
  component: any;
  children?: RouteItem[];
}

const routesConsts = {
  home: {
    pathName: 'home',
    route: '/home',
  },
  promise: {
    pathName: 'promise',
    route: '/promise',
  },
  observable: {
    pathName: 'observable',
    route: '/promise/observable',
  },
  counter: {
    pathName: 'counter',
    route: '/promise/counter',
  },
  counterService: {
    pathName: 'counter-service',
    route: '/promise/counter-service',
  },
  counterStore: {
    pathName: 'counter-store',
    route: '/promise/counter-store',
  },
};

export default routesConsts;
