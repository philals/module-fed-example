These commands will run the container app on http://localhost:3000

cd into each directory and run `npm run watch`.

The container will start as a site in dev mode.

The others will be production built and hosted as static assets

Task/Ideas

1. Add routing, and sub-routes with react-router
2. See if container app with webpack resolves the react module issue
3. See if we can override import map at runtime
4. POC with Lui npm package
5. POC of scoping styles per sub-app (or shadow dom, which will conflict with 4 above)
6. POC of eventing https://www.npmjs.com/package/@trutoo/event-bus
