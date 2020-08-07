import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './styles.scss';

export class Step3 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { handleChange, CheckContent } = this.props;
    return (
      <div className="fullform">
        <div>
          <h2>Question pratique</h2>
        </div>
        <div>
          <h1>Pour mieux vous servir nous aurions besoin d’en savoir plus sur votre idee.</h1>
          <h2>Auriez vous une configuration en tete?</h2>
        </div>
        <Form.Row>
          <Col>
            <Button className="Form__button" name="yes" variant="primary" type="submit" onClick={CheckContent('preconfiguration')}> Oui </Button>
          </Col>
          <Col>
            <Button className="Form__button" name="no" variant="primary" type="submit" onClick={CheckContent('preconfiguration')}> Non </Button>
          </Col>
        </Form.Row>
        <h2>Ce serait pour quel utilisation ?</h2>
        <Form>
          {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check inline label="Gaming" name="Gaming" type={type} id={`inline-${type}-1`} onChange={CheckContent('utilisation')} />
              <Form.Check inline label="Graphisme" name="Graphisme" type={type} id={`inline-${type}-2`} onChange={CheckContent('utilisation')} />
              <Form.Check inline label="Multimedia" type={type} id={`inline-${type}-3`} name="Multimedia" onChange={CheckContent('utilisation')} />
              <Form.Check inline label="3D" name="3D" type={type} id={`inline-${type}-4`} onChange={CheckContent('utilisation')} />
              <Form.Check inline label="Autres" name="Autres" type={type} id={`inline-${type}-5`} onChange={CheckContent('utilisation')} />
              <Form.Control className="Form" placeholder="Preciser" onChange={handleChange('other_utilisation')} />
            </div>
          ))}
        </Form>
        <Form.Row>
          <Col>
            <Button className="Form__button" variant="primary" type="submit" onClick={this.back}> Precedent </Button>
          </Col>
          <Col>
            <Button className="Form__button" variant="primary" type="submit" onClick={this.continue}> Suivant </Button>
          </Col>
        </Form.Row>
      </div>
    );
  }
}

export default Step3;
