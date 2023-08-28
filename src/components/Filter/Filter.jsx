import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "../../redux/contacts/selectors";
import { setStatusFilter } from "../../redux/contacts/filtersSlice";
import css from './Filter.module.css';
import { FormLabel, Input } from "@chakra-ui/react";
export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const newFilter = event.target.value;
    dispatch(setStatusFilter(newFilter)); }

  return (
    <FormLabel className={css.filterLabel}>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts"
      />
    </FormLabel>
  );
};
export default Filter;
