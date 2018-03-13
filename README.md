# express-react-starter

A quick start for a react app with server side rendering with express

This is a super basic starting point so there is no redux, Hot Module Reloading, or other dev environment preferences. Those will be added to additional branches in the future.

In this boilerplate: The React app is rendered on the server and served static via express. If the url matches one of the react-router paths it will still be served correctly. Once the app has bootstrapped in the browser the client side react-router takes over. It can also then make api calls back to the server.

For now the server can be started with

    $ yarn dev

the webpack compiler runs seperately with

    $ yarn watch

...currently testing different workflows for combining these processes with HMR
