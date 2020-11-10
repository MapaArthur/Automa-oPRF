import React from "react";
import { Container, Row, Col, FormGroup, InputGroup, InputGroupAddon, InputGroupText, FormInput, CardBody, Card, Button, Form } from "shards-react";
import RestApi from "../module/RestApi"
import Cookies from "../module/Cookies"
import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";
import Pagination from "../components/common/Pagination";

export default class UserProfileLite extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ocorrencias: [],
      form: {
        inputFilter: {
          id: "inputFilter",
          value: ""
        }
      },
      activePage: 1,
      pageRangeDisplayed: 5,
      itemsCountPerPage: 10,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  onChangeInput(value, id) {
    let { form } = this.state;
    form[id].value = value;
    this.setState({ form });
  }

  componentDidMount() {
    RestApi.GetOcorrencias().then((res) => {
      console.log(res)
      let ocorrencias = res;
      this.setState({
        ocorrencias
      })
    }).catch((e) => {
      console.log("error", e);
    });
  }

  handlePageChange(page) {
    this.setState({ activePage: page });
  }

  renderList(list) {
    let sl = list.slice((this.state.activePage - 1) * this.state.itemsCountPerPage, this.state.activePage * this.state.itemsCountPerPage);
    return sl.map((item, idx) => (
      <Col xl={6} key={idx}>
        <Card className="mt-3">
          <CardBody>
            <Row>
              <Col lg={9}>
                <div className="d-flex flex-column ml-3">
                  <span>
                    Causa: <span className="text-muted">{item.causa_acidente}</span>
                  </span>
                  <span>
                    Classificação: <span className="text-muted">{item.classificacao_acidente}</span>
                  </span>
                  <span>
                    UF: <span className="text-muted">{item.uf}</span>
                  </span>
                </div>
              </Col>
              <Col lg={3} className="d-flex justify-content-center">
                <Form action={`https://www.google.com.br/maps/search/${item.latitude}+${item.longitude}`} method="get" target="_blank">
                  <Button onClick="window.location.href="
                    type="submit"
                  >
                    <i className="fas fa-globe-europe fa-2x"></i>

                  </Button>
                </Form>

              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    ));
  }


  render() {
    let filter = this.state.form.inputFilter.value.toUpperCase();
    let list = this.state.ocorrencias.filter(i => {
      let causa_acidente = i.causa_acidente.toUpperCase();
      return (causa_acidente.includes(filter))
    })
    return (
      <div>
        <Container fluid className="main-content-container px-4">
          <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="Ocorrências" subtitle="Listagem" className="text-sm-left" />
          </Row>
          <Row >
            <Col lg="4" className="mb-3">
              <FormGroup className="mb-0">
                <InputGroup>

                  <FormInput
                    placeholder="Procure pela ocorrência"
                    id={this.state.form.inputFilter.id}
                    value={this.state.form.inputFilter.value}
                    onChange={(e) => this.onChangeInput(e.target.value, this.state.form.inputFilter.id)} />
                  <InputGroupAddon type="append">
                    <InputGroupText><i className="fas fa-search" /></InputGroupText>
                  </InputGroupAddon>
                </InputGroup>

              </FormGroup>
            </Col>
          </Row>
          <Row>
            {
              this.renderList(list)
            }
          </Row>
          <Row className="mt-5 mb-5">
            {list.length !== 0 &&
              <Pagination

                outline
                activePage={this.state.activePage}
                itemsCountPerPage={this.state.itemsCountPerPage}
                totalItemsCount={list.length}
                pageRangeDisplayed={this.state.pageRangeDisplayed}
                onChange={this.handlePageChange}
              />
            }
          </Row>

        </Container>
      </div>
    )
  }
}