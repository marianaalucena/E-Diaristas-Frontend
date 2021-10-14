export const ValidationService = {
  cep(cep = ""): boolean {
    return cep.replace(/\D/g, "").length === 8; //substituindo tudo que for digito por string vazia
  },
};
