/* Asyns, defer, динамические скрипты */

'use strict';



/* Этот скрипт (test.js) будет загружаться после того, как будет добавлен в документ */

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script); 
}

/* Поскольку async выключен, скрипты будут загружаться последовательно */
loadScript("js/test.js");
loadScript("js/testSecond.js");
