import React from 'react';
import ChangeStepButton from './ChangeStepButton';
import './styles.scss';
import Field from 'src/components/Utils/Field';
import ErrorField from 'src/components/Utils/Field/ErrorField';
import BinaryButtonField from 'src/components/Utils/Field/BinaryButtonField';

const Step2 = ({
  dataSurvey, changeDevis, changeStep, step, error,
}) => {
  console.log(dataSurvey);
  return (
    <div className="fullform container">
      <div className="fullform__header">
        <div className="fullform__header__title">
          <h2>Une bourse bien remplie, ou pas !</h2>
        </div>
        <div className="fullform__header__content">
          <h1>
            Pour que votre guide puisse négocier avec les artisans pour vous, il a besoin de savoir combien il peut dépenser !
            <br /> <br />
            Mais si vous n'avez aucune idée des prix, ou que votre bourse est vraiment bien remplie, vous pouvez juste le préciser et votre guide fera au mieux en fonction de vos besoins =)
          </h1>
        </div>
      </div>
      <BinaryButtonField name="budget" label="Alors, une idée?" value={dataSurvey.budget} handleChange={changeDevis} />
      <ErrorField error={error.budget[0]} />
      {dataSurvey.budget === true && (
        <div style={{ display: 'inline-flex' }}>
          <div style={{ marginRight: '50px' }}>
            <Field name="amount" type="number" value={dataSurvey.amount} label="De quel taille serait votre bourse?" placeholder="Budget" handleChange={changeDevis} controlId="amount" />
            <ErrorField error={error.amount[0]} />
          </div>
          <div>
            <Field name="gap" type="number" value={dataSurvey.gap} label="Votre bourse est elle extensible?" placeholder="Marge" handleChange={changeDevis} controlId="gap" />
            <ErrorField error={error.gap[0]} />
          </div>

        </div>
      )}
      <ChangeStepButton step={step} changeStep={changeStep} />
    </div>
  );
};

export default Step2;
