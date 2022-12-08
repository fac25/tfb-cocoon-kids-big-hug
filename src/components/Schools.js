import styles from '../styles/Adults.module.css'

import * as React from 'react'

import Switch from '@mui/material/Switch'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Box, Tab, Tabs, Typography, ListItem, Button } from '@mui/material'
import { useState } from 'react'
export default function Schools() {
    const [tabIndex, setTabIndex] = useState(0)

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex)
    }
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
                    <Button variant="contained">+ add new</Button>
                </div>
                <Box>
                    <Box>
                        <Tabs value={tabIndex} onChange={handleTabChange}>
                            <Tab label="YEAR 8 - B" />
                            <Tab label="YEAR 8 - C" />
                            <Tab label="YEAR 6 - A" />
                        </Tabs>
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
                                <ListItem>
                                    Student name 2 – Emotions: Happy - Bored
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Student name 3 – Emotions: Sad - Alone
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Student name 4 – Emotions: Depressed - Alone
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Student name 5 – Emotions: Scared - Upset
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Student name 6 – Emotions: excited - Alone
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Student name 7 – Emotions: Happy
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Student name 8 – Emotions: Excited
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Student name 9 – Emotions: Angry - Alone
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Student name 10 – Emotions: Happy
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Student name 11 – Emotions: Upset - Alone
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Student name 12 – Emotions: Excited
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Student name 13 – Emotions: Angry - Alone
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Student name 14 – Emotions: Happy
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Student name 15 – Emotions: Happy
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Student name 16 – Emotions: Upset
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
                                <ListItem>
                                    Student name 2 – Emotions: Happy - Bored
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Student name 3 – Emotions: Sad - Alone
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Student name 4 – Emotions: Depressed - Alone
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Student name 5 – Emotions: Scared - Upset
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Student name 6 – Emotions: excited - Alone
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Student name 7 – Emotions: Happy
                                    <Button variant="outlined">
                                        View details
                                    </Button>
                                </ListItem>
                                <ListItem>
                                    Student name 8 – Emotions: Excited
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
                                <ListItem>
                                    Student name 2 – Emotions: Happy - Bored
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
