interface RepositoryItemProps {
  repository: {
    id: string;
    full_name: string;
    description: string;
    html_url : string;
    owner: any
    
  }
}
export function RepositoryItem(props: RepositoryItemProps){
 return <li>
  <strong>{props.repository.full_name}</strong>
  
  <p>{props.repository.description}</p>
  
  <a href={props.repository.html_url}>Acessar repositório</a>

 <img src={props.repository.owner.avatar_url}  width = '100px' alt="" />
 
</li>

}