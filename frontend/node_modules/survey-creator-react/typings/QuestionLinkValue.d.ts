/// <reference types="react" />
import { SurveyQuestionElementBase } from "survey-react-ui";
import { QuestionLinkValueModel } from "survey-creator-core";
export declare class SurveyQuestionLinkValue extends SurveyQuestionElementBase {
    protected get question(): QuestionLinkValueModel;
    protected renderClear(): JSX.Element;
    protected renderElement(): JSX.Element;
}
