import { useState, useEffect } from "react"
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repository.scss'

// https://api.github.com/orgs/rocketseat/repos

interface Repository{
  id: string;
  full_name: string;
  description: string;
  html_url : string;
  owner: any
}

export function RepositoryList(){
const [repositories, setRepositories] = useState<Repository[]>([]);

useEffect(()=>{
  fetch('https://api.github.com/orgs/rocketseat/repos')
  .then(response => response.json())
  .then(data => setRepositories(data))
}, []);

  return(
    <section className = "repository-list"> 
    <h1>Lista de repositórios</h1>
    <ul>
      {repositories.map(repository => {

        console.log(repository)
        return <RepositoryItem key={repository.id} repository={repository}/>
      })}
        
       
    
    </ul>
    </section>
  )
}