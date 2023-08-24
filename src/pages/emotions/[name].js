import { useState } from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import SingleEmotion from '../../components/emotions/SingleEmotion'
import SinglePlayGame from '../../components/playgame/SinglePlayGame'
import SingleDoMake from '../../components/domake/SingleDoMake'

import Layout from '../../components/layout/Layout'
import ChatSpeak from '../../components/ChatSpeak'
import path from 'path'
import { promises as fs } from 'fs'
import VideoPage from '../../components/video/videoCards'


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}))

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

export async function getServerSideProps(context) {
    const name = context.params.name

    const jsonDirectory = path.join(process.cwd(), 'json')
    //Read the json data file data.json
    const fileContents = await fs.readFile(jsonDirectory + '/db.json', 'utf8')
    const data = JSON.parse(fileContents)
    const emotion = data['emotions'].filter((emotion) => emotion.name === name)
    const chat = data['chat-speak']
    const domake = data[`do-make`]
    const games = data[`play-game`]
    const video = data[`video`].filter((video) => video.emotions.includes(name))
    //Return the content of the data file in json format

    return { props: { emotion, chat, games, domake, name , video} }
}

function handleActivity(activity, setGame, name) {
    activity.map((i) => {
        i.emotions.map((emotion) => {
            if (emotion === name) {
                setGame((prevState) => {
                    return { ...prevState, ...i }
                })
            }
        })
    })
}

export default function SingleEmotionPage({ emotion, chat, games, domake, name ,video}) {
    const [expanded, setExpanded] = useState('')
    const [game, setGame] = useState()
    const [make, setMake] = useState()
    

    const handleChange = (panel) => (event, newExpanded) => {
        handleActivity(games, setGame, name)
        handleActivity(domake, setMake, name)

        setExpanded(newExpanded ? panel : false)
    }

    return (
        <Layout pageTitle="Emotion">
            <article className="container">
                <h1 className="title">You are feeling {name}...</h1>
                <SingleEmotion emotion={emotion} name={name} />
                <div className="container-sm">
                    <Accordion
                        expanded={expanded === 'panel1'}
                        onChange={handleChange('panel1')}
                    >
                        <AccordionSummary
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                        >
                            <Typography>Make/do</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {make && <SingleDoMake domake={make} />}
                        </AccordionDetails>
                    </Accordion>

                    <Accordion
                        expanded={expanded === 'panel2'}
                        onChange={handleChange('panel2')}
                    >
                        <AccordionSummary
                            aria-controls="panel2d-content"
                            id="panel2d-header"
                        >
                            <Typography>Play/game</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {game && <SinglePlayGame game={game} />}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel3'}
                        onChange={handleChange('panel3')}
                    >
                        <AccordionSummary
                            aria-controls="panel3d-content"
                            id="panel3d-header"
                        >
                            <Typography>Join/go </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>Coming soon...</Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel4'}
                        onChange={handleChange('panel4')}
                    >
                        <AccordionSummary
                            aria-controls="panel4d-content"
                            id="panel4d-header"
                        >
                            <Typography>Chat/Speak</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ChatSpeak chat={chat} />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        expanded={expanded === 'panel5'}
                        onChange={handleChange('panel5')}
                    >
                        <AccordionSummary
                            aria-controls="panel5d-content"
                            id="panel5d-header"
                        >
                            <Typography>Video</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <VideoPage videos={video}/>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </article>
        </Layout>
    )
}
