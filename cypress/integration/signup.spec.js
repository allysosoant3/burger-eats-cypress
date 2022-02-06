import Signup from '../pages/SignupPage'
import SignupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage'


describe('Signup', function() {

    beforeEach(function() {
        cy.fixture('deliver').then((D)=> {
            this.deliver = D
        
        })
    })

    it('User should be deliver', function() {

        var deliver = SignupFactory.deliver()

        Signup.go()
        Signup.fillForm(deliver)
        Signup.submit()
        
        const message = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        Signup.modalContentShouldBe(message)

    })

    it('invalid document' , function() {

        var deliver = SignupFactory.deliver()

        deliver.cpf = '000000141aa'

        Signup.go()
        Signup.fillForm(deliver)
        Signup.submit()
        Signup.alertMessageShoudBe('Oops! CPF inválido')

    })

    it('Incorect email', function(){

        var deliver = SignupFactory.deliver()

        deliver.email = 'Sisudo.com.br'

        Signup.go()
        Signup.fillForm(deliver)
        Signup.submit()
        Signup.alertMessageShoudBe('Oops! Email com formato inválido.')

    })

    context('Required fields', function() {

        const messages = [

            {field: 'name', output:'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output:'É necessário informar o email'},
            {field: 'postalcode', output:'É necessário informar o CEP'},
            {field: 'number', output:'É necessário informar o número do endereço' },
            {field: 'delivery_method', output:'Selecione o método de entrega'},
            {field: 'cnh', output:'Adicione uma foto da sua CNH'}

        ]

        before(function() {

            Signup.go()
            Signup.submit()

        })

        messages.forEach(function(msg) {

            it(`${msg.field} is riquired`, function() {
                SignupPage.alertMessageShoudBe(msg.output)

            })

        })

    })

})