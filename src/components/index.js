import Affix from './affix';

const components = {
  Affix
};

export default {
  install(Vue) {
    Object.keys(components).forEach(key => Vue.component(key, components[key]));
  },
};
