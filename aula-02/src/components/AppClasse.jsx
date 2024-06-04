import React from "react";

class AppClasse extends React.Component{
    componentDidMount(){
        alert("Executou");
    }

    componentDidUpdate(){
        alert("Atualizou");
    }

    componentWillUnmount(){
        alert("Remover da DOM")
    }
    render(){
        return(
            <div>
                <h1>Componente de Classe</h1>
            </div>
        )
    }

}
export default AppClasse;