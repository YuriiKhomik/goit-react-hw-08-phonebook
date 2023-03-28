import { useSelector, useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filterSelectors';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setContactsFilter(e.target.value));
  };

  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" value={value} onChange={changeFilter}></input>
    </>
  );
};
