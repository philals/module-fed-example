Run `npm install` then `npm run watch` in `./app1`,`./app2`,`./container`,`./header`. Ignore `./container-webpack` and `./app3`

These commands will run the container app on http://localhost:3000. From here you'll see an app with a module federated header that can send events to other children via an event bus. 

Fire a "Login Event". This fires an event via "Custom Event"

Clicking Dealing or Survey will swap out the contents of the page to different micro-frontends. 

Any updates to these frontends is consumed at run time.


Task/Ideas

1. Add routing, and sub-routes with react-router
2. See if container app with webpack resolves the react module issue
3. See if we can override import map at runtime
4. POC with Lui npm package
5. POC of scoping styles per sub-app (or shadow dom, which will conflict with 4 above)
6. POC of eventing https://www.npmjs.com/package/@trutoo/event-bus
