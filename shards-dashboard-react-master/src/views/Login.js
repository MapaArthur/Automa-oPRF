import React from "react";
import GoogleLogin from "react-google-login";
import { Link, Redirect } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardBody,
    CardImg,
    Form,
    FormInput,
    FormGroup,
} from "shards-react";
import { RestApi, Mask, Cookies } from "../module";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            awaitingLogin: false,
            loginMsg: null,
            logged: false,
            form: {
                username: {
                    id: "Username",
                    value: "",
                },
                password: {
                    id: "Password",
                    value: "",
                },
                role: {
                    id: "Role",
                    value: "",
                }
            }
        };
    }

    onInputChange(e) {
        e.preventDefault();
        let { form } = this.state;
        let inputValue = e.target.value;
        switch (e.target.id) {
            case form.username.id:
                form.username.value = inputValue;
                break;
            case form.password.id:
                form.password.value = inputValue;
            default:
                break;
        }

        this.setState({ form });
    }

    login(e) {
        e.preventDefault();
        this.setState({ logged: true });
    }

    responseGoogle = (response) => {
        console.log(response.profileObj)
        RestApi.InsertUser(response.profileObj).then((res) => {
            if (res == 1) {
                let ld = {    
                    name: response.profileObj.name,
                    photo: response.profileObj.imageUrl
                }
                if (Cookies.createCookie(Cookies.LOGIN_DATA, ld, 1, Cookies.LOGIN_DATA_KEY)) {
                    this.setState({ loginMsg: null, awaitingLogin: false, logged: true });
                } else {
                    this.setState({ awaitingLogin: false, loginMsg: "Um erro inesperado ocorreu. Por favor tente mais tarde." })
                }
            }
        }).catch((e) => {
            console.log("error", e);
        });
    }

    render() {
        if (this.state.logged) {
            return <Redirect to="/ocorrencias" />
        } else {
            return (
                <main>
                    <Container>
                        <Row className="justify-content-center mt-5">
                            <Col xs="4">
                                <Card>
                                    <CardBody>
                                        <Container style={{ width: "300px" }} className="text-center">
                                            <CardImg src={require("../images/loginPRF.png")} height="150" className="mb-3" />
                                        </Container>
                                        <Form className="mb-1" onSubmit={this.login.bind(this)}>
                                            <FormGroup>
                                                <FormInput
                                                    // required
                                                    type="text"
                                                    placeholder="Anonimo"
                                                    value="Anonimo"
                                                    id={this.state.form.username.id}
                                                />
                                            </FormGroup>
                                            <FormGroup>
                                                <FormInput
                                                    // required
                                                    type="password"
                                                    value="Anonimo"
                                                    placeholder="Anonimo"
                                                    id={this.state.form.password.id}
                                                />
                                            </FormGroup>
                                            <Button type="submit" theme="primary" block disabled={this.state.awaitingLogin}>
                                                {this.state.awaitingLogin ? (
                                                    <div className="spinner-border spinner-border-sm" role="status">
                                                        <span className="sr-only">Loading...</span>
                                                    </div>
                                                ) : (
                                                        <strong>Entrar</strong>
                                                    )}
                                            </Button>
                                            <GoogleLogin clientId="850785370426-1aeiid382lflj8doh18fvsfs0teljl8s.apps.googleusercontent.com"
                                                className="google-login w-100 mt-1"
                                                onSuccess={this.responseGoogle}
                                                scope="profile"
                                                prompt="select_account"
                                                fetchBasicProfile={false}
                                                responseHandler={this.responseGoogle}
                                                buttonText="Login With Google">
                                            </GoogleLogin>
                                        </Form>
                                        {!this.state.awaitingLogin && this.state.loginMsg && (
                                            <p className="small text-center text-danger">{this.state.loginMsg}</p>
                                        )}
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </main>
            )
        }
    }
}