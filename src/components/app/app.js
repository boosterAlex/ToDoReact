import React, { Component } from 'react';

import AppHeder from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

// import './app.css';
import '../app-header/app-header.css';
import '../post-add-form/post-add-form.css';
import '../post-list/post-list.css';
import '../post-list-item/post-list-item.css';
import '../post-status-filter/post-status-filter.css';
import '../search-panel/search-panel.css';

import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

export default class App extends Component {
    state = {
        data: [
            {
                label: 'Going to learn React',
                important: true,
                like: false,
                id: 1,
            },
            { label: 'That is so good', important: false, like: false, id: 2 },
            {
                label: 'I need a break...',
                important: false,
                like: false,
                id: 3,
            },
        ],

        term: '',
        filter: 'all',
    };
    maxId = 4;

    deleteItem = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex((index) => index.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr,
            };
        });
    };

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            like: false,
            id: this.maxId++,
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    };

    onToggleImportant = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex((index) => index.id === id);

            const old = data[index];
            const newItem = { ...old, important: !old.important };

            const newArr = [
                ...data.slice(0, index),
                newItem,
                ...data.slice(index + 1),
            ];

            return {
                data: newArr,
            };
        });
    };

    onToggleLiked = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex((index) => index.id === id);

            const old = data[index];
            const newItem = { ...old, like: !old.like };

            const newArr = [
                ...data.slice(0, index),
                newItem,
                ...data.slice(index + 1),
            ];

            return {
                data: newArr,
            };
        });
    };

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
    };

    onUpdateSearch = (term) => {
        this.setState({ term });
    };

    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter((item) => item.like);
        } else {
            return items;
        }
    };

    onFilterSelect = (filter) => {
        this.setState({ filter });
    };

    render() {
        const { data, term, filter } = this.state;

        const liked = data.filter((item) => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(
            this.searchPost(data, term),
            filter
        );

        return (
            <AppBlock>
                <AppHeder liked={liked} allPosts={allPosts} />
                <div className='search-panel d-flex'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm onAdd={this.addItem} />
            </AppBlock>
        );
    }
}
