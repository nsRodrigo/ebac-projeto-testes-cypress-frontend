/// <reference types="cypress" />

import { enderecoFaker } from "../fixtures/perfil";
import { produto_dois, produto_quatro, produto_tres, produto_um } from "../fixtures/produtos";
import enderecoPage from "../support/page_objects/endereco.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

    beforeEach(() => {
        cy.visit('/produtos')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.addProduto(produto_um.descricao, produto_um.tamanho, produto_um.cor, produto_um.qtd);
        cy.clicarBotao('#primary-menu > .menu-item-629 > a');

        cy.addProduto(produto_dois.descricao, produto_dois.tamanho, produto_dois.cor, produto_dois.qtd);
        cy.clicarBotao('#primary-menu > .menu-item-629 > a');
        cy.clicarBotao(':nth-child(2) > .page-numbers');

        cy.addProduto(produto_tres.descricao, produto_tres.tamanho, produto_tres.cor, produto_tres.qtd);
        cy.clicarBotao('#primary-menu > .menu-item-629 > a');
        cy.clicarBotao(':nth-child(2) > .page-numbers');

        cy.addProduto(produto_quatro.descricao, produto_quatro.tamanho, produto_quatro.cor, produto_quatro.qtd);
        cy.clicarBotao('[class="button wc-forward"]');
        cy.clicarBotao('[class="checkout-button button alt wc-forward"]');

        enderecoPage.editarEnderecoFaturamento(
            enderecoFaker.nome,
            enderecoFaker.sobreNome,
            enderecoFaker.nomeEmpresa,
            enderecoFaker.pais,
            enderecoFaker.endereco,
            enderecoFaker.numero,
            enderecoFaker.cidade,
            enderecoFaker.estado,
            enderecoFaker.cep,
            enderecoFaker.telefone,
            enderecoFaker.email,
        )

        enderecoPage.validarPedido(
        )
    });
})
