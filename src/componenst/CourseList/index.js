import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


export default function CourseList() {
  const courses = useSelector(state => state.data);
  const dispatch = useDispatch();

  const addCourse= () => {
    dispatch({ type: 'ADD_COURSE', title: "NodeJs"})
  }
  
  return (
    <>
      <ul>
        { courses.map(course => <li key={course}>{course}</li> )}
      </ul>

      <button type="button" onClick={addCourse}>Adicionar</button>
    </>
  );
}
