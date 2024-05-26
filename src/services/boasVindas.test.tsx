import  { BoasVindas } from "./boasVindas"

describe('boasvindas', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert
    it ("Deve exibir um alert dando as boas vindas", () =>{
        BoasVindas()
        expect(mockAlert).toHaveBeenCalledWith("Seja bem vindo")
    })
})