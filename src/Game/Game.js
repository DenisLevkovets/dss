import React, {useEffect, useState} from 'react';
import './Game.css';
import actions from '../redux/actions'
import {connect} from "react-redux";
import {Button, Row, Col, Slider, InputNumber, message, Statistic} from "antd";
import EnemiesList from "./EnemiesList";

const cardSuits = {
    1: "https://cdn1.iconfinder.com/data/icons/sin-city-memories/128/suit-heart-512.png",
    2: "https://svgsilh.com/svg/145116.svg",
    3: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Card_club.svg/1200px-Card_club.svg.png",
    4: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Emoji_u2666.svg/1200px-Emoji_u2666.svg.png"
}

// const cards = [{suit: "1", value: "Q"}, {suit: "2", value: "2"}, {suit: "3", value: "T"}, {
//     suit: "3",
//     value: "Q"
// }, {suit: "4", value: "K"}]


function Game(props) {
    let [choosenCards, setChoosenCards] = useState([])
    let [value, setValue] = useState(0)
    let {isTurn} = props
    // let [isTurn, setIsTurn] = useState(false)

    useEffect(() => {
        (async function () {
            await props.getCards()
            await props.getAmounts()
            await props.getIsTurn()
            await props.getBets()
        })()
    },[])


    useEffect(() => {

    }, [isTurn])

    const changeCards = async () => {
        if (isTurn) {
            await props.changeCards(choosenCards)
            setChoosenCards([])
        } else {
            message.error("Not your turn")
        }
    }

    const timeOver = () => {
        message.info("ok")
    }

    if(props.cards===undefined) return  <div>asd</div>
    return (
        <div className="Game">
            <EnemiesList amounts={props.amounts} bets={props.bets}/>
            <div className="container">
                <div className="cards">
                    {props.cards.map((card, index) => (
                        <div className={choosenCards.includes(index) ? "card active" : "card"} key={index}
                             onClick={() => {
                                 if (choosenCards.includes(index)) setChoosenCards(choosenCards.filter(id => id !== index))
                                 else setChoosenCards(choosenCards.concat(index))
                             }}>
                            <img src={cardSuits[card.suit]} className={'suit'}/>
                            <p className={'value'}>{card.value}</p>
                        </div>
                    ))}
                </div>
                <div className={"controlBtns"}>
                    <Button type={'primary'} className={"controlBtn"} onClick={() => changeCards()}>Change</Button>
                    <Button className={"controlBtn"} onClick={()=>props.updateAmount(Math.max.apply(Math, props.bets))}>Call</Button>
                    <Button className={"controlBtn"}>Fall</Button>
                    <Button className={"controlBtn"} onClick={()=>props.updateAmount(value)}>Rise</Button>
                    <Row className={"range"}>
                        <Col span={12}>
                            <Slider
                                min={Math.max.apply(Math, props.bets)}
                                max={props.amounts?props.amounts[0]:1000}
                                onChange={(value) => setValue(+value)}
                                value={value}
                            />
                        </Col>
                        <Col span={4}>
                            <InputNumber
                                min={Math.max.apply(Math, props.bets)}
                                max={props.amounts?props.amounts[0]:1000}
                                style={{margin: '0 16px'}}
                                value={value}
                                onChange={(value) => setValue(+value)}
                            />
                        </Col>
                    </Row>
                </div>

                {isTurn ? <Statistic.Countdown value={Date.now() + 1000 * 30} onFinish={timeOver}/> : true}
                <div>Amount: {props.amounts?props.amounts[0]:0}</div>
                <div>Bet: {props.bets?props.bets[0]:0}</div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        cards: state.game.cards,
        amounts: state.game.amounts,
        bets: state.game.bets,
        isTurn: state.game.isTurn
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCards: () => dispatch(actions.game.getCards()),
        changeCards: () => dispatch(actions.game.changeCards()),
        getAmounts: () => dispatch(actions.game.getAmounts()),
        updateAmount: (amount) => dispatch(actions.game.updateAmount(amount)),
        getBets: () => dispatch(actions.game.getBets()),
        getIsTurn: () => dispatch(actions.game.getIsTurn()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Game);
