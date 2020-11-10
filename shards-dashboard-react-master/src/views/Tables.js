import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Tables = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Power BI" subtitle="Análise" className="text-sm-left" />
    </Row>
    <Row>
    <iframe width="100%" height="800" src="https://app.powerbi.com/view?r=eyJrIjoiZGYyYWFkMTItZjgyMC00OWRiLTg3MjktNzcyYWEzNjczYjkzIiwidCI6IjE0Y2JkNWE3LWVjOTQtNDZiYS1iMzE0LWNjMGZjOTcyYTE2MSIsImMiOjh9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
    </Row>
    
  </Container>
);

export default Tables;
