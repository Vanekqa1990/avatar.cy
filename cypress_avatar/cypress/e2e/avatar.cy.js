describe('Покупка аватара', function () {                               // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/'); // переходим на сайт https://pokemonbattle.ru/
         cy.get('input[type="email"]').type('azarikkk@yandex.ru',{force: true}); // вводим логин    
         cy.get('input[type="password"]').type('1Abrek5885', {force: true}) // вводим пароль
         cy.get('button[type="submit"]').click({force: true}); // нажимаем кнопку Подтвердить
         cy.wait(3000);
         cy.get('.header__id-no-main > .header__id-img').click({force: true}); // нажимаем на айди тренера
         cy.get('[href="/shop"]').click({force: true}); // нажимаем сменить аватар
         cy.get(':nth-child(3) > .shop__button').click({force: true}); // выбираем аватар
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // вводим номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225',{force: true}); // вводим дату
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125',{force: true}); // вводим код
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Ivan',{force: true}); // вводим имя пользователя карты
         cy.get('.pay-btn').click({force: true}); // нажимаем купить
         cy.get('#cardnumber').type('56456',{force: true}); // вводим код подтверждения
         cy.get('.payment__submit-button').click({force: true}); // нажимаем подтвердить
         cy.contains('Покупка прошла успешно').should('be.visible'); // видим экран успеха
     });
 });
 
