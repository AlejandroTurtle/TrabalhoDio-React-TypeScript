import  { login } from "./Login"



describe('login', () => {
    const mockEmail = "teste@teste.com"
    const mockSenha = "123456"



    it ("Deve exibir um alert dando as boas vindas caso o email seja valido", async() =>{
       const response = await login(mockEmail, mockSenha)
        expect (response).toBeTruthy()
    })



    it ("Deve exibir um erro caso o email seja invalido", async() => {
        const response = await login("email@invalido.com", "1221212")
        expect (response).toBeFalsy()
    })
})