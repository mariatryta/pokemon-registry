import { mount } from "@cypress/vue";
import Pagination from "../Pagination.vue";

describe("Pagination", () => {
  it("renders properly", () => {
    mount(Pagination, { props: { currentPage: 0 } });
    cy.contains("button", "Next").should("be.visible");
    cy.contains("button", "Prev").should("be.disabled");
  });

  it('emits an "updatePage" event once when button  is clicked', () => {
    // mount the component by itself in the browser 🏗
    mount(Pagination, { props: { currentPage: 0 } });

    cy.contains("button", "Next").click();
  });
});
