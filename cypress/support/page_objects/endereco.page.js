import { produto_dois, produto_quatro, produto_tres, produto_um } from "../../fixtures/produtos";

class EnderecoPage {

    editarEnderecoFaturamento(nome, sobreNome, nomeEmpresa, pais, endereco, numero, cidade, estado, cep, telefone, email) {
        cy.get('#billing_first_name').clear().type(nome);
        cy.get('#billing_last_name').clear().type(sobreNome);
        cy.get('#billing_company').clear().type(nomeEmpresa);
        cy.get('#select2-billing_country-container').click().type(`${pais}{enter}`);
        cy.get('#billing_address_1').clear().type(endereco);
        cy.get('#billing_address_2').clear().type(numero);
        cy.get('#billing_city').clear().type(cidade);
        cy.get('#select2-billing_state-container').click().type(`${estado}{enter}`)
        cy.get('#billing_postcode').clear().type(cep);
        cy.get('#billing_phone').clear().type(telefone);
        cy.get('#billing_email').clear().type(email);
        cy.get('#terms').check();
        cy.get('#place_order').click();
    }

    validarPedido() {
        cy.get('h1:contains(Pedido recebido)');
        cy.contains('a', `${produto_um.descricao}`).should('be.exist');
        cy.contains('a', `${produto_dois.descricao}`).should('be.exist');
        cy.contains('a', `${produto_tres.descricao}`).should('be.exist');
        cy.contains('a', `${produto_quatro.descricao}`).should('be.exist');
    }
}
export default new EnderecoPage()