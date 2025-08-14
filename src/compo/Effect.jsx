import Example1 from '../compo3/Example1'
import Counter from '../compo2/Counter'
import InputMirrow from '../compo2/InputMirror'
import TodoList from '../compo2/TodoList'
import ToggleButton from '../compo2/ToggleButton'


function Effect(){

    return(
        <>
        <div style={{ border: '2px dotted #000',

        }}>
           <ColorChange />
           <hr /> 
           <Counter />
           <hr />
           <InputMirrow/>
           <hr />
           <TodoList/>
           <hr />
           <ToggleButton/>
        </div>
        </>
    )
}
export default Effect
