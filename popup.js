export function loginError(){
    swal({
      title: 'Login Inválido', 
      text: 'Usuário ou Senha incorreto',
      icon: 'error'
    })
  }
  
export function loginSuccess(){
    swal({
      title: 'Bem Vindo', 
      text: 'Login Efetuado com Sucesso',
      icon: 'success'
    })
  }
  
  export function cadError(){
    swal({
      title: 'Cadastro não efetuado', 
      text: 'Error na hora do cadastro tente novamente',
      icon: 'error'
    })
  }
  
  export function cadSuccess(){
    swal({
      title: 'Cadastro Efetuado', 
      text: 'Cadastro efetuado com sucesso',
      icon: 'success'
    })
  }
  
  export function delError(){
    swal({
      title: 'Error na Exclusão', 
      text: 'Exclusão não efetuada tente novamente',
      icon: 'error'
    })
  }
  
  export function delSuccess(){
    swal({
      title: 'Exclusão Feita', 
      text: 'Excluido com Sucesso',
      icon: 'success'
    })
  }
  
  export function altError(){
    swal({
      title: 'Error na atualização dos dados', 
      text: 'Atualização não efetuada tente novamente',
      icon: 'error'
    })
  }
  
  export function altSuccess(){
    swal({
      title: 'Atualização dos dados feita', 
      text: 'Dados atualizados com sucesso',
      icon: 'success'
    })
  }

