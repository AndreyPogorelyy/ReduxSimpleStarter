import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        // TODO: figure out why we need to access payload on the return object from createPost
        this.props.createPost(props).payload
            .then(() => {
                // Navigate to the home page when the post is created
                this.context.router.push('/');
            });
    };

    render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props;

        function createFormClass(field) {
            return `form-group ${field.touched && field.invalid ? 'has-danger' : '' }`;
        };

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create a new post</h3>
                <div className={ createFormClass(title) }>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>
                <div className={ createFormClass(categories) }>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>
                <div className={ createFormClass(content) }>
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a username";
    }

    if (!values.categories) {
        errors.categories = "Enter categories";
    }

    if (!values.content) {
        errors.content = "Enter some content";
    }


    return errors;
}

// We use reduxForm in a similar ways as "connect" from react-redux.
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { createPost })(PostNew);

