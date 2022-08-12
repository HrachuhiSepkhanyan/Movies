import { makeAutoObservable } from "mobx";

class PageStore {
  page = 1;

  constructor() {
    makeAutoObservable(this);
  }

  getPage(page: number) {}
}
export const pageStore = new PageStore();
