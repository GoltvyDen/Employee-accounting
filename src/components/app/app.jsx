import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Martin S.', salary: 900, increase: false, id: 1},
                {name: 'Alise H.', salary: 1800, increase: false, id: 2},
                {name: 'Arthur M.', salary: 2000, increase: false, id: 3},
                {name: 'Chris J.', salary: 750, increase: false, id: 4},
                {name: 'Roger B.', salary: 1700, increase: false, id: 5},
                {name: 'Abigale W.', salary: 2500, increase: false, id: 6}
            ]
        }
        this.maxId = 7; 
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });

    }
    render() {
        const {data} = this.state;
        
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={data}
                    onDelete={this.deleteItem}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;