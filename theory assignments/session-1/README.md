# Namaste React - (Session 1)

1. __What is Emmet?__  
   Emmet is a toolkit which helps in writing more code in less time. Emmet has its own syntax which is inspired from CSS. Developers can write CSS like expressions and Emmet wilsl parsed those expressions into HTML or any other code.  
  
2. __Difference Between Library & Framework?__  
    * __Library__ is a bunch of code which implements a specific functionality. Library can be easily plugged into an existing application. Where as __Framework__ is a combination of multiple libraries implementing a methodology.
    * React in its core is a library. When React is combined with other libraries like Redux etc and a design pattern is implemented, then that combination can be called as a framework.
3. __What is CDN? Why Do we use it?__  
   __Content Delivery Network__ (CDN) is a network of intermediate CACHE servers. Static data or requests can be cached in these servers to serve users quickly. We can use CDN when static files need to be served to users from different countries. This will reduce the network latency and load on the server.
4. __What is crossorigin in script tag?__  
   crossorigin attribute in script tag is used to request resources from other domain.
5. __What is diference between React and ReactDOM?__
   React package consists of core react components. React-Dom helps us connect our react app to our DOM elements. React Dom is required only when DOM specific actions are needed.
6. __What is difference between react.development.js and react.production.js files via CDN?__  
   React production files are minified and optimised versions of react development files. As they are minified, size of the files will be reduced and can load faster.
7. __What is async and defer?__  
   * Async and defer are the attributes of script tag.
   * While parsing html, Async and Defer both fetch js scripts in parallel. But Async will execute script as soon as the response is fetched. Where as, defer will wait for whole html to parse and then execute the javascript.
   * Async doesnot garuntee the order of execution but defer does.
