import React from 'react';
import { useState, useEffect } from 'react'

import Image from 'next/image'

import { Amplify, API } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import * as mutations from "../../graphql/mutations";


const EnterClass = React.memo(({onChange }) => {
    const [inputValue, setInputValue] = useState('');

    const onCreateClass = async () => {


        const newClass = {
            ClassName: inputValue
        };

        try {
            await API.graphql({
                query: mutations.createClass,
                variables: { input: newClass },
            });

            onChange((list) => [...list, { ...newClass }]);

            console.log("Successfully created a class!");
        } catch (err) {
            console.log("error: ", err);
        }
    };


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

            <button onClick={() => onCreateClass()}>Add Class!!</button>

        </div>
    );
});
export default EnterClass;