import React,{Component} from 'react';
import TodoItems from './components/TodoItem/TodoItems';
import AddItem from './components/AddItem/AddItem';

class App extends Component{
  
  state = {
    items : [
      {id:1,name:'Hamza',age:22},
      {id:2,name:'Mohamed Ali',age:29},
      {id:3,name:'Manel',age:26},
      {id:4,name:'Rabia',age:50},
      {id:5,name:'Hamouda',age:70}
    ]
  }
  

  deleteItem = (id) =>{
       let items = this.state.items;
       let i = items.findIndex(item =>  item.id === id )
       items.splice(i,1); //REMOVE ITEM FROM ARRAY BY INDEX
       this.setState({items}) // KEY ANd VALUE SAME NAME == this.setState({items : items})
  }

  AddItem = (item) =>{
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }



  render(){
    return (
      <div className="App container">
        <h1 className="text-center">TODO LIST</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem AddItem={this.AddItem} />
      </div>
    );
  }
  
}

export default App;
