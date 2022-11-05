import EmployeesListItem from "../employees-list-item/employees-list-item"

import './employees-list.css'; 

const EmployeesList = ({data, onDelete, onToggleProp, changeSalary, addDollar}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key = {id} 
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                changeSalary={changeSalary}
                addDollar={addDollar}
                {...itemProps}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
} 

export default EmployeesList;