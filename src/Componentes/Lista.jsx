import {useState,useEffect} from 'react'

const Lista=()=>{
    const [repositorio,setRepo]=useState([])
    const [filtroRepo, setFiltro]=useState([])
    const [busca, setBusca]=useState('')
    
   
    useEffect(()=>{
        async function pegarDados(){
            // const input=document.getElementById('input')

            const response= await fetch(`https://api.github.com/users/micheleset7/repos`)
            console.log(response)
            const dados=await response.json()
            setRepo(dados)
        }
    pegarDados()

    },[])

    useEffect(()=>{
        setFiltro(
            repositorio.filter(item=>{
               return item.name.includes(busca)
            })

        )
    },[busca,repositorio])
   
    return(
        <>
        {/* <input id='input' type="text" placeholder='Digite seu User' onInput={e=>{e.target.value}}/> */}
        <input className='input' type="text" placeholder='Digite um repositório' onChange={(e)=>{setBusca(e.target.value)}}/>
        <ul>
        {filtroRepo.map(item=>{
           return <li  key={item.id}>{item.name}</li>
        })}
        </ul>

        </>

    )
}
export default Lista