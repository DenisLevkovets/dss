import React, {useEffect, useState} from 'react';
import {Button} from 'antd';
import './App.css';
import EnemiesList from "./EnemiesList";
import actions from './redux/actions'
import {connect} from "react-redux";
import io from 'socket.io-client';


const socket = io('https://192.168.1.85:3000');

console.log(socket.connected); // false


function App(props) {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        (async function () {
            await props.getCounters();
        })()

    }, [props.counters])


    socket.on('connect', async () => {
        console.log(socket.connected); // true
        await props.connect()
    });

    socket.on('update', async (data) => {
        console.log(data)
        await props.getCounters()
    })

    socket.on('disconnect', async () => {
        console.log(socket.connected); // false
        await props.disconnect()
    });


    return (
        <div className="App">
            <EnemiesList counters={props.counters}/>
            <div className={"container"}>
                <h3 className={'counter'}>{props.counters ? props.counters[0].count : 0}</h3>
                <Button type={"primary"} onClick={() => props.count()}>
                    Click
                </Button>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        counters: state.counters,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCounters: () => dispatch(actions.counters.getCounters()),
        connect: () => dispatch(actions.counters.connect()),
        disconnect: () => dispatch(actions.counters.disconnect()),
        count: () => dispatch(actions.counters.count),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
