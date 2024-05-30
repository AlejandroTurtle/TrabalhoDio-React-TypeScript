import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const dioBank = {
    login: false
}

describe("Storage", () => {
    const mockSetItem = jest.spyOn(Storage.prototype, "setItem")

    it("Deve retornar o objeto no local storage com a chave diobank", () => {
        const mockgetItem = jest.spyOn(Storage.prototype, "getItem")
        getAllLocalStorage()
        expect(mockgetItem).toHaveBeenCalledWith("diobank")
    })

    it("Deve criar o objeto no local storage", () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith("diobank", JSON.stringify(dioBank))
    })

    it("Deve altera o valor do objeto no local storage", () => {
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith("diobank", JSON.stringify(dioBank))
    })
})