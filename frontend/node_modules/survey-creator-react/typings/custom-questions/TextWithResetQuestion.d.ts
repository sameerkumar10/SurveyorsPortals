/// <reference types="react" />
import { QuestionCommentWithResetModel, QuestionTextWithResetModel } from "survey-creator-core";
import { SurveyQuestionElementBase } from "survey-react-ui";
export declare class SurveyQuestionTextWithReset extends SurveyQuestionElementBase {
    protected get question(): QuestionTextWithResetModel | QuestionCommentWithResetModel;
    protected renderElement(): JSX.Element;
    protected renderInput(): JSX.Element;
    protected renderResetButton(): JSX.Element;
}
