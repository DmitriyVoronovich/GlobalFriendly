import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./post/Post";
import {PostType} from "../../../App";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { maxLengthCreator, required} from "../../../utils/validators/validators";
import {FormControl} from '../../common/FormControls/FormControl';

type MyPostsPropsType = {
    posts: PostType[]
    addedNewPost: (newPost: string) => void
}

const maxLengthCreator10 = maxLengthCreator(10)

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {posts, addedNewPost} = props;

    const onSubmitNewPost = (formData: FormDataPostType) => {
        addedNewPost(formData.newPostBody);
    };

    const post = posts.map((item) => {
        return (
            <Post key={item.id} like={item.like} message={item.message}/>
        )
    })

    return (
        <div>
            My post
            <AddPostReduxForm onSubmit={onSubmitNewPost}/>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    );
};

export type FormDataPostType = {
    newPostBody: string
}

export const AddPostForm: React.FC<InjectedFormProps<FormDataPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.dialogInput}>
                <Field placeholder={'Enter your message'}
                       name={'newPostBody'}
                       component={FormControl}
                       validate={[required,maxLengthCreator10]}/>
                <button>Send post</button>
            </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm<FormDataPostType>({
    form: 'addPost'
})(AddPostForm)

export default MyPosts;