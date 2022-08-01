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
                {name: 'Martin S.', salary: 900, increase: false, rise: false, id: 1},
                {name: 'Alise H.', salary: 1800, increase: false, rise: false, id: 2},
                {name: 'Arthur M.', salary: 2000, increase: false, rise: false, id: 3},
                {name: 'Chris J.', salary: 1200, increase: false, rise: false, id: 4},
                {name: 'Roger B.', salary: 1700, increase: false, rise: false, id: 5},
                {name: 'Abigale W.', salary: 2500, increase: false, rise: false, id: 6}
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

    onToggleRise = (id) => {
        console.log(`Rise this ${id}`);
    }

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased}/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}
export default App;

// render() {
//     const employees = this.state.data.length;
//     const increased = this.state.data.filter(item => item.increase).length;
//     return (
//         <div className="app">
//             <AppInfo employees={employees} increased={increased}/>

//             <div className="search-panel">
//                 <SearchPanel/>
//                 <AppFilter/>
//             </div>
            
//             <EmployeesList 
//                 data={this.state.data}
//                 onDelete={this.deleteItem}
//                 onToggleProp={this.onToggleProp}/>
//             <EmployeesAddForm onAdd={this.addItem}/>
//         </div>
//     );
// }
// }

// export default App;