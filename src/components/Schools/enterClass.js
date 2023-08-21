import React from 'react';
import { useState, useEffect } from 'react'
import styles from '../../styles/ExpandedVideo.module.css'

import Image from 'next/image'

import { Amplify, API } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import * as mutations from "../../graphql/mutations";


const EnterClass = React.memo(({ onChange, onClose }) => {
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

        } catch (err) {
        }
    };


    return (
        <div className={styles.overlay}>
            <div className={styles.centered}>
                <Image
                    src={`/assets/img/closebutton.jpg`}
                    width={20}
                    height={20}
                    onClick={onClose}
                    className={styles.closeButton}
                />
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
        </div>
    );
});
export default EnterClass;