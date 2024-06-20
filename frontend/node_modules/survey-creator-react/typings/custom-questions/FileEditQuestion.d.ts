/// <reference types="react" />
import { QuestionFileEditorModel } from "survey-creator-core";
import { SurveyQuestionText } from "survey-react-ui";
export declare class SurveyQuestionFileEditor extends SurveyQuestionText {
    constructor(props: any);
    protected get questionFile(): QuestionFileEditorModel;
    protected getValueCore(): any;
    protected renderInput(): JSX.Element;
    protected renderFileInput(): JSX.Element;
    protected renderButtons(): JSX.Element;
    protected renderClearButton(): JSX.Element;
    protected renderChooseButton(): JSX.Element;
    protected renderElement(): JSX.Element;
}
