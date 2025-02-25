// @flow strict
import TextField from './TextField';
import UpsellForm from './UpsellForm';

const Valid = (
  <UpsellForm
    onSubmit={() => {}}
    submitButtonText="Submit"
    submitButtonAccessibilityLabel="Submit button"
  >
    <TextField id="name" placeholder="Name" onChange={() => {}} />
  </UpsellForm>
);

// $FlowExpectedError[prop-missing]
const MissingProp = <UpsellForm />;

// $FlowExpectedError[prop-missing]
const InvalidProps = <UpsellForm nonexisting={33} />;
