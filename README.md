# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## query

This. React-query for server state. Zustand for app state.

Technically, Zustand could also handle server state, like any other state manager could. But RQ is way better at it.


It totally can replace redux though. Your application state resides on the server, react-query synchronises it, and any small bits of local state that remain just go in hooks.

It’s a pretty nice way to code if you want to offload most of your logic to the back end, which is a good idea if your doing anything with fintech for example.



Server state is any state from, or derived from what you store in your database.

App state is state that lives only within the application. It may be persisted on the client, but it doesn't have to be pulled from a back-end. This includes anything from basic useStates to state that touches many parts of the front-end. useState, useContext, Redux, Zustand, Jōtai all fall under this category.

There is also location state (your URL) with things like query parameters. This does fall under the umbrella of application state, but it is usually good for letting your back-end know that it needs to return different server-state (e.g. data filtering)


after deferring to react query for server state data management, your app may not have anything to put in zustand. Check in after you're up and running with RQ and see whats left over


