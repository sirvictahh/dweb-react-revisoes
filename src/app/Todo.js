import React,{ useState } from "react";

function Todo() {
    const [tarefa, setTarefa] = useState('');
    const [dataConc, setDataConc] = useState(new Date());
    const [listaTarefas, setListaTarefas] = useState([]);
    const [update,setUpdate]=useState("");

    function addTarefa(){
        let novoItem = {"tarefa":tarefa, "dataConc":dataConc};
        let lista = listaTarefas==null?[]:listaTarefas;
        lista.push(novoItem);
        setListaTarefas(lista)
        setUpdate(update+"1")
        console.log(lista)
    }

    return <>
        <div className="row">
            <div className="col-md-3 col-sm-2">
                Descrição Tarefa
            </div>
            <div className='col-md-4 col-sm-9'>
                <input className='form-control' type='text' value={tarefa} onChange={(evt) => setTarefa(evt.target.value)} />
            </div>

            <div className="col-md-1 col-sm-2">
                Data
            </div>
            <div className='col-md-4 col-sm-9'>
                <input className='form-control' type='datetime-local' value={dataConc} onChange={(evt) => setDataConc(evt.target.value)} />
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-md-4 col-sm-9"><input className='form-control' type='button' onClick={() => {addTarefa() }} value={"Adicionar Tarefa"} /></div>
        </div>

        <div>
           <ul>
            {typeof listaTarefas!=null&&listaTarefas.map((tarefa,index)=>
            <div key={index} className="fo">
                <h2>{tarefa.tarefa}</h2>
                <h6>{tarefa.dataConc}</h6>
                {/*index*/}
            </div> )}
           </ul> 
        </div>
    </>;
}

export default Todo;