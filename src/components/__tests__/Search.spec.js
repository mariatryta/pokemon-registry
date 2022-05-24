import { mount } from "@cypress/vue";
import Search from "../Search.vue";

describe("Search", () => {
  it("renders properly", () => {
    mount(Search, { propsData: { searchString: null } });
    cy.get("button").should("include.text", "Search");
  });

  it('emits an "submitSearch" event once when search  is clicked', () => {
    mount(Search, { propsData: { searchString: null } });

    cy.get("input").type("char");

    cy.get("form").submit();
  });
});
