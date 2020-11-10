import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    FormSelect,
    FormGroup,
    FormInput,
    Form,
    Button
} from "shards-react";

import { RestApi, Mask, Cookies } from "../module"
import { Link } from "react-router-dom";

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                Nome: {
                    id: "nome",
                    value: "",
                },
                Sobrenome: {
                    id: "sobrenome",
                    value: "",
                },
                Email: {
                    id: "email",
                    value: "",
                },
                Telefone: {
                    id: "telefone",
                    value: ""
                },
                Senha: {
                    id: "senha",
                    value: "",
                },
                DataNascimento: {
                    id: "datanascimento",
                    value: "",
                },
                Genero: {
                    id: "genero",
                    value: "",
                }
            },
            awaitingSubmit: false
        }
    };

    onChange(e) {
        e.preventDefault();
        let { form } = this.state;
        let inputValue = e.target.value;
        switch (e.target.id) {
            case form.Nome.id:
                form.Nome.value = inputValue;
                break;
            case form.Sobrenome.id:
                form.Sobrenome.value = inputValue;
                break;
            case form.Email.id:
                form.Email.value = inputValue;
                break;
            case form.Telefone.id:
                form.Telefone.value = inputValue;
                break;
            case form.Senha.id:
                form.Senha.value = inputValue;
                break;
            case form.DataNascimento.id:
                form.DataNascimento.value = inputValue;
                break;
            case form.Genero.id:
                form.Genero.value = inputValue;
                break;
        }
        this.setState({ form })
    }
    onRegister(e) {
        e.preventDefault();
        this.setState({ awaitingSubmit: true })
        let { form } = this.state;
        let body = {
            description: form.description.value,
            initials: form.initials.value,
            email: form.email.value,
            url: form.url.value
        }
        console.log(body);
        RestApi.InsertSystem(body).then((data) => {
            console.log(data)
            if (data.status == "200") {
                this.setState({ awaitingSubmit: false })
                window.alert("Operação realizada com sucesso.");
                this.ClearAll();
            }
        }).catch((e) => {
            console.log("erro", e);
        });
    }

    ClearAll() {
        let form = this.state.form;
        form.description.value = "";
        form.url.value = "";
        form.email.value = "";
        form.initials.value = "";
        this.setState({ form: form });
    }
    render() {
        return (
            <Container fluid className="main-content-container px-4">
                <Row className="d-flex justify-content-center mt-4">
                    <Col lg="8">
                        <Card className="cardRegister">
                            <Form onSubmit={this.onRegister.bind(this)}>
                                <CardBody>
                                    <Row>
                                        <Col md="4" className="cardGrenn">
                                            <Row className="centerTopDown h-100">
                                                <div className="white w-100">
                                                    <p style={{ fontSize: "24px" }} className="center">Cadastro</p>
                                                    <p style={{ fontSize: "12px" }} className="center">Educação para o patrimônio e formação de professores. Educação sensível e patrimônio das habilidades.</p>
                                                </div>
                                            </Row>
                                        </Col>
                                        <Col md="8">
                                            <Row>

                                                <Col md="6" className="form-group">
                                                    <FormGroup>
                                                        <label htmlFor={this.state.form.Nome.id}>Nome<span style={{ color: "red" }}>*</span></label>
                                                        <FormInput
                                                            required
                                                            type="text"
                                                            className="form-control"
                                                            id={this.state.form.Nome.id}
                                                            value={this.state.form.Nome.value}
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6" className="form-group">
                                                    <FormGroup>
                                                        <label htmlFor={this.state.form.Sobrenome.id}>Sobrenome<span style={{ color: "red" }}>*</span></label>
                                                        <FormInput
                                                            required
                                                            type="text"
                                                            className="form-control"
                                                            id={this.state.form.Sobrenome.id}
                                                            value={this.state.form.Sobrenome.value}
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md="6" className="form-group">
                                                    <FormGroup>
                                                        <label htmlFor={this.state.form.Email.id}>E-mail<span style={{ color: "red" }}>*</span></label>
                                                        <FormInput
                                                            type="email"
                                                            className="form-control"
                                                            id={this.state.form.Email.id}
                                                            value={this.state.form.Email.value}
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </FormGroup>
                                                </Col>

                                                <Col md="6" className="form-group">
                                                    <FormGroup>
                                                        <label htmlFor={this.state.form.Telefone.id}>Telefone<span style={{ color: "red" }}>*</span></label>
                                                        <FormInput
                                                            type="text"
                                                            className="form-control"
                                                            id={this.state.form.Telefone.id}
                                                            value={this.state.form.Telefone.value}
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6" className="form-group">
                                                    <FormGroup>
                                                        <label htmlFor={this.state.form.Senha.id}>Senha<span style={{ color: "red" }}>*</span></label>
                                                        <FormInput
                                                            type="password"
                                                            className="form-control"
                                                            id={this.state.form.Senha.id}
                                                            value={this.state.form.Senha.value}
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6" className="form-group">
                                                    <FormGroup>
                                                        <label htmlFor={this.state.form.DataNascimento.id}>Data de Nascimento<span style={{ color: "red" }}>*</span></label>
                                                        <FormInput
                                                            type="date"
                                                            className="form-control"
                                                            id={this.state.form.DataNascimento.id}
                                                            value={this.state.form.DataNascimento.value}
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col md="6" className="form-group">
                                                    <FormGroup>
                                                        <label htmlFor={this.state.form.Genero.id}>Genero</label>
                                                        <FormInput
                                                            type="text"
                                                            className="form-control"
                                                            id={this.state.form.Genero.id}
                                                            value={this.state.form.Genero.value}
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row className="d-flex justify-content-center">
                                                <Col md="4">
                                                    <Button block tag={Link} to={`/login/`} className="Fundogreen">
                                                        <span>Voltar <i class="fas fa-arrow-alt-circle-left"></i></span>
                                                    </Button>
                                                </Col>
                                                <Col md="4">
                                                    <Button block type="submit" className="Fundogreen">
                                                        {this.state.awaitingSubmit ?
                                                            <div className="spinner-border spinner-border-sm" role="status">
                                                                <span className="sr-only">Loading...</span>
                                                            </div>
                                                            : <span>Cadastrar <i class="fas fa-save"></i></span>
                                                        }
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}