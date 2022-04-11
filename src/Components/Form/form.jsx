import React from 'react';
import { Form,Container, Button} from 'react-bootstrap';


function FormComponent() {
    return <>

        <Container className='mt-5 d-flex flex-column align-items-center justify-content-center '>
            <p className='text-center p-8'>Faça seu Login</p>
            
                <div className="m-auto  ">
                    <Form.Control className='w-100 mb-2 '  size="lg" type="text" placeholder="Login" />
                    <Form.Control size="lg" type="text" placeholder="Senha" />
                    <Form.Check className='d-flex justify-content-center mt-2' name="lembrar" label=" Lembrar de mim" type='radio' />
                    <Button className="w-100 mb-2" variant="danger">Login</Button>
                </div>

        </Container>


    </>
}


export default FormComponent;