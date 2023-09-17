import Form from 'react-bootstrap/Form';
//component to make a drop down form element to select star ratings. passed state through props. 
export default function StarSelection(props) {
  const handleRatingChange = (event) => {
    props.onChange(event.target.value)
  }
  return (
    <Form.Select aria-label="Movie review" onChange={handleRatingChange} value={props.value}>
      <option>Select Your Rating</option>
      <option value="⭐">⭐</option>
      <option value="⭐⭐">⭐⭐</option>
      <option value="⭐⭐⭐">⭐⭐⭐</option>
      <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
      <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
    </Form.Select>
  );
}
