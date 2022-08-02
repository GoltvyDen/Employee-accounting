import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label:'Все сотрдуники'},
        {name: 'rise', label:'На повышение'},
        {name: 'salary', label:'З/П больше 1500$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const activeBtn = props.filter === name;
        const clazz = activeBtn ? 'btn-light' : 'btn-outline-light';

        return (
            <button 
                type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onUpdateFilter(name)}>
                {label}
            </button>
        )
    })


    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;