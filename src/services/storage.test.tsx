import { getAllLocalStorage } from "./storage"

describe("Storage", () => {

    const getItem = jest.spyOn(Storage.prototype, "getItem")
    it("Deve retornar o objeto no local storage", () => {
        getAllLocalStorage()
        expect(getItem).toHaveBeenCalled()
    })
})