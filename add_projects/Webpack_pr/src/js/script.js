/* Webpack. Собираем наш  проект */

const myModule = require('./main');

const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.goodbye();

/* Браузер не умеет собирать модули самостоятельно. 
Любая модульная система должна быть собрана в один результирующий файл. 
Для сборки модулей нужен сборщик, например Webpack
Webpack умеет полностью конфигурировать проект ( собирать скрипты в кучу; обрабатывать стили, картинки; формировать папки и т.д ) */

// ----------------------------------------------
// ES6 Modules
import {one, two} from './main';

console.log(`${one} and ${two}`);

// --------------------------

import {three as third} from './main';

console.log(third);

// import * as data from './main'; /* Импортирует всё */

import sayHi from './main';

sayHi();