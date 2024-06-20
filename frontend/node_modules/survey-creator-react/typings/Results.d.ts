/// <reference types="react" />
import { Base, SurveyModel } from "survey-core";
import { SurveyResultsModel } from "survey-creator-core";
import { CreatorModelElement } from "./ModelElement";
interface ISurveyResultsProps {
    survey: SurveyModel;
}
export declare class SurveyResults extends CreatorModelElement<ISurveyResultsProps, any> {
    model: SurveyResultsModel;
    protected createModel(props: any): void;
    protected getUpdatedModelProps(): string[];
    protected getStateElement(): Base;
    render(): JSX.Element;
    renderResultAsText(): JSX.Element;
    renderResultAsTable(): JSX.Element;
    static renderRows(data: Array<any>): Array<JSX.Element>;
}
export declare class SurveyResultsByRow extends CreatorModelElement<any, any> {
    private get row();
    protected getStateElement(): Base;
    render(): JSX.Element;
}
export {};
