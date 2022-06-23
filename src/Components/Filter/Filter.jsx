import React from 'react'
import { Form } from "react-bootstrap";
const Filter = (props) => {
    const {setSelectedDate,selectedDate,setSelectedStatus,selectedStatus,setPriority,priority }=props;
  return (
    <div><Form.Label>Date Filter</Form.Label>
    <Form.Select
      value={selectedDate}
      onChange={(e) => setSelectedDate(e.target.value)}
    >
      <option value={"all"}>All</option>
      <option value={"today"}>Today</option>
      <option value={"week"}>This Week</option>
      <option value={"month"}>This Month</option>
      <option value={"year"}>This Year</option>
    </Form.Select>
    <br />
    <Form.Label>Completed Filter</Form.Label>
    <Form.Select
      value={selectedStatus}
      onChange={(e) => setSelectedStatus(e.target.value)}
    >
      <option value={"all"}>All</option>
      <option value={"completed"}>Completed</option>
      <option value={"notCompleted"}>Not Completed</option>
    </Form.Select>
    <Form.Label>Priority Filter</Form.Label>
    <Form.Select
      value={priority}
      onChange={(e) => setPriority(e.target.value)}
    >
      <option value={0}>All</option>
      <option value={1}>High</option>
      <option value={2}>Medium</option>
      <option value={3}>Low</option>
    </Form.Select></div>
  )
}

export default Filter