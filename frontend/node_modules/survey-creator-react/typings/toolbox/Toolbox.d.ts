/// <reference types="react" />
import { Base } from "survey-core";
import { SurveyElementBase } from "survey-react-ui";
import { SurveyCreatorModel } from "survey-creator-core";
export interface ISurveyCreatorToolboxProps {
    model: SurveyCreatorModel;
}
export declare class Toolbox extends SurveyElementBase<ISurveyCreatorToolboxProps, any> {
    get creator(): SurveyCreatorModel;
    get toolbox(): import("survey-creator-core").QuestionToolbox;
    protected getStateElement(): Base;
    render(): JSX.Element;
    renderItems(items: Array<any>, isCompact?: boolean): JSX.Element[];
    renderCategories(): JSX.Element[];
}
