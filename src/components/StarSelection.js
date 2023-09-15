import Form from 'react-bootstrap/Form';

export default function StarSelection() {
  return (
    <Form.Select aria-label="Movie review">
      <option>Select Your Rating</option>
      <option value="⭐">⭐</option>
      <option value="⭐⭐">⭐⭐</option>
      <option value="⭐⭐⭐">⭐⭐⭐</option>
      <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
      <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
    </Form.Select>
  );
}
