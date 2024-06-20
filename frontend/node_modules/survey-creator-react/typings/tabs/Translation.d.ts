/// <reference types="react" />
import { Base } from "survey-core";
import { SurveyElementBase } from "survey-react-ui";
export declare class TabTranslationComponent extends SurveyElementBase<any, any> {
    private get model();
    protected getStateElement(): Base;
    renderElement(): JSX.Element;
    renderElementContent(): JSX.Element;
}
