/// <reference types="react" />
import { Base } from "survey-core";
import { SurveyElementBase } from "survey-react-ui";
export declare class TabLogicAddButtonComponent extends SurveyElementBase<any, any> {
    private get model();
    protected getStateElement(): Base;
    renderElement(): JSX.Element;
}
export declare class TabLogicComponent extends SurveyElementBase<any, any> {
    private get model();
    protected getStateElement(): Base;
    renderElement(): JSX.Element;
    private renderViewContent;
}
