/// <reference types="react" />
import { QuestionColorModel } from "survey-creator-core";
import { SurveyQuestionText } from "survey-react-ui";
export declare class SurveyQuestionColor extends SurveyQuestionText {
    constructor(props: any);
    protected get question(): QuestionColorModel;
    protected renderInput(): JSX.Element;
    protected renderElement(): JSX.Element;
    protected getValueCore(): string;
    protected renderColorSwatch(): JSX.Element;
    protected renderDropdownAction(): JSX.Element;
    protected renderPopup(): JSX.Element;
}
