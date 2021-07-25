class Validador {

  ValidaCampos(dados) {
    const {nome, idade, sexo, hobby, dataNascimento} = dados; 

    if(!nome){
      return "O nome do(a) Dev deve ser informado.";
    }

    if(!sexo){
     return "O sexo do(a) Dev deve ser informado.";
    }

    if(!idade){
     return "A idade do(a) Dev deve ser informado.";
    }

    if(!hobby){
     return "O hobby do(a) Dev deve ser informado.";
    }

    if(!dataNascimento){
     return "A data de nascimento do(a) Dev deve ser informado.";
    }

  }
}

module.exports = new Validador();