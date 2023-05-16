import PropTypes from 'prop-types';
import { Error, FormLabel, StyledField } from '../AddPetForm.styles';
import { DetailsWrapper } from './PersonalDetails.styles';

const PersonalDetails = ({
  option,
  handleChange,
  handleBlur,
  values,
  touched,
  errors,
  isValid,
}) => {
  return (
    <DetailsWrapper>
      {option !== 'my-pet' && (
        <FormLabel htmlFor="title">
          Title of add
          <StyledField
            name="title"
            placeholder="Type title of publication"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
            errors={touched.title && errors.title}
          />
          <Error name="title" component="p" />
        </FormLabel>
      )}
      <FormLabel htmlFor="name">
        Name Pet
        <StyledField
          name="name"
          placeholder="Type name of the pet"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          errors={touched.name && errors.name}
        />
        <Error name="name" component="p" />
      </FormLabel>
      <FormLabel htmlFor="birthday">
        Date of birth
        <StyledField
          name="birthday"
          placeholder="Type date of birth"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.birthday}
          errors={touched.birthday && errors.birthday}
        />
        <Error name="birthday" component="p" />
      </FormLabel>
      <FormLabel htmlFor="breed">
        Breed
        <StyledField
          name="breed"
          placeholder="Type breed"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.breed}
          errors={touched.breed && errors.breed}
        />
        <Error name="breed" component="p" />
      </FormLabel>
      {!isValid && <Error>Please fill all the fields</Error>}
    </DetailsWrapper>
  );
};

PersonalDetails.propTypes = {
  option: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default PersonalDetails;
