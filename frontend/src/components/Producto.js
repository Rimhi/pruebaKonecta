import React from 'react';
import Productos from './Productos';
class Producto extends React.Component{
    constructor(props) {
        super(props);
        this.state = { productos:[]};
     
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeReferencia = this.handleChangeReferencia.bind(this);
        this.handleChangePrecio = this.handleChangePrecio.bind(this);
        this.handleChangePeso = this.handleChangePeso.bind(this);
        this.handleChangeStock = this.handleChangeStock.bind(this);
        this.handleChangeCategoria = this.handleChangeCategoria.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      onProductoChanged(newProducto){
        this.setState({producto : newProducto}, ()=>{
          console.log('');
        })
      }
    
      handleChangeName(event) {
        this.setState({name: event.target.value});
      }
    
      handleChangePeso(event) {
        this.setState({peso: event.target.value});
      }
    
      handleChangeReferencia(event) {
        this.setState({referencia: event.target.value});
      }
    
      handleChangePrecio(event) {
        this.setState({precio: event.target.value});
      }
    
      handleChangeStock(event) {
        this.setState({stock: event.target.value});
      }
    
      handleChangeCategoria(event) {
        this.setState({categoria: event.target.value});
      }
    
      async handleSubmit(event) {
        
        //console.log(this.state);
        try {
            let config = {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state)
            }
            let res = await fetch('http://127.0.0.1:8000/api/guardarProducto',config);
            let json = await res.json();
            //console.log(json);
            this.setState({productos:json});
            
        } catch (error) {
            
        }
      }
    render(){
       
        return(
            <div>
                <h1>Ingresa Un producto</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>Nombre: </label> 
                    </p>
                    <p>
                        <input type="text" name="nombre"  onChange={this.handleChangeName}  required></input>
                    </p>
                    <p>
                        <label>Referencia: </label>
                    </p>
                    <p>
                        <input type="text" name="referencia"  onChange={this.handleChangeReferencia}  required></input>
                    </p>
                    <p>
                        <label>Peso: </label>
                    </p>
                    <p>
                        <input type="number" name="peso"  onChange={this.handleChangePeso} required></input>
                    </p>
                    <p>
                        <label>Categoria: </label>
                    </p>
                    <p>
                        <input type="text" name="categoria"  onChange={this.handleChangeCategoria} required></input>
                    </p>
                    <p>
                        <label>Stock: </label>
                    </p>
                    <p>
                        <input type="number" name="stock"  onChange={this.handleChangeStock} required></input>
                    </p>
                    <p>
                        <label>Precio: </label>
                    </p>
                    <p>
                        <input type="number" name="precio"  onChange={this.handleChangePrecio} required></input>
                    </p>
                    <input type="submit" value="Registrar"></input>
                </form>
                <Productos producto={this.state.producto}/>
            </div>
            
        );
    }
}
export default Producto;