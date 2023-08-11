import styles from '../../styles/Adults.module.css'

import * as React from 'react'

import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Box, Tab, Tabs, Typography, ListItem, Button } from '@mui/material'
import { useState, useEffect } from 'react'


import { Amplify, API } from 'aws-amplify';
import awsconfig from '../../aws-exports';

import * as mutations from "../../graphql/mutations";
import * as queries from '../../graphql/queries';

Amplify.configure(awsconfig);


export default function Schools({ classList }) {
    const [tabIndex, setTabIndex] = useState(0)

   
    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex)
    }
    // const [todoList, setTodoList] = useState(todos);




    const onCreateClass = async () => {
        const newClass = {
            ClassName: "shush"
        };

        try {
            await API.graphql({
                query: mutations.createClass,
                variables: { input: newClass },
            });

            setClasses((list) => [...list, { ...newClass }]);

            console.log("Successfully created a class!");
        } catch (err) {
            console.log("error: ", err);
        }
    };

    return (
        <div className={`container ${styles.border}`}>
            <header className={styles.red}>
                <h1 className="title">School Name - Dashboard</h1>
                <p className="lead">
                    In your dashboard you will be able to add classrooms and see
                    how your pupils are doing. As well as access resources for
                    emotional support.
                </p>
            </header>
            <main>
                <div className={styles.border_bottom}>
                    <h2>My Classrooms</h2>
                    <Button variant="contained" onClick={(event) => onCreateClass(event)}>add new +</Button>
                </div>
                <Box>
                    <Box>
                        {/* <Tabs value={tabIndex} onChange={handleTabChange}> */}
{/* 
                        {classList.map((eachClass) => (
                            <Tab
                                key={eachClass.id}
                                label={eachClass.ClassName}
                            />
                        ))}  */}

                        {/* </Tabs> */}
                    </Box>
                    <Box sx={{ padding: 2 }}>
                        {tabIndex === 0 && (
                            <Box>
                                <Typography>STUDENTS</Typography>
                                <ListItem>
                                    Student name 1 – Emotions: Angry - Alone
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>

                            </Box>
                        )}
                        {tabIndex === 1 && (
                            <Box>
                                <Typography>STUDENTS</Typography>
                                <ListItem>
                                    Student name 1 – Emotions: Angry - Alone
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>

                            </Box>
                        )}
                        {tabIndex === 2 && (
                            <Box>
                                <Typography>STUDENTS</Typography>
                                <ListItem>
                                    Student name 1 – Emotions: Angry - Alone
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                            </Box>
                        )}
                    </Box>
                </Box>
                <div className={styles.border_bottom}>
                    <h2>Enable / Diable Emotions</h2>
                </div>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Alone"
                    />
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Anxious"
                    />
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Ashamed"
                    />
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Bored"
                    />
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Chatty"
                    />
                    <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Comfortable"
                    />
                    <FormControlLabel control={<Switch />} label="Guilty" />
                    <FormControlLabel control={<Switch />} label="Confident" />
                    <FormControlLabel control={<Switch />} label="Confused" />
                    <FormControlLabel control={<Switch />} label="Self-harm" />
                </FormGroup>
            </main>
        </div>
    )
}
