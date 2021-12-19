import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import {
    Container
} from "reactstrap";
import axios from 'axios';
import {
    Row,
    Col
} from 'reactstrap';
import Step1 from '../assets/img/Step1.jpg';
import Step2 from '../assets/img/Step2.jpg';
import Step3 from '../assets/img/Step3.jpg';
import Step4 from '../assets/img/Step4.jpg';

export default class Success extends Component {
    constructor(props) {
        super(props)

        this.state = {
            walletAdd: '',
            discordUser: '',
            tokenAddress: '',
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);

        axios.post('https://sheet.best/api/sheets/b21d6909-1cf5-4c02-83d5-750d44bc3eb3', this.state)
            .then(response => {
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
                color: "white",
            },
            steps: {
                color: "white",
                fontSize: "15px",
            }
        }

        const imgStyling = {
            img1: {
                height: "400px",
                width: "220px",
            },
            img2: {
                height: "400px",
                width: "700px",
                justifyContent: "center"
            }
        }

        const { walletAdd, discordUser, tokenAddress } = this.state;
        return (
            <Container style={form.container}>
                <h3 style={form.words}>Congrats on successfully minting a snowflake! You can find your NFT in your phantom wallet :-)</h3>
                <h5 style={form.words}>Fill in the form below</h5>
                <Form className="form" onSubmit={this.submitHandler}>
                    <Form.Group className="mb-3" controlId="formWalletAdd">
                        <Form.Label style={form.words}>Wallet Address</Form.Label>
                        <Form.Control type="text" name="walletAdd" value={walletAdd} placeholder="Enter Wallet Address" onChange={this.changeHandler} />
                        <Form.Text className="text" style={form.words}>
                            We'll never share your wallet address with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDiscordUser">
                        <Form.Label style={form.words}>Discord Username</Form.Label>
                        <Form.Control type="text" name="discordUser" value={discordUser} placeholder="Enter Discord Username" onChange={this.changeHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formTokenAddress">
                        <Form.Label style={form.words}>Token Address</Form.Label>
                        <Form.Control type="text" name="tokenAddress" value={tokenAddress} placeholder="Enter Token Address" onChange={this.changeHandler} />
                        <Form.Text className="text" style={form.words}>
                            Follow the steps below to obtain your token address!
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <br />
                <Container>
                    <Row>
                        <Col>
                            <h5 style={form.words}>Step 1:</h5>
                            
                            <img src={Step1} alt="Step 1" style={imgStyling.img1} />
                            <h5 style={form.steps}>Go to phantom wallet</h5>
                        </Col>
                        <Col>
                            <h5 style={form.words}>Step 2:</h5>
                            <img src={Step2} alt="Step 2" style={imgStyling.img1} />
                            <h5 style={form.steps}>Click on second icon on bottom navbar to view minted snowflake</h5>
                        </Col>
                        <Col>
                            <h5 style={form.words}>Step 3:</h5>
                            <img src={Step3} alt="Step 3" style={imgStyling.img1} />
                            <h5 style={form.steps}>Click on "..." icon at top right to view snowflake on Solscan</h5>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <h5 style={form.words}>Step 4:</h5>
                            <img src={Step4} alt="Step 4" style={imgStyling.img2} />
                            <h5 style={form.steps}>Copy SPL Token Address into the form above</h5>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
