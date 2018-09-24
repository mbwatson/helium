import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
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
    submitHandler = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    }
    render() {
        const { classes } = this.props;
        return (
            <form className="form-validate">
                <TextField
                    id="name"
                    label="Name"
                    type="text"
                    required={ true }
                    className={ classes.textField }
                    value={ this.state.name }
                    errorText={ this.state.nameError }
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
                    errorText={ this.state.emailError }
                    onChange={ this.changeHandler('email') }
                    margin="normal"
                />
                <TextField multiline
                    id="message"
                    label="Message"
                    required={ true }
                    rowsMax="10"
                    value={ this.state.multiline }
                    errorText={ this.state.messageError }
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