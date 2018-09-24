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
            email: '',
            message: '',
          };
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    render() {
        const { classes } = this.props;
        return (
            <form className="form-validate">
                <TextField
                    id="name"
                    label="Name"
                    type="name"
                    required={ true }
                    className={ classes.textField }
                    value={ this.state.name }
                    onChange={ this.handleChange('name') }
                    margin="normal"
                />
                <TextField
                    id="email"
                    label="Email"
                    type="email"
                    required={ true }
                    className={ classes.textField }
                    value={ this.state.email }
                    onChange={ this.handleChange('email') }
                    margin="normal"
                />
                <TextField multiline
                    id="message"
                    label="Message"
                    required={ true }
                    rowsMax="10"
                    value={ this.state.multiline }
                    onChange={ this.handleChange('multiline') }
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