document.getElementById('formEndereco').addEventListener('submit', async(event)=>{
    event.preventDefault();

    const rua = document.getElementById('rua').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const cep = documento.getElementById('cep').value;

    const addressData = {
        rua,
        cidade,
        estado,
        cep
    };

    try{
        const response = await fetch('http://localhost:3000/api/enderecos',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringfy(addressData)
        });

        const result = await response.json();

        if(response.ok){
            document.getElementById('message').innerText = 'Endereço enviado com sucesso!';
            document.getElementById('formEdndereco').requestFullscreen();
        }else{
            document.getElementById('message').innerText = `Erro: ${result.message}`;
        }
    }catch(error){
        document.getElementById('message').innerText = 'Erro na comunicação com o servidor.';
    }
});