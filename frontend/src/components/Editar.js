import React from 'react';
import Producto from '../models/producto.model';
class Editar extends React.Component{
    constructor(props){
        super(props);
        this.producto = new Producto('','','','','','');
        this.state = {
            
        };
        
         
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount() {
        const { match } = this.props;
        var id = match.params.id;
        fetch('http://127.0.0.1:8000/api/getproducto/'+id)
          .then((response) => {
            return response.json();
          })
          .then((producto) => {
              this.producto = producto;
            this.setState(this.producto);
           
            //console.log(this.state);
          })
      }
    handleInputChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]:value});
        //console.log(this.state);
    }
    async handleSubmit(e){
        e.preventDefault();
        const { match } = this.props;
        var id = match.params.id;
        this.producto = this.state;
        try {
            let config = {
                method:'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.producto)
            }
            let res = await fetch('http://127.0.0.1:8000/api/actualizarProducto/'+id,config);
            let producto = await res.json();
            
            this.setState(producto);
            console.log(this.state);
        } catch (error) {
            
        }
    }
    render(){
       //console.log(this.state);
        return(
            <div>
            <h1>Editar </h1>
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>Nombre: </label> 
                </p>
                <p>
                    <input type="text" name="name" ref="name"  onChange={this.handleInputChange}  value={this.state.name} required/>
                </p>
                <p>
                    <label>Referencia: </label>
                </p>
                <p>
                    <input type="text" name="referencia" onChange={this.handleInputChange} value={this.state.referencia} required></input>
                </p>
                <p>
                    <label>Peso: </label>
                </p>
                <p>
                    <input type="number" name="peso"  onChange={this.handleInputChange} value={this.state.peso} required></input>
                </p>
                <p>
                    <label>Categoria: </label>
                </p>
                <p>
                    <input type="text" name="categoria"  onChange={this.handleInputChange} value={this.state.categoria} required></input>
                </p>
                <p>
                    <label>Stock: </label>
                </p>
                <p>
                    <input type="number" name="stock" onChange={this.handleInputChange} value={this.state.stock} required></input>
                </p>
                <p>
                    <label>Precio: </label>
                </p>
                <p>
                    <input type="number" name="precio" onChange={this.handleInputChange} value={this.state.precio} required></input>
                </p>
                <input type="submit" value="Registrar"></input>
            </form>
        </div>
        );
    }
}
export default Editar;