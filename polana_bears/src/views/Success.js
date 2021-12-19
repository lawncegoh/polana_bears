import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import {
    Container
} from "reactstrap";
import axios from 'axios';

export default class Success extends Component {
    constructor(props) {
        super(props)

        this.state = {
            walletAdd: '',
            discordUser: '',
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);

        axios.post('https://sheet.best/api/sheets/edc21d29-8abc-49b2-b3c0-7df6a3630da8', this.state) 
        .then (response => {
            window.location.href = "https://polanabears.com/puzzles"
        })
    }

    render() {

        const form = {
            container: {
                textAlign: "center",
                paddingTop: "2%",
                width: "50%",
            },
            words: {
                color: "white"
            }
        }

        const { walletAdd, discordUser } = this.state;
        return (
            <Container style={form.container}>
                <h1 style={form.words}>Congrats for completing the puzzle!</h1>
                <h3 style={form.words}>Fill in the form below to get your snowflake!</h3>
                <Form className="form" onSubmit={this.submitHandler}>
                    <Form.Group className="mb-3" controlId="formWalletAdd">
                        <Form.Label style={form.words}>Wallet Address</Form.Label>
                        <Form.Control type="text" name="walletAdd" value={walletAdd} placeholder="Enter Wallet Address" onChange={this.changeHandler}/>
                        <Form.Text className="text" style={form.words}>
                            We'll never share your wallet address with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDiscordUser">
                        <Form.Label style={form.words}>Discord Username</Form.Label>
                        <Form.Control type="text" name="discordUser" value={discordUser} placeholder="Enter Discord Username" onChange={this.changeHandler}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}
