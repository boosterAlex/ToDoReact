import React, { Component } from 'react';
// import { Button } from 'reactstrap';

export default class PostStatusFilter extends Component {
    buttons = [
        { name: 'all', label: 'Все' },
        { name: 'like', label: 'Понравилось' },
    ];

    render() {
        const { filter, onFilterSelect } = this.props;

        const buttons = this.buttons.map(({ name, label }) => {
            const active = filter === name;

            const clazz = active ? 'btn-info' : 'btn-outline-secondary';

            return (
                <button
                    onClick={() => onFilterSelect(name)}
                    key={name}
                    type='button'
                    className={`btn ${clazz}`}
                >
                    {label}
                </button>
            );
        });

        return <div className='btn-group'>{buttons}</div>;
    }
}
