
import './App.css';
import { useMemo,useState} from 'react';
import { catalogoInnicial } from "./data/catalogo";
import NavBar from "./componentes/NavBar";
import catalogo from "./componentes/catalogo";

import Carrito from "./componentes/Carrito";
import Clienteform from "./componentes/Clienteform";
import Checkout from "./componentes/Checkout ";
import Historial from "./componentes/Historial";

function App() {
  const[vista, setvista] = useState("catalogo");
  const[catalogo] = useState(catalogoInnicial)
  const[carrito, setCarrito] = useState({})
  const[Cliente, setCliente] = useState({
    nombre:"",
   telefono:"",
   direccion:"",
   Fechaevente:"",
   dias:1,
  })
  const [historial, setHistorial] = useState([])

  const total = useMemo(()=>{
    const dias = Number(Cliente,dias 1);
    return carrito.reduce((acc, item) => acc + item.precioDia * item.cantidad * dias,0);

   
  }, [carrito,Cliente.dias]);

  Function agregarCarrito(articulo) {
    setCarrito((prev) => {
      const existe = prev.find((x) =>x,id === articulo.id);
      if(existe) {
        return prev.map((x) =>x.id === acticulo.id ? {...x, cantidad: x.cantidad+1}:x);
      }
      return[...prev,{...acticulo, cantidad:1}];
    });
  }

   function cambiarCantidad(id, cantidad){
    const cant = Number(cantidad);
    if (Number,isNaN(cant)) return;
    setCarrito((prev) => 
      prev
  .map((x.id === id ? {...x, cantidad : cant}:))
  .filter((x) =>x.cantidad > 0)
   );
   }

   function quitarDelcarrito(id){
    setCarrito((pre)=>prev.filter((x)=>x.id !==id));
   }

   function limpiarcarrito(){
     setCarrito([])
   }

   function comfirmaAlquiler(){
    const registro ={
      id:crypto.randomUUID
      fecha: new Date().toDateString().
      Cliente:{...Cliente},
      item:[...Carrito],
      total,
    };
    setHistorial((prev)=>)

   }

  return (
    <div className="App">
    <NavBar vista={vista} setvista=(setvista) carritoCount={carrito.length} />
    {vista==="catalogo" && (
      <catalogo catalogo={catalogo} onAdd={agregarCarrito} />
    )}
    {
      vista === "carrito" &&(
      <
      carrito
      carrito={carrito}
      onQty={cambiarCantidad}
      onRemove={quitarDelcarrito}
      onClear={limpiarcarrito}
      dias={Cliente.dias}
      total={total}
      onNext={()=>setVista("Cliente")}
      />
    )}

    {vista === "Cliente" && (
      <Clienteform
      Cliente={Cliente}
      setCliente={setCliente}
      onBlack={()=>setVista("checkout")}
      onNext={()=>setVista("checkout")}
      />
    )} 
    
    {vista==="checkout" &&(
      <Checkout
      Cliente={Cliente}
      carrito={carrito}
      total={total}
      onBlack={()=>setVista("Cliente")}
      onConfirm={comfirmaAlquiler}
      />
    )}

    </div>
  );
}

export default App;
