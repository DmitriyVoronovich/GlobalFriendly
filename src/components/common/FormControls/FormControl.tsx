import React from 'react';
import s from '../FormControls/textarea.module.css'

export const FormControl: React.FC<any> = (props) => {

    const hasError = props.meta.error && props.meta.touched;

    return (
        <div >
            <div>
                <textarea {...props.input} className={`${s.formControl} ${hasError ? s.errorBorder : ''}`}/>
            </div>
            {hasError && <span className={s.error}>{props.meta.error}</span>}
        </div>
    );
};

export const Input: React.FC<any> = (props) => {

    const hasError = props.meta.error && props.meta.touched;

    return (
        <div >
            <div>
                <input {...props.input} className={`${s.formControl} ${hasError ? s.errorBorder : ''}`}/>
            </div>
            {hasError && <span className={s.error}>{props.meta.error}</span>}
        </div>
    );
};