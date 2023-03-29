import { useSelector, useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filterSelectors';
import { StyledFilter } from './Filter.styled';
import { StyledInput } from 'components/Inputs/Input.styled';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setContactsFilter(e.target.value));
  };

  return (
    <StyledFilter>
      <p>filter contacts by name</p>
      <label htmlFor="filter">
        <StyledInput
          type="text"
          value={value}
          onChange={changeFilter}
        ></StyledInput>
      </label>
    </StyledFilter>
  );
};
