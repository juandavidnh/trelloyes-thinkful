import React from 'react';
import './List.css';
import Card from './Card';

function List(props){
    //const cardArray = props.cards;
    const listObject = props.listObject;
    const allCards = props.allCards;
    const cards = listObject.cardIds.map(
        (cardId)=>{
            return <Card key={allCards[cardId].id} title={allCards[cardId].title} content={allCards[cardId].content} />
        }
        );
    /*const mapArray = function(){
        for(let i=0; i<cardArray.length; i++){
           return <Card key={cardArray[i].id} title={cardArray[i].title} content={cardArray[i].content} />
        }
    };*/
    //const mapArray = cardArray.map

    return(
    <section className="List">
        <header className="List-header">
            <h2>{props.listObject.header}</h2>
        </header>
        <div className="List-cards">
            {cards}
            <button type="button" class="List-add-button">
                + Add Random Card
            </button>
        </div>
        
    </section>
    )
}

export default List;