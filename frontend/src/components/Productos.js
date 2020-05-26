import React from 'react';



class Productos extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
            productos:[]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitVender = this.handleSubmitVender.bind(this);
        console.log(this.props);
    }
    componentWillMount() {
        fetch('http://127.0.0.1:8000/api/producto')
          .then((response) => {
            return response.json()
          })
          .then((productos) => {
            this.setState({ productos: productos })
            console.log(this.state);
          })
      }
      
        refreshPage() {
         window.location.reload(false);
        }
        
      async handleSubmit(event) {
        
        var id = event.target[0].value
        try {
            let config = {
                method:'DELETE',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            }
            let res = await fetch('http://127.0.0.1:8000/api/eliminar/'+id,config);
            let json = await res.json();
            
        } catch (error) {
            
        }
        
        
    }
    async handleSubmitVender(event) {
       
        var id = event.target[0].value
        try {
            let config = {
                method:'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            }
            let res = await fetch('http://127.0.0.1:8000/api/vender/'+id,config);
            let json = await res.json();
            if(json===1){
                alert('Vendido');
            }else{
                alert('No hay stock disponible');
            }
        } catch (error) {
            
        }
        
        
    }
    
    render(){
       

        return(
           
            <div>
                <button onClick={this.refreshPage}>Recargar tabla</button>
                <table>
                    <th>
                        Nombre
                    </th>
                    <th>
                        Referencia
                    </th>
                    <th>
                        Peso
                    </th>
                    <th>
                        Categoria
                    </th>
                    <th>
                        Stock
                    </th>
                    <th>
                        Acciones
                    </th>
                    {this.state.productos.map((element)=>{
                       return(
                           <tr>
                               <td>{element.name}</td>
                               <td>{element.referencia}</td>
                               <td>{element.peso}</td>
                               <td>{element.categoria}</td>
                               <td>{element.stock}</td>
                               <td>
                                   <form onSubmit={this.handleSubmit}><input type="hidden" value={element.id}></input><input type="submit" value="eliminar"></input></form>
                                   <a href={"/editar/"+element.id}>Editar</a>
                                   <form onSubmit={this.handleSubmitVender}><input type="hidden" value={element.id}></input><input type="submit" value="Vender"></input></form>

                                   
                                   
                               </td>
                            </tr>)
                       
                    })}
                </table>
            </div>
            
        );
    }
}
export default Productos;