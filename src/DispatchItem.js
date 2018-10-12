import * as React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
import ActionButton from './ActionButton';

const DispatchItem = (props) => (
    <div className={main_css}>
        <ClarifyForm>
            <h1 className={title}>Clarify...</h1>
            <h1>{props.title}</h1> 
            <h3>{props.description}</h3> 
            <h2>What is it?</h2>
            <textarea placeholder="Notes"></textarea>
        </ClarifyForm>
        <ActionMenu>
            <h2>Is it Actionable?</h2>
            <div className={action_options}>
                <div className="column">
                    <h2>Yes</h2>
                    <ActionButton key_letter="W" label="Do it!"/>
                    <ActionButton key_letter="E" label="Delegate it!"/>
                    <ActionButton key_letter="R" label="Defer it!"/>
                </div>
                <div>
                    <h2>No</h2>
                    <ActionButton key_letter="U" label="Trash it!"/>
                    <ActionButton key_letter="I" label="File as Reference!"/>
                    <ActionButton key_letter="O" label="Incubate it!"/>
                </div>
            </div>
        </ActionMenu>
        <OrganizeMenu>
            <h1 className={title}> Organize...</h1>

        </OrganizeMenu>
    </div>
);
export default DispatchItem;

// CSS Styling


const OrganizeMenu = styled('div')` // TODO
`;

const ClarifyForm = styled('div')`
    // CSS GOES HERE
`;

const ActionMenu = styled('div')`
    // CSS GOES HERE
`;

const main_css = css`
    font-family: "Segoe UI", Trebuchet, Tahoma, "Verdana", serif;
    font-size: 1.5rem;
    text-align: center;
    color: #2c2c2c;
`;

const action_options = css`
    display: flex;
    justify-content: center;

    .column {
        min-width: 320px;
    }
`;

const title = css({
    // fontSize: '1.5rem',
    color: '#999',
});