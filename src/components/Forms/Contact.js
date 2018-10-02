import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 3 * theme.spacing.unit,
        marginBottom: 3 * theme.spacing.unit,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: 2 * theme.spacing.unit,
        width: '95%',
    },
    button: {
        margin: theme.spacing.unit,
    },
    multiline: {
        margin: theme.spacing.unit,
    },
});

class ContactForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            nameError: '',
            email: '',
            emailError: '',
            message: '',
            messageError: '',
          };
    }
    changeHandler = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    }
    submitHandler = (event) => {
        //
    }
    render() {
        const { classes } = this.props;
        return (
            <form className={ classes.root + " form-validate"}>
                <TextField
                    id="name"
                    label="Name"
                    type="text"
                    required={ true }
                    className={ classes.textField }
                    value={ this.state.name }
                    errortext={ this.state.nameError }
                    onChange={ this.changeHandler('name') }
                    margin="normal"
                />
                <TextField
                    id="email"
                    label="Email"
                    type="email"
                    required={ true }
                    className={ classes.textField }
                    value={ this.state.email }
                    errortext={ this.state.emailError }
                    onChange={ this.changeHandler('email') }
                    margin="normal"
                />
                <TextField multiline
                    id="message"
                    label="Message"
                    required={ true }
                    rowsMax="10"
                    value={ this.state.multiline }
                    errortext={ this.state.messageError }
                    onChange={ this.changeHandler('multiline') }
                    className={ classes.textField }
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={ classes.button }
                >
                    Submit
                </Button>
            </form>
        )
    }
}

export default withStyles(styles)(ContactForm)