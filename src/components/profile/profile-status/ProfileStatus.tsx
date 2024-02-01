import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatusTC: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatusTC(this.state.status);
    };

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {this.state.editMode
                    ? <div>
                        <input onChange={this.onStatusChange} value={this.state.status} autoFocus={true} onBlur={this.deactivateEditMode}/>
                    </div>
                    : <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'no status'}</span>
                    </div>
                }
            </>
        )
    }
}