import React from 'react';
import './App.css';
import List from './composition/List';

function App(props) {
  const STORE = props.store;
  console.log(STORE);
  const lists = STORE.lists.map(
    (list)=>{
      return <List  listObject={list} allCards={STORE.allCards} />
    }
  )
  /*const listComponent = function(){
    let arrayOfListComponents;
    for(let i=0; i<STORE.lists.length; i++){
      let cardsObjectArray = function(){
        let arrayConstructor;
        let arrayIndex = STORE.lists[i].cardIds;
        for(let j=0; j<arrayIndex.length; j++){
          arrayConstructor.push(STORE.allCards[arrayIndex[j]]);
        }
        return arrayConstructor;
      }
      arrayOfListComponents.push(
          <List header={STORE.lists[i].header} cards={cardsObjectArray}/>
      );
    }
    return arrayOfListComponents;
  };*/

  //console.log(listComponent);

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
      </div>
      
    </main>
  );
}

export default App;