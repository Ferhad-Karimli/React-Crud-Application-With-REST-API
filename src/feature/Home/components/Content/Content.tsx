import React, { useState } from "react";
import entryImage from "../../../../image/todo-img.png"
import formImage from "../../../../image/form.png"
import checkImage from "../../../../image/check.png"
import Image from "../../../../components/Image"
import { ContentStyled, EntryButton, EntryPanel, EntryField } from "./Content.styled";
import Grow from '@mui/material/Grow';
import { useHistory } from "react-router-dom"


export const Content: React.FC = () => {

    let [getStart, setGetStart] = useState(true)
    let [check, setCheck] = useState(false)
    let [textField, setTextField] = useState('')
    let [isError, setIsError] = useState(false)
    let { push } = useHistory();

    const openClosePanel = (): void => {
        setGetStart(prev => !prev)
    }

    const addNickName = (): void => {
        if (!textField) {
            setIsError(true)
            return
        }

        localStorage.setItem("user", textField)
        setIsError(false)
        setCheck(true)
        setTimeout(()=>push("/posts"), 2000)

    }

    return (
        <ContentStyled>
            <Grow
                in={!getStart}
                style={{ transformOrigin: '0 0 10' }}
                timeout={1200}
            >
                <EntryPanel none={getStart ? "true" : ""}>
                    <Image src={formImage} alt="Entry Image" />
                    <EntryField
                        error={isError}
                        onChange={({ target: { value } }): void => setTextField(value)}
                    />
                    <EntryButton onClick={addNickName}>Complete</EntryButton>
                </EntryPanel>
            </Grow>
            <Grow
                in={check}
                style={{ transformOrigin: '0 0 0' }}
                timeout={1200}
            >
                <EntryPanel none={getStart ? "true" : ""}>
                    <Image width="100" src={checkImage} alt="Check Image" />
                </EntryPanel>
            </Grow>
            <Grow
                in={getStart}
                style={{ transformOrigin: '0 0 10' }}
                timeout={1200}
            >
                <EntryPanel none={!getStart ? "true" : ""}>
                    <Image src={entryImage} alt="Entry Image" />
                    <EntryButton onClick={openClosePanel}>Get Started</EntryButton>
                </EntryPanel>
            </Grow>
        </ContentStyled>
    )
}