import React from 'react';
import { useState, useEffect } from 'react'

import Image from 'next/image'

import { Amplify, API } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import * as mutations from "../../graphql/mutations";

const onCreateClass = async ({ inputValue }) => {


    const newClass = {
        ClassName: inputValue
    };

    try {
        await API.graphql({
            query: mutations.createClass,
            variables: { input: newClass },
        });

        // setClastList((list) => [...list, { ...newClass }]);

        console.log("Successfully created a class!");
    } catch (err) {
        console.log("error: ", err);
    }
};

const EnterClass = React.memo(({ onClose }) => {
    const [inputValue, setInputValue] = useState('');



    return (
        <div>

            <input
                type="text"
                placeholder="Class Name"
                value={inputValue}
                onChange={(event) =>
                    setInputValue(event.target.value)
                }
            />

            <button onClick={() => onCreateClass({ inputValue })}>Add Class!!</button>

        </div>
    );
});
export default EnterClass;