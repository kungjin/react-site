import { useState } from "react"

export default function TodoList() {

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    // function addTodo
    const addTodo = () => {
        if(todo.trim()){
            //할일을 추가하면, todos에 값을 추가 
            setTodos([...todos, todo])

            // todo 상태를 초기화 
            setTodo("")
        }
    }

    return (
        <>
    <h2>할일 목록</h2>
    <input type="text" 
    value={todo}
    onChange={(e) => setTodo(e.target.value)}
    placeholder="할일을 입력하세요" />
    <button onClick={addTodo}>추가</button>
    <ul>
        
        {/* 소괄호 사용 1 */}
        {
        todos.map((item, index) => (
            <li key={index}>

                {item}
            </li>
            
        ))
        }

        {/* {  
        return 사용 구문 2
        //소괄호를 사용 하거나 return을 사용해서 해야지만 문법이 통한다. 
        todos.map((item, index) => {
            return <li key={index}>

                {item}
            </li>
            
})
        } */}
        
    </ul>
        
        </>

    )
}