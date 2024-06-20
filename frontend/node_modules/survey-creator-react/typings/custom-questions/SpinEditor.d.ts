/// <reference types="react" />
import { QuestionSpinEditorModel } from "survey-creator-core";
import { SurveyQuestionText } from "survey-react-ui";
export declare class SurveyQuestionSpinEditor extends SurveyQuestionText {
    constructor(props: any);
    protected get question(): QuestionSpinEditorModel;
    protected renderInput(): JSX.Element;
    protected renderElement(): JSX.Element;
    protected getValueCore(): string;
    protected renderButtons(): JSX.Element;
}
