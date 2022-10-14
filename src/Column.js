import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 1rem;
  border: 1px solid lightgrey;
  border-radius: 10px;
  width: 220px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 1rem;
  margin: 0;
`;
const TaskList = styled.div`
  padding: 1rem;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
  min-height: 100px;
  border-radius: 10px;
`;

export default function Column({ column, tasks }) {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}
