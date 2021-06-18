import '../styles/todo-list.css'
import './list-item'

function TodoList() {
    return <ul>
        <li>
            <h3 class='title'>Grocery shopping</h3>
            <p>Pick up some salad ingredients from the market.</p>
            <button class ='btn'>Edit</button>
            <button class ='btn remove'>Remove</button>
        </li>

        <li>
            <h3 class='title'>Laundry</h3>
            <p class='description'>Collect my clothes from the Laundromat.</p>
            <button class ='btn'>Edit</button>
            <button class ='btn remove'>Remove</button>
        </li>

        <li>
            <h3 class='title'>Car wash</h3>
            <p class='description'>Take my car to be cleaned at the car wash.</p>
           
            <button class ='btn'>Edit</button>
            <button class ='btn remove'>Remove</button>
        </li>
    </ul>;
}





export default TodoList