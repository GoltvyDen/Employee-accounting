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
                {name: 'Martin S.', salary: 900, increase: false, rise: true, id: 1},
                {name: 'Alise H.', salary: 1800, increase: true, rise: false, id: 2},
                {name: 'Arthur M.', salary: 2000, increase: false, rise: false, id: 3},
                {name: 'Chris J.', salary: 1200, increase: true, rise: false, id: 4},
                {name: 'Roger B.', salary: 1700, increase: true, rise: true, id: 5},
                {name: 'Abigale W.', salary: 2500, increase: false, rise: false, id: 6},
                {name: 'Sharon K.', salary: 1400, increase: true, rise: true, id: 7}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 8; 
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
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searcEmp = (items, term) => {
        if  (term.length === 0) {
            return items;
        }
        
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterEmp = (items, filter) => {
        switch (filter) {
            case 'rise': 
                return items.filter(item => item.rise);
            case 'salary':
                return items.filter(item => item.salary > 1500);
            default:
                return items;
        }
    }

    onUpdateFilter = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterEmp(this.searcEmp(data, term), filter);
        
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onUpdateFilter={this.onUpdateFilter}/>
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    selectSalary={this.selectSalary}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;