import React from "react";
import {PageTitleContainer, PageTitleStyled, PageTitleSubtitleStyled} from './PageTitle.style'

interface PageTitleProps{
    title: string;
    subtitle?: string | JSX.Element; //? indica que eh opcional
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
    return (
        <PageTitleContainer>
            <PageTitleStyled>
                {props.title}
            </PageTitleStyled>
            <PageTitleSubtitleStyled>
                {props.subtitle}
            </PageTitleSubtitleStyled>
        </PageTitleContainer>
    );
}

export default PageTitle;