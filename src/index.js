import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/app';

class WhoAmI extends Component {
    state = {
        years: 26,
    };

    nextYear = () => {
        this.setState((state) => ({
            years: ++state.years,
        }));
    };

    // nextYear() {
    //     this.setState((state) => ({
    //         years: ++state.years,
    //     }));
    // }
    render() {
        const { name, surname, link } = this.props;
        const { years } = this.state;
        return (
            <>
                <button onClick={this.nextYear}>++</button>
                <h1>
                    My name is {name}, surname - {surname}, years ={years};
                </h1>
                <a href={link}>My profile</a>
            </>
        );
    }
}

const All = () => {
    return (
        <>
            <WhoAmI name='Alex' surname='Booster' link='google.com' />
            <WhoAmI name='Ivan' surname='Petr' link='google.com' />
            <WhoAmI name='Klava' surname='Coca' link='google.com' />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        {/* <All /> */}
    </React.StrictMode>
);
