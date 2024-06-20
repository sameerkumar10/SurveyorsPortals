import { QuestionAdornerViewModel } from "survey-creator-core";
import React from "react";
export interface QuestionWrapperFooterProps {
    className?: string;
    model: QuestionAdornerViewModel;
}
export declare class QuestionWrapperFooter extends React.Component<QuestionWrapperFooterProps, any> {
    render(): JSX.Element;
}
