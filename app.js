let application = require("tns-core-modules/application");

application.run({ moduleName: "app-root" });
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/

function onButtonTap() {
    location.href("https://www.google.com/search?q=banff&oq=banf&aqs=chrome.0.69i59j46j69i57j0l4j69i60.1143j0j9&sourceid=chrome&ie=UTF-8");
}