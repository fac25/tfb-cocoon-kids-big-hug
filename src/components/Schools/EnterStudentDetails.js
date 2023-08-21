
import React from 'react';
import { useState, useEffect } from 'react'
import styles from '../../styles/ExpandedVideo.module.css'
import Image from 'next/image'


import { Amplify, API } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import * as mutations from "../../graphql/mutations";
import * as queries from '../../graphql/queries';


const EnterClass = React.memo(({classID, onClose }) => {
    const [inputValue, setInputValue] = useState('');

    const createStudents = async () => {
        try {
            const createStudentResponse = await API.graphql({
                query: mutations.createStudents,
                variables: { input: { name: inputValue } },
            });

            console.log("createstudent",createStudentResponse.data)
            const studentID = createStudentResponse.data.createStudents.id;
        
           //Need to add student and class ids to bridge table here.
            
           
        } catch (error) {
            console.error('Error adding student and association:', error);
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
                    placeholder="Student Name"
                    value={inputValue}
                    onChange={(event) =>
                        setInputValue(event.target.value)
                    }
                />

                <button onClick={() => createStudents({inputValue})}>Add Student</button>

            </div>
        </div>
    );
});
export default EnterClass;