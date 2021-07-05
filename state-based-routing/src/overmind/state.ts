import { Component } from "vue-router/types/router";
import { Home, Page, NestedPage }from './../components/'


type State = {
  routes: Path[];
};

interface Path {
  path: string;
  title: string;
  component: Component;
  meta: any;
}

export const state: State = {
  routes: [
    {
      path: "/",
      title: "Home",
      component: Home,
      meta: {},
    },
    {
      path: "/Page",
      title: "Page",
      component: Page,
      meta: {},
    },
    {
      path: "/Page/Nested Page",
      title: "Nested Page",
      component: NestedPage,
      meta: {},
    },

  ]
};
