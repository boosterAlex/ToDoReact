import React, { Component } from 'react';

export default class PostListItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         important: false,
    //     };
    //     this.onImportant = this.onImportant.bind(this);
    // }

    // onImportant() {
    //     this.setState(({ important }) => ({
    //         important: !important,
    //     }));
    // }

    render() {
        const {
            label,
            onDelete,
            onToggleImportant,
            onToggleLiked,
            important,
            like,
        } = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }
        return (
            <div className={classNames}>
                <span onClick={onToggleLiked} className='app-list-item-label'>
                    {label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button
                        type='button'
                        className='btn-star btn-sm'
                        onClick={onToggleImportant}
                    >
                        <i className='fa fa-star'></i>
                    </button>
                    <button
                        onClick={onDelete}
                        type='button'
                        className='btn-trash btn-sm'
                    >
                        <i className='fa fa-trash-o'></i>
                    </button>
                    <i className='fa fa-heart'></i>
                </div>
            </div>
        );
    }
}
