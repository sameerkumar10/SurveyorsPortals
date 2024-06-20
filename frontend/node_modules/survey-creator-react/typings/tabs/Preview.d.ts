/// <reference types="react" />
import { Base } from "survey-core";
import { SurveyElementBase } from "survey-react-ui";
export declare class TabPreviewTestSurveyAgainComponent extends SurveyElementBase<any, any> {
    private get model();
    protected getStateElement(): Base;
    renderElement(): JSX.Element;
}
export declare class TabPreviewSurveyComponent extends SurveyElementBase<any, any> {
    constructor(props: any);
    private get model();
    protected getStateElement(): Base;
    renderElement(): JSX.Element;
    getBottomToolbar(): JSX.Element;
}
