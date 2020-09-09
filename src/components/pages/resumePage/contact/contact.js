import React from "react";
import {StyledContainer, Description, ContactsForm, StyledRow} from "./style";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";


const Contact = () => {
    return (
        <StyledContainer fluid id='#contact'>
            <Description>
                So, you wanna contact with me? Just wait for updates in my site :)
            </Description>
            <StyledRow xs={1} md={1}>
                <ContactsForm className='text-light'>
                    <FormGroup>
                        <Label for="contactName">Name</Label>
                        <Input type="text" name="contactName" id="contactName" placeholder="Mark Zuckerberg"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Your Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="example@gmail.com"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Your company</Label>
                        <Input type="textarea" name="text" id="exampleText" placeholder="Facebook"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Message</Label>
                        <Input type="textarea" name="text" id="exampleText" placeholder="What is your offer?"/>
                    </FormGroup>
                    <Button color='warning'>Submit</Button>

                </ContactsForm>
            </StyledRow>
        </StyledContainer>
    )
}
export default Contact;