import { Question, SurveyError, SurveyModel } from "survey-core";
import { ISurveyCreator } from "survey-react-ui";
import { SurveyCreatorModel } from "survey-creator-core";
import React from "react";
interface IQuestionEditorContentComponentProps {
    creator: SurveyCreatorModel;
    survey: SurveyModel;
}
export declare class QuestionEditorContentComponent extends React.Component<IQuestionEditorContentComponentProps, any> implements ISurveyCreator {
    get survey(): SurveyModel;
    createQuestionElement(question: Question): JSX.Element;
    questionTitleLocation(): string;
    questionErrorLocation(): string;
    renderError(key: string, error: SurveyError, cssClasses: any): JSX.Element;
    render(): JSX.Element;
}
export {};
