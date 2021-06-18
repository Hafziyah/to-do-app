import form from '../styles/form.css';

function Form() { 
    return(
        <div>
            <form action=''>
                <input type='text' 
                name='title' 
                id='title' 
                placeholder='Task' 
                />

                <textarea 
                type='text' 
                name='desc' 
                id='desc'
                placeholder='Notes'
                />

                <button class='btn' type='submit'> 
                    Add task                    
                </button> 
            </form>
        </div>
    );
}

export default Form;