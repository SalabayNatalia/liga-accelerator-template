import {iosVhFix} from './utils/ios-vh-fix';
import {menu} from './modules/menu';
import {anchor} from './modules/anchor';


window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    menu();
    anchor();
  });
});
