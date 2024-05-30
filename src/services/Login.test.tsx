import  { login } from "./Login"



describe('login', () => {
    const mockEmail = "teste@teste.com"



    it ("Deve exibir um alert dando as boas vindas caso o email seja valido", async() =>{
       const response = await login(mockEmail)
        expect (response).toBeTruthy()
    })



    it ("Deve exibir um erro caso o email seja invalido", async() => {
        const response = await login("email@invalido.com")
        expect (response).toBeFalsy()
    })
})