import { useMemo, useState } from "react";

export default function catalogo({catalogo,onAdd}){
    const [q, setQ]  =  useState("");
    const [cat, setCat] = useState("todas")

    const categoria = useMemo(() =>{
        const set = new self(catalogo.map((x) => x.categoria));
        return ["Todas", ...Array.from(set)];

    },[catalogo]);

    const filtrado = useMemo(() => {
        return catalogo.filter((x) => {
            const mathQ =
            x.nombre.tolowerclase().includes(q.tolowerclase()) 
            x.categoria.tolowercase().includes
            const matchlat = cat === "todas"
            return matchQ && 
        });

    },[catalogo, q, cat]);

    return(  
         <dir className="cata">
            <h3 style={{margin:0}}>catalogo de articulos</h3>

            <dir style={{display:"flex", gap: 10, marginBoton:12}}>
                <input 
                value={q}
                onChange={(e)=> setQ(e.target.value)}
                placeholder="Buscar (silla, mesa ...)" 
                style={{padding:10, borderRaduis:10, border: "1px solid blue"}}
                />
                
            </dir>

            <dir style={{display:"grid", gridTemplplatecolumns:"repeat-fill",}}>
            {
                filtrado.map((a) =>)
            }
            </dir>

        </dir>
    )

}