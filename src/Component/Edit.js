import React, { useRef } from "react";//import {useSate} from "react";
import { useDispatch } from "react-redux";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { editTodo } from './../Redux/Actions/action';

function Edit({ id }) {
    console.log(id);
    const [open, setOpen] = React.useState(false);//const [open, setOpen] = useState(false)
    const dispatch = useDispatch();
    const taskRef = useRef();
    const handleEdit =()=>{
        dispatch(editTodo({task:taskRef.current.value,id}))
        setOpen(false)
    }

    return (
        <Modal
            closeIcon
            open={open}
            trigger={<Button color="teal">Edit</Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}>
            <Modal.Content>
                <input type="text" style={{ width: "600px", height: "50px" }} ref={taskRef} />
            </Modal.Content>
            <Modal.Actions>
                <Button color="red" onClick={() => setOpen(false)} >
                    <Icon name="remove" /> No
                </Button>
                <Button color="green" onClick={() =>handleEdit()} >
                    <Icon name="checkmark" /> save
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default Edit;
