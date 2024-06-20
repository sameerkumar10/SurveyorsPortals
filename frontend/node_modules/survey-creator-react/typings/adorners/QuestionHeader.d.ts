import { QuestionAdornerViewModel } from "survey-creator-core";
import React from "react";
export interface QuestionWrapperHeaderProps {
    className?: string;
    model: QuestionAdornerViewModel;
}
export declare class QuestionWrapperHeader extends React.Component<QuestionWrapperHeaderProps, any> {
    render(): JSX.Element;
}
