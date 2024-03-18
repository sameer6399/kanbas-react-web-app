import Add from "./Add";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import JavaScript from "./JavaScript";
import Styles from "./Styles";
import TodoItem from "./Todos/TodoItem";
import TodoList from "./Todos/TodoList";
import PathParameters from "./routing/PathParameters";

function Assignment3() {
    return (
        <div>
            <h1>Assignment3</h1>
            <TodoItem/>
            <TodoList/>
            <ConditionalOutput />
            <Styles />
            <Classes />
            <PathParameters />
            <JavaScript />
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
            <Add a={3} b={4} />
        </div>
    );
}

export default Assignment3;