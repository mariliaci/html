import '../style/Cadastro.css'

const Cadastro = ()=> {
    function clicar(){
        alert("Cadastro realizado com sucesso")
        const um = document.getElementById('primeirotexto').value
        const dois = document.getElementById('segundotexto').value
        const tres = document.getElementById('terceirotexto').value
        const quatro = document.getElementById('quartotexto').value
        const cinco = document.getElementById('quintotexto').value
        const seis = document.getElementById('sextotexto').value
        const sete = document.getElementById('setimotexto').value

        const listavagas = [um, dois, tres, quatro, cinco, seis, sete]
        console.log (listavagas)
        event.preventDefault();
    }
    
    
    return(
        <form action="">
        <label for="Placa do veículo">Placa do veículo</label>
        <input type="text" name="Placa do veículo" id="primeirotexto" />

        <label for="Nome do Proprietário">Nome do Proprietário</label>
        <input type="text" name="Nome do Proprietário" id="segundotexto" />

        <label for="Numero do apartamento">Numero do apartamento</label>
        <input type="text" name="Numero do apartamento" id="terceirotexto" />

        <label for="Bloco do apartamento">Bloco do apartamento</label>
        <input type="text" name="Bloco do apartamento" id="quartotexto" />

        <label for="modelo do veículo">modelo do veículo</label>
        <input type="text" name="modelo do veículo" id="quintotexto" />

        <label for="Cor do veículo">Cor do veículo</label>
        <input type="text" name="Cor do veículo" id="sextotexto" />

        <label for="Número da vaga do estacionamento">Número da vaga do estacionamento</label>
        <input type="text" name="Número da vaga do estacionamento" id="setimotexto" />

        <input type="submit" value="Salvar" onClick={clicar} />
    </form>
    )
}

export default Cadastro