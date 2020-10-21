import React, {useEffect, useState} from 'react';
import {Input,Button, Form} from 'antd';
import './App.css';
import actions from '../redux/actions'
import {connect} from "react-redux";


function App(props) {
    function onFinish(values){
        console.log(values.port)
        props.history.push('/game')
    }
    return (
        <div className="App">
            <Form onFinish={onFinish}>
                <Form.Item name={"port"}>
                    <Input placeholder={"Введите свой порт"}/>
                </Form.Item>
                <Form.Item>
                    <Button htmlType={'submit'}>NEXT</Button>
                </Form.Item>
            </Form>

        </div>
    );
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
