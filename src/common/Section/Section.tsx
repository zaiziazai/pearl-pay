import React from "react";
import "./Section.scss"
export enum heading {
    MAJOR="major", STANDARD="standard", MAIN="main"
}

export interface OwnProps {
    headLine?: string
    headingType?: heading
}
export type SectionProps = React.PropsWithChildren<OwnProps>
const Section = React.forwardRef<HTMLDivElement, SectionProps>((props:SectionProps, ref)=> {
    return <div className="section" ref={ref}>
        {props.headLine && <div className={"headLine " + props.headingType}>{props.headLine}</div>}
        {props.children}
    </div>
})

export default Section;