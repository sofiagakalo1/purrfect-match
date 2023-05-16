import PropTypes from 'prop-types';
import { Input, ItemContainer, EditInputBtn } from './';
import Icon from 'shared/components/Icon/Icon';

const UserDataItem = ({ name }) => {
  return (
    <ItemContainer>
      <label>{name}:</label>
      <Input />
      <EditInputBtn>
        <Icon id="edit" s="#54ADFF" />
      </EditInputBtn>
    </ItemContainer>
  );
};

export default UserDataItem;

UserDataItem.propTypes = {
  name: PropTypes.string.isRequired,
};
