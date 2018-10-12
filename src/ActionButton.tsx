import * as React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';

interface IActionButtonProps {
    key_letter: string;
    label: string,
};

class ActionButton extends React.Component< IActionButtonProps, any > {
    public render() {
        return (
            <div className={action_button}>
                <IconContainer>
                    <span>{this.props.key_letter}</span>
                </IconContainer>
                <span className={label}>{this.props.label}</span>
            </div>
        )
    }
}
const action_button = css`
    box-sizing: border-box;
    height: 44px;
    border: 1px solid blue;
    width: 200px;
    border-radius: 4px;
    cursor: pointer;
    background-color: #f22525;
    display: flex;

    &:hover {
        background-color: pink;
    }
`;

const IconContainer = styled('div')`
    margin: 8px;
    width: 24px;
    height: 24px;
    border-radius: 2px;
    border: 1px solid rgba(0,0,0, 0.6);
    color: white;
    background-color: rgba(0,0,0, 0.6);
    font-size: 12px;
    line-height: 16px;

    span {
        height: 22px;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        font-weight: 700;
        -webkit-box-pack: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        line-height: 22px // centering trick
    }
`;


const label = css`
    border: 1px solid white;
    line-height: 24px;
    font-size: 20px;
    margin: 8px;
    height: 24px
`;

export default ActionButton;