    var faker = require('faker')
    var cpf = require('gerador-validador-cpf')


    export default {

        SignUpCorrect: function() {

            var firstName = faker.name.firstName()
            var lastName = faker.name.lastName()

            var data =  {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '21986456586',
            adress: {
                postalcode: '78125320',
                street: 'Rua José Luiz Coelho',
                number: '11',
                details: 'casa',
                district: 'Centro-Sul',
                city_state: 'Várzea Grande/MT'
             
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data

    },
    SignUpIncorrectCEP: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data =  {
        name: `${firstName} ${lastName}`,
        cpf: cpf.generate(),
        email: faker.internet.email(firstName),
        whatsapp: '21986456586',
        adress: {
            postalcode: '78125320as',
            number: '11',
            details: 'casa',
         
        },
        delivery_method: 'Moto',
        cnh: 'cnh-digital.jpg'
    }
    return data
}
}  